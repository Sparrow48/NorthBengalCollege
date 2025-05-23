export const newsFormErrorHandler = (formData) => {
  const errors = {};
  const { title, content, image, type, imageAlt } = formData;
  let hasErrors = false;

  if (!title) {
    errors.title = 'Title is required';
    hasErrors = true;
  } else if (title?.length < 5) {
    errors.title = 'Title must be at least 5 characters long';
    hasErrors = true;
  }

  if (!content) {
    errors.content = 'Content is required';
    hasErrors = true;
  } else if (content?.length < 20) {
    errors.content = 'Content must be at least 20 characters long';
    hasErrors = true;
  }

  if (!image) {
    errors.image = 'Image is required';
    hasErrors = true;
  }

  if (!type) {
    errors.type = 'Type is required';
    hasErrors = true;
  }

  if (!imageAlt) {
    errors.imageAlt = 'Image alt text is required';
    hasErrors = true;
  }

  return { errors, hasErrors };
};
