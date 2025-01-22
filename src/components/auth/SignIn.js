import React, { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { AuthContext } from '../../context/AuthContext';
import { signinSchema } from '../../validations/authSchema';
import AuthLayout from '../../layouts/AuthLayout';
import { StyledForm, Title, Subtitle, InputGroup, Label, ErrorMessage } from '../../styles/components/form.styles';
import { Input } from '../../styles/components/inputs.styles';
import Button from '../../styles/components/buttons.styles';
import { AuthLink } from '../../styles/components/auth.styles';
import { SIGN_IN } from '../../graphql/mutations';
import styled from 'styled-components';

const SignIn = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  const [loginUser] = useMutation(SIGN_IN);

  const initialValues = {
    email: '',
    password: '',
  };

  const testCredentials = {
    email: 'jothika@example.com',
    password: 'Hello@2025',
  };

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const { data } = await loginUser({
        variables: {
          input: {
            email: values.email.trim(),
            password: values.password,
          },
        },
      });

      if (data.signIn.token) {
        console.log(data.signIn);
        signIn(data.signIn);
        navigate('/');
      }
    } catch (error) {
      setFieldError('email', 'Invalid email or password');
      setFieldError('password', 'Invalid email or password');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout>
      <Formik initialValues={initialValues} validationSchema={signinSchema} onSubmit={handleSubmit}>
        {({ isSubmitting, errors, touched, setFieldValue }) => (
          <Form as={StyledForm}>
            <Title>Welcome back</Title>
            <Subtitle>
              Sign in to continue to Blog It
              <QuickFillButton
                type='button'
                onClick={() => {
                  setFieldValue('email', testCredentials.email);
                  setFieldValue('password', testCredentials.password);
                }}
              >
                (Quick Fill Test Data)
              </QuickFillButton>
            </Subtitle>

            <InputGroup>
              <Label htmlFor='email'>Email</Label>
              <Field as={Input} id='email' name='email' type='email' placeholder='Enter your email' />
              {touched.email && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor='password'>Password</Label>
              <Field as={Input} id='password' name='password' type='password' placeholder='Enter your password' />
              {touched.password && errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
            </InputGroup>

            <Button type='submit' disabled={isSubmitting} fullWidth>
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </Button>

            <AuthLink>
              Don't have an account? <a href='/signup'>Sign up</a>
            </AuthLink>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

const QuickFillButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.primary};
  font-size: 0.75rem;
  padding: 0;
  margin-left: ${(props) => props.theme.spacing.sm};
  cursor: pointer;
  text-decoration: underline;
  opacity: 0.8;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

export default SignIn;
