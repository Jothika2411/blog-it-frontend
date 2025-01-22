import * as Yup from 'yup';

export const blogPostSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title must not exceed 100 characters')
    .required('Title is required')
    .trim(),
  content: Yup.string()
    .min(10, 'Content must be at least 10 characters')
    .max(5000, 'Content must not exceed 5000 characters')
    .required('Content is required')
    .trim(),
});
