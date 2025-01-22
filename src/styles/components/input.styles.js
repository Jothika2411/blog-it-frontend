import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  width: -webkit-fill-available;
  width: -moz-available;
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.md};
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.text.primary};
  transition: all 0.15s ease;
  background: ${(props) => props.theme.colors.background.white};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(30, 41, 59, 0.1);
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.text.light};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  width: -webkit-fill-available;
  width: -moz-available;
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.md};
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.text.primary};
  transition: all 0.15s ease;
  background: ${(props) => props.theme.colors.background.white};
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(30, 41, 59, 0.1);
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.text.light};
  }
`;
