import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../../graphql/mutations';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUp] = useMutation(SIGN_UP);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signUp({ variables: { input: { username, email, password } } });
      console.log('Signed up:', data);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' required />
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUp;
