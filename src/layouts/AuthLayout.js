import React from 'react';
import {
  AuthContainer,
  ContentWrapper,
  BrandSection,
  BrandContent,
  FormSection,
  Logo,
  Tagline,
  FeatureList,
  FeatureItem,
} from '../styles/components/auth.styles';

const AuthLayout = ({ children }) => (
  <AuthContainer>
    <ContentWrapper>
      <BrandSection>
        <BrandContent>
          <Logo>Blog It</Logo>
          <Tagline>"Write your thoughts, share your world."</Tagline>
          <FeatureList>
            <FeatureItem>✓ Professional blogging platform</FeatureItem>
            <FeatureItem>✓ Share your stories with the world</FeatureItem>
            <FeatureItem>✓ Connect with like-minded writers</FeatureItem>
          </FeatureList>
        </BrandContent>
      </BrandSection>
      <FormSection>{children}</FormSection>
    </ContentWrapper>
  </AuthContainer>
);

export default AuthLayout;
