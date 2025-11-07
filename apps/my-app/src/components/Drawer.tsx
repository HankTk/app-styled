import styled from 'styled-components';
import { AxButton, AxHeading3, AxParagraph } from '@ui/components';

const AxDrawer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 320px;
  background-color: var(--color-background-default);
  border-left: 1px solid var(--color-border-default);
  padding: var(--spacing-xl);
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform var(--transition-base);
  z-index: 100;
  overflow-y: auto;
  box-shadow: ${({ $isOpen }) => ($isOpen ? 'var(--shadow-lg)' : 'none')};
`;

const AxDrawerHeader = styled.div`
  margin-bottom: var(--spacing-2xl);
`;

const AxDrawerTitle = styled(AxHeading3)`
  margin-bottom: var(--spacing-sm);
`;

const AxDrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

const AxDrawerSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const AxDrawerToggle = styled(AxButton)`
  position: fixed;
  top: var(--spacing-xl);
  right: var(--spacing-xl);
  z-index: 101;
`;

interface DrawerProps
{
  isOpen: boolean;
  onToggle: () => void;
  theme: 'light' | 'dark';
  onThemeChange: () => void;
}

export function Drawer({ isOpen, onToggle, theme, onThemeChange }: DrawerProps)
{
  return (
    <>
      <AxDrawerToggle onClick={onToggle} variant="secondary">
        {isOpen ? '✕' : '⚙️'}
      </AxDrawerToggle>
      <AxDrawer $isOpen={isOpen}>
        <AxDrawerHeader>
          <AxDrawerTitle>Settings</AxDrawerTitle>
        </AxDrawerHeader>
        <AxDrawerContent>
          <AxDrawerSection>
            <AxParagraph>Theme</AxParagraph>
            <AxButton onClick={onThemeChange} variant="secondary" fullWidth>
              {theme === 'light' ? '🌙 Switch to Dark Mode' : '☀️ Switch to Light Mode'}
            </AxButton>
          </AxDrawerSection>
        </AxDrawerContent>
      </AxDrawer>
    </>
  );
}

