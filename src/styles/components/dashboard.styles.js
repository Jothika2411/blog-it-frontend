import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.lg};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${(props) => props.theme.spacing.md};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogPostCard = styled.article`
  background: ${(props) => props.theme.colors.background.white};
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  border: 1px solid ${(props) => props.theme.colors.border};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: ${(props) => props.theme.colors.primary};
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 3px;
    height: 100%;
    background: ${(props) => props.theme.colors.primary};
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const PostTitle = styled.h2`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.text.primary};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  font-weight: 600;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  letter-spacing: -0.025em;
  line-height: 1.4;
`;

export const PostContent = styled.p`
  color: ${(props) => props.theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${(props) => props.theme.spacing.md};
  font-size: 0.875rem;
  opacity: 0.9;
`;

export const AuthorName = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  padding-top: ${(props) => props.theme.spacing.sm};
  border-top: 1px solid ${(props) => props.theme.colors.border};

  &:before {
    content: '';
    display: block;
    width: 3px;
    height: 3px;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 50%;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: ${(props) => props.theme.colors.primary};
  font-size: 1rem;
  font-weight: 500;
`;

export const Header = styled.div`
  margin-bottom: 40px;
  background: ${(props) => props.theme.colors.background.white};
  padding: 24px;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text.primary};
  letter-spacing: -0.5px;
`;

export const CreatePostButton = styled(Link)`
  padding: 12px 24px;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  border-radius: ${(props) => props.theme.borderRadius.md};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors.primaryHover};
    transform: translateY(-1px);
  }
`;

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const PostCard = styled.article`
  background: ${(props) => props.theme.colors.background.white};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

export const AuthorInfo = styled.div`
  display: flex;
`;
