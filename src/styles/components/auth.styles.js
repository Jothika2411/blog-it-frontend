import styled from 'styled-components';

export const AuthLink = styled.p`
  text-align: center;
  margin-top: ${(props) => props.theme.spacing.lg};
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 0.875rem;

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    font-weight: 500;
    margin-left: 4px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background.main};
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  background: ${(props) => props.theme.colors.background.white};

  @media (max-width: 768px) {
    margin: 0;
    box-shadow: none;
  }
`;

export const BrandSection = styled.div`
  flex: 1.2;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.3));
    z-index: 1;
  }

  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BrandContent = styled.div`
  position: relative;
  z-index: 2;
  color: ${(props) => props.theme.colors.background.white};
`;

export const FormSection = styled.div`
  flex: 1;
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.colors.background.white};
  height: 100%;

  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

export const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.background.white};
  margin-bottom: ${(props) => props.theme.spacing.lg};
  letter-spacing: -0.025em;
`;

export const Tagline = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.background.white};
  margin-bottom: ${(props) => props.theme.spacing.xl};
  opacity: 0.9;
  max-width: 440px;
`;

export const FeatureList = styled.div`
  margin-top: ${(props) => props.theme.spacing.xl};
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  color: ${(props) => props.theme.colors.background.white};
  font-size: 1rem;
  opacity: 0.9;

  &:last-child {
    margin-bottom: 0;
  }
`;
