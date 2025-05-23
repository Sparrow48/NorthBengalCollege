'use client';
import { NEWS_TYPES } from '@/data';
import { DEPARTMENTS_KEY } from '@/data/departments';
import { newsFormErrorHandler } from '@/lib/formErrorHandler';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const QuillEditor = dynamic(() => import('@/components/common/QuillEditor'), {
  ssr: false,
});

const options = Object.keys(DEPARTMENTS_KEY).map((key) => ({
  value: key,
  label: DEPARTMENTS_KEY[key],
}));

export default function NewsActionModal({ news }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: null,
    imageAlt: '',
    type: '',
    department: [],
  });

  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('');
  const [success, setSuccess] = useState(null);
  const [isFeatured, setIsFeatured] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [formError, setFormError] = useState({
    title: '',
    content: '',
    image: '',
    type: '',
    imageAlt: '',
  });

  const router = useRouter();

  useEffect(() => {
    if (news) {
      setFormData({
        title: news.title || '',
        content: news.content || '',
        image: news.imageUrl || null,
        imageAlt: news.imageAlt || '',
        type: news.type || '',
        department: news.department || [],
      });
      setImagePreview(news.imageUrl);
      setType(news.type || '');
      setIsFeatured(news.isFeatured || false);
    }
  }, [news]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    if (value) {
      const updatedError = { ...formError, [name]: '' };
      setFormError(updatedError);
    }

    setError(null);
  };

  const handleDepartmentChange = (selectedOptions) => {
    const values = selectedOptions.map((opt) => opt.value);
    setFormData({ ...formData, department: values });
  };

  const handleContentChange = (content) => {
    const updatedFormData = { ...formData, content };
    setFormData(updatedFormData);
    if (content) {
      const updatedError = { ...formError, content: '' };
      setFormError(updatedError);
    }

    setError(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const updatedFormData = { ...formData, image: file };
      setFormData(updatedFormData);

      setImagePreview(URL.createObjectURL(file));
      const updatedError = { ...formError, image: '' };
      setFormError(updatedError);
    }

    setError(null);
  };

  const handleTypeChange = (e) => {
    const { value } = e.target;
    setType(value);
    const updatedFormData = { ...formData, type: value };
    setFormData(updatedFormData);
    if (value) {
      const updatedError = { ...formError, type: '' };
      setFormError(updatedError);
    }

    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { errors, hasErrors } = newsFormErrorHandler(formData);
    if (hasErrors) {
      setFormError(errors);
      return;
    }
    setDisable(false);
    setLoading(true);

    try {
      if (!formData.image) {
        throw new Error('Please upload an image');
      }

      const _departments = formData?.department || [];

      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('content', formData.content);
      formDataToSend.append('type', type);
      formDataToSend.append('imageAlt', formData.imageAlt);
      formDataToSend.append('isFeatured', isFeatured);
      formDataToSend.append('department', JSON.stringify(_departments));

      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      const response = await fetch(`/api/news/update/${news.id}`, {
        method: 'PATCH',
        body: formDataToSend,
      });
      const data = await response.json();

      if (!response.ok) {
        setLoading(false);
        setDisable(false);
        if (data.error) {
          throw new Error(data.error);
        } else {
          throw new Error('Failed to create news');
        }
      }
      router.refresh();
      setSuccess('Notice uploaded successfully!');

      setTimeout(() => {
        setLoading(false);
        setDisable(false);
        setSuccess('');
        setIsOpen(false);
      }, 1000);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleNewsPublish = async (id, isPublished) => {
    setLoading(true);
    setDisable(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('isPublished', isPublished);

      const response = await fetch(`/api/news/update/${id}`, {
        method: 'PATCH',
        body: formDataToSend,
      });
      const data = await response.json();

      if (!response.ok) {
        setLoading(false);
        setDisable(false);
        if (data.error) {
          throw new Error(data.error);
        } else {
          throw new Error('Failed to update news');
        }
      }

      router.refresh();

      setSuccess('News updated successfully!');
      setTimeout(() => {
        setSuccess('');
      }, 1000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setDisable(false);
    }
  };

  return (
    <>
      <div className="flex space-x-2">
        <div className="relative inline-block w-11 h-5">
          <input
            checked={news.isPublished}
            onChange={(e) => handleNewsPublish(news.id, e.target.checked)}
            id="switch-component"
            type="checkbox"
            className="peer appearance-none w-11 h-5 bg-gray-400 rounded-full checked:bg-green-600 cursor-pointer transition-colors duration-300"
          />
          <label
            htmlFor="switch-component"
            className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
          ></label>
        </div>
        <button
          className="text-theme-blue-light font-medium flex items-center"
          onClick={() => setIsOpen(true)}
        >
          Edit
        </button>
        {/* <button
          className="text-theme-red-light font-medium flex items-center"
          onClick={() => setIsDeleteModalOpen(true)}
        >
          Delete
        </button> */}
      </div>
      {/* 
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative max-h-[90vh] overflow-y-auto">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h1 className="text-2xl font-bold mb-6 text-center">
                Are you sure you want to delete this news?
              </h1>
              <div className="flex justify-between">
                <button
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleNewsPublish(news.id, false)}
                  className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative max-h-[90vh] overflow-y-auto">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h1 className="text-2xl font-bold mb-6 text-center">
                Update the News
              </h1>

              <button
                onClick={() => {
                  setIsOpen(false);
                  setFormData({
                    title: '',
                    content: '',
                    image: null,
                    imageAlt: '',
                    type: '',
                  });
                  setImagePreview(null);
                  setType('');
                  setIsFeatured(false);
                  setError(null);
                  setSuccess(null);
                  setFormError({
                    title: '',
                    content: '',
                    image: '',
                    type: '',
                    imageAlt: '',
                  });
                  setDisable(false);
                  setLoading(false);
                  setIsDeleteModalOpen(false);
                }}
                className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl"
              >
                ×
              </button>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {formError?.title && (
                    <p className="text-red-500 text-start my-4">
                      {formError?.title}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Content
                  </label>
                  <QuillEditor
                    value={formData.content}
                    onChange={handleContentChange}
                  />
                  {formError?.content && (
                    <p className="text-red-500 text-start my-4">
                      {formError?.content}
                    </p>
                  )}
                </div>
                <div className="mb-4 text-left">
                  <label className="block text-sm font-medium mb-1">Type</label>
                  <select
                    value={type}
                    onChange={handleTypeChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  >
                    {Object.keys(NEWS_TYPES).map((key) => (
                      <option key={key} value={key}>
                        {NEWS_TYPES[key]}
                      </option>
                    ))}
                  </select>
                  {formError?.type && (
                    <p className="text-red-500 text-start my-4">
                      {formError?.type}
                    </p>
                  )}
                </div>
                <div className="mb-4 text-left">
                  <label className="block text-sm font-medium mb-1">
                    Select Department
                  </label>
                  <Select
                    isMulti
                    options={options}
                    value={options.filter((opt) =>
                      formData.department?.includes(opt.value)
                    )}
                    onChange={handleDepartmentChange}
                    className="text-sm mb-4"
                    placeholder="Select Departments"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium hover:file:bg-gray-100"
                  />
                  {formError?.image && (
                    <p className="text-red-500 text-start my-4">
                      {formError?.image}
                    </p>
                  )}
                  {imagePreview && (
                    <div className="mt-4">
                      <Image
                        src={imagePreview}
                        alt="Image Preview"
                        width={200}
                        height={200}
                      />
                    </div>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    Image Alt Text
                  </label>
                  <input
                    type="text"
                    name="imageAlt"
                    value={formData.imageAlt}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {formError?.imageAlt && (
                    <p className="text-red-500 text-start my-4">
                      {formError?.imageAlt}
                    </p>
                  )}
                </div>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="isFeatured"
                    name="isFeatured"
                    className="mr-2"
                    checked={isFeatured}
                    onChange={(e) => setIsFeatured(e.target.checked)}
                  />
                  <label htmlFor="isFeatured" className="text-sm font-medium">
                    Is Featured
                  </label>
                </div>
                {error && (
                  <p className="text-red-500 text-center my-4">{error}</p>
                )}
                {success && (
                  <div className="bg-green-100 p-3 rounded text-sm text-green-700 mt-4">
                    {success}
                  </div>
                )}
                <button
                  type="submit"
                  className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    loading || disable
                      ? 'opacity-70 bg-gray-300 hover:bg-gray-300 cursor-not-allowed'
                      : ''
                  }`}
                  disabled={loading || disable}
                >
                  {loading ? 'Updating...' : 'Update News'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
