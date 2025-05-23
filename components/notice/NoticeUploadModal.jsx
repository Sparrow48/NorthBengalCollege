'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { DEPARTMENTS_KEY } from '@/data/departments';

export default function NoticeUploadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const fileInputRef = useRef(null);

  const router = useRouter();

  const handleUpload = async () => {
    setError('');
    setSuccess('');
    const file = fileInputRef.current?.files?.[0];

    if (!file) {
      setError('Please select a PDF file');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB');
      return;
    }
    if (!title) {
      setError('Please enter a title');
      return;
    }
    if (!department) {
      setError('Please select a department');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('department', department);

    try {
      const response = await fetch('/api/notice/upload-notice', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error || 'Upload failed');
      }

      setSuccess('Notice uploaded successfully!');
      router.refresh();
      setTitle('');
      setDepartment('');
      fileInputRef.current.value = '';
      setTimeout(() => {
        setSuccess('');
        setIsOpen(false);
      }, 1000);
    } catch (err) {
      setError(err.message || 'Failed to upload notice');
    }
  };

  return (
    <>
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-theme-primary text-white rounded hover:bg-[#10485B]/90"
        >
          Upload Notice
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <h2 className="text-xl font-semibold mb-6 text-center">
              Upload Notice
            </h2>

            <button
              onClick={() => {
                setIsOpen(false);
                setTitle('');
                setDepartment('');
                setError('');
                setSuccess('');
                fileInputRef.current.value = '';
              }}
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl"
            >
              ×
            </button>

            <div className="mb-4 text-left">
              <label className="block text-sm font-medium mb-1">
                Department
              </label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              >
                <option value="">Select Department</option>
                {Object.keys(DEPARTMENTS_KEY).map((key) => (
                  <option key={key} value={key}>
                    {DEPARTMENTS_KEY[key]}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4 text-left">
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                placeholder="Enter notice title"
              />
            </div>

            <div className="mb-6 text-left flex flex-col md:flex-row justify-between">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Upload PDF
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="application/pdf"
                  className="text-sm"
                />
              </div>
              <div className="md:ml-4 flex justify-end items-end">
                <button
                  onClick={handleUpload}
                  className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Upload
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-100 p-3 rounded text-sm text-red-700 mt-4">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-100 p-3 rounded text-sm text-green-700 mt-4">
                {success}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
