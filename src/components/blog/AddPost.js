import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../graphql/mutations';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../../styles/components/buttons.styles';
import Input from '../../styles/components/inputs.styles';
import { StyledForm } from '../../styles/components/form.styles';

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [addPost] = useMutation(ADD_POST);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPost({ variables: { input: { title, content } } });
      navigate('/');
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' required />
      <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder='Content' required />
      <Button type='submit'>Add Post</Button>
    </StyledForm>
  );
};

export default AddPost;
