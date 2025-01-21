import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../graphql/queries';

const BlogList = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>Author: {post.author.username}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
