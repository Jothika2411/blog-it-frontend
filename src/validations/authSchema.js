import * as Yup from 'yup';

export const signupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username must not exceed 30 characters')
    .matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers and underscores')
    .required('Username is required')
    .trim(),
  email: Yup.string().email('Invalid email address').required('Email is required').trim(),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

export const signinSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required').trim(),
  password: Yup.string().required('Password is required'),
});
