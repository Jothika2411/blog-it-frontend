import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../graphql/queries';
import { Content, BlogPostCard, PostTitle, PostContent, AuthorName, LoadingWrapper } from '../../styles/components/dashboard.styles';

const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <LoadingWrapper>Loading...</LoadingWrapper>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <DashboardLayout>
      <Content>
        {data.posts.map((post) => (
          <BlogPostCard key={post.id}>
            <PostTitle>{post.title}</PostTitle>
            <PostContent>{post.content.substring(0, 200)}...</PostContent>
            <AuthorName>By {post.author.username}</AuthorName>
          </BlogPostCard>
        ))}
      </Content>
    </DashboardLayout>
  );
};

export default Dashboard;
