import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../../graphql/mutations';
import { signupSchema } from '../../validations/authSchema';
import AuthLayout from '../../layouts/AuthLayout';
import { StyledForm, Title, Subtitle, InputGroup, Label, ErrorMessage } from '../../styles/components/form.styles';
import { Input } from '../../styles/components/input.styles';
import Button from '../../styles/components/button.styles';
import { AuthLink } from '../../styles/components/auth.styles';

const SignUp = () => {
  const navigate = useNavigate();
  const [registerUser] = useMutation(SIGN_UP);

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      await registerUser({
        variables: {
          input: {
            username: values.username.trim(),
            email: values.email.trim(),
            password: values.password,
          },
        },
      });
      navigate('/signin', { state: { message: 'Registration successful! Please sign in.' } });
    } catch (error) {
      if (error.message.includes('email')) {
        setFieldError('email', 'Email already exists');
      } else if (error.message.includes('username')) {
        setFieldError('username', 'Username already taken');
      } else {
        setFieldError('general', 'Registration failed. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout>
      <Formik initialValues={initialValues} validationSchema={signupSchema} onSubmit={handleSubmit}>
        {({ isSubmitting, errors, touched }) => (
          <Form as={StyledForm}>
            <Title>Create an account</Title>
            <Subtitle>Join Blog It and start sharing your stories</Subtitle>

            <InputGroup>
              <Label htmlFor='username'>Username</Label>
              <Field as={Input} id='username' name='username' type='text' placeholder='Choose a username' />
              {touched.username && errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor='email'>Email</Label>
              <Field as={Input} id='email' name='email' type='email' placeholder='Enter your email' />
              {touched.email && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor='password'>Password</Label>
              <Field as={Input} id='password' name='password' type='password' placeholder='Create a password' />
              {touched.password && errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor='confirmPassword'>Confirm Password</Label>
              <Field as={Input} id='confirmPassword' name='confirmPassword' type='password' placeholder='Confirm your password' />
              {touched.confirmPassword && errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
            </InputGroup>

            <Button type='submit' disabled={isSubmitting} fullWidth>
              {isSubmitting ? 'Creating account...' : 'Sign Up'}
            </Button>

            <AuthLink>
              Already have an account? <a href='/signin'>Sign in</a>
            </AuthLink>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default SignUp;
