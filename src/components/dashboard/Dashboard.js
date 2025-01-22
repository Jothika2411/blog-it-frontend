import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../graphql/queries';
import { FiHeart, FiMessageSquare, FiBookmark } from 'react-icons/fi';
import {
  DashboardContent,
  Header,
  Title,
  PostsGrid,
  PostCard,
  PostImage,
  PostContent,
  PostTitle,
  PostExcerpt,
  PostMeta,
  AuthorInfo,
  AuthorAvatar,
  AuthorName,
  PostStats,
  StatItem,
  StatIcon,
  StatCount,
  LoadingSpinner,
} from '../../styles/components/dashboard.styles';

const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <LoadingSpinner>Loading...</LoadingSpinner>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <DashboardLayout>
      <DashboardContent>
        <Header>
          <Title>Your Feed</Title>
        </Header>
        <PostsGrid>
          {data.posts.map((post) => (
            <PostCard key={post.id}>
              <PostImage src={post.coverImage || 'https://source.unsplash.com/random/800x600?blog'} alt={post.title} />
              <PostContent>
                <PostTitle>{post.title}</PostTitle>
                <PostExcerpt>{post.content.substring(0, 150)}...</PostExcerpt>
                <PostMeta>
                  <AuthorInfo>
                    <AuthorAvatar src={post.author.avatar || 'https://source.unsplash.com/random/40x40?person'} alt={post.author.username} />
                    <AuthorName>{post.author.username}</AuthorName>
                  </AuthorInfo>
                  <PostStats>
                    <StatItem>
                      <StatIcon>
                        <FiHeart />
                      </StatIcon>
                      <StatCount>{post.likes?.length || 0}</StatCount>
                    </StatItem>
                    <StatItem>
                      <StatIcon>
                        <FiMessageSquare />
                      </StatIcon>
                      <StatCount>{post.comments?.length || 0}</StatCount>
                    </StatItem>
                    <StatItem>
                      <StatIcon>
                        <FiBookmark />
                      </StatIcon>
                      <StatCount>{post.bookmarks?.length || 0}</StatCount>
                    </StatItem>
                  </PostStats>
                </PostMeta>
              </PostContent>
            </PostCard>
          ))}
        </PostsGrid>
      </DashboardContent>
    </DashboardLayout>
  );
};

export default Dashboard;
