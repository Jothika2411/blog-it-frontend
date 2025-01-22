import styled from 'styled-components';

export const StyledForm = styled.form`
  max-width: 420px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 1.875rem;
  color: ${(props) => props.theme.colors.text.primary};
  margin-bottom: ${(props) => props.theme.spacing.xs};
  font-weight: 600;
  letter-spacing: -0.025em;
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 1rem;
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

export const InputGroup = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.lg};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${(props) => props.theme.spacing.xs};
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const ErrorMessage = styled.div`
  color: ${(props) => props.theme.colors.error};
  font-size: 0.75rem;
  margin-top: ${(props) => props.theme.spacing.xs};
`;

export const CharacterCount = styled.div`
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 0.75rem;
  text-align: right;
  margin-top: ${(props) => props.theme.spacing.xs};
`;
