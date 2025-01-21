import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const SIGN_UP = gql`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation AddPost($input: AddPostInput!) {
    addPost(input: $input) {
      id
      title
      content
      author {
        username
      }
    }
  }
`;
