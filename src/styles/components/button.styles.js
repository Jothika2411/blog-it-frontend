import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  width: -webkit-fill-available;
  width: -moz-available;
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background.white};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.md};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background: ${(props) => props.theme.colors.primaryHover};
  }

  &:active {
    transform: translateY(1px);
  }
`;

export default Button;
