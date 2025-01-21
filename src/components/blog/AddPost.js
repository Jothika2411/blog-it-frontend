import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../graphql/mutations';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [addPost] = useMutation(ADD_POST);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addPost({ variables: { input: { title, content } } });
      console.log('Post added:', data);
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' required />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder='Content' required />
      <button type='submit'>Add Post</button>
    </form>
  );
};

export default AddPost;
