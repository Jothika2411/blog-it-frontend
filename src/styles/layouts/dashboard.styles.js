import styled from 'styled-components';

export const DashboardContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, ${(props) => props.theme.colors.background.main}, ${(props) => props.theme.colors.background.white});
`;

export const Header = styled.header`
  background: linear-gradient(to right, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.primary}ee);
  padding: ${(props) => props.theme.spacing.md} 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WelcomeText = styled.h1`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.background.white};
  font-weight: 500;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  letter-spacing: -0.025em;
`;

export const LogoutButton = styled.button`
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${(props) => props.theme.borderRadius.md};
  color: ${(props) => props.theme.colors.background.white};
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  backdrop-filter: blur(10px);

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
  align-items: center;
`;

export const NewPostButton = styled.button`
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.background.white};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.md};
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;

  &:hover {
    background-color: ${(props) => props.theme.colors.background.main};
    transform: translateY(-1px);
  }
`;
