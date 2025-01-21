import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../../graphql/mutations';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signIn] = useMutation(SIGN_IN);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signIn({ variables: { input: { email, password } } });
      console.log('Signed in:', data);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
      <button type='submit'>Sign In</button>
    </form>
  );
};

export default SignIn;
