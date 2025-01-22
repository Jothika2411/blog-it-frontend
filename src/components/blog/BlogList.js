import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../graphql/queries';
import styled from 'styled-components';

const PostContainer = styled.div`
  background-color: white;
  margin: 20px 0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const BlogList = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.posts.map((post) => (
        <PostContainer key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>Author: {post.author.username}</p>
        </PostContainer>
      ))}
    </div>
  );
};

export default BlogList;
