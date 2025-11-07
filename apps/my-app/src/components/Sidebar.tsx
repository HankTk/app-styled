import styled from 'styled-components';
import { AxButton } from '@ui/components';

const AxSidebar = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 280px;
  background-color: var(--color-background-default);
  border-right: 1px solid var(--color-border-default);
  padding: var(--spacing-xl);
  z-index: 100;
  overflow-y: auto;
`;

const AxSidebarHeader = styled.div`
  margin-bottom: var(--spacing-2xl);
`;

const AxSidebarTitle = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
`;

const AxSidebarSubtitle = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
`;

const AxMenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AxMenuItem = styled.li`
  margin-bottom: var(--spacing-xs);
`;

const AxMenuButton = styled(AxButton)<{ $isActive: boolean }>`
  width: 100%;
  justify-content: flex-start;
  text-align: left;
  background-color: ${({ $isActive }) =>
  {
    return $isActive ? 'var(--color-primary)' : 'transparent';
  }};
  color: ${({ $isActive }) =>
  {
    return $isActive ? 'var(--color-text-inverse)' : 'var(--color-text-primary)';
  }};
  &:hover
  {
    background-color: ${({ $isActive }) =>
    {
      return $isActive ? 'var(--color-primary-hover)' : 'var(--color-background-disabled)';
    }};
  }
`;

interface SidebarProps
{
  currentPage: string;
  onPageChange: (page: string) => void;
}

const menuItems = [
  { id: 'button', label: 'Button' },
  { id: 'card', label: 'Card' },
  { id: 'input', label: 'Input' },
  { id: 'table', label: 'Table' },
  { id: 'chart', label: 'Chart' },
  { id: 'dialog', label: 'Dialog' },
  { id: 'combination', label: 'Combination' },
];

export function Sidebar({ currentPage, onPageChange }: SidebarProps)
{
  return (
    <AxSidebar>
      <AxSidebarHeader>
        <AxSidebarTitle>UI Library</AxSidebarTitle>
        <AxSidebarSubtitle>Component Examples</AxSidebarSubtitle>
      </AxSidebarHeader>
      <AxMenuList>
        {menuItems.map((item) => (
          <AxMenuItem key={item.id}>
            <AxMenuButton
              $isActive={currentPage === item.id}
              onClick={() => onPageChange(item.id)}
              variant={currentPage === item.id ? 'primary' : 'secondary'}
            >
              {item.label}
            </AxMenuButton>
          </AxMenuItem>
        ))}
      </AxMenuList>
    </AxSidebar>
  );
}

