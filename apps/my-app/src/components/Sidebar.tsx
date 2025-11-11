import styled from 'styled-components';
import { AxButton } from '@ui/components';
import { useI18n } from '../i18n/I18nProvider';

const AxOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity var(--transition-base), visibility var(--transition-base);
`;

const AxSidebar = styled.div<{ $isOpen: boolean }>`
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
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform var(--transition-base);
  box-shadow: ${({ $isOpen }) => ($isOpen ? 'var(--shadow-lg)' : 'none')};
`;

const AxSidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-2xl);
  padding-top: calc(44px + var(--spacing-lg));
`;

const AxSidebarTitleWrapper = styled.div`
  flex: 1;
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

const AxMenuToggle = styled(AxButton)<{ $isOpen: boolean }>`
  position: fixed;
  top: var(--spacing-lg);
  left: var(--spacing-lg);
  z-index: 102;
  min-width: 44px;
  height: 44px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background-color: var(--color-background-default);
  border: 2px solid var(--color-border-default);
  box-shadow: var(--shadow-sm);
  color: var(--color-text-primary);
  transition: all var(--transition-base);
  
  &:hover {
    background-color: var(--color-background-hover);
    border-color: var(--color-primary);
    color: var(--color-primary);
    box-shadow: var(--shadow-md);
    transform: scale(1.05);
  }
  
  ${({ $isOpen }) => $isOpen && `
    left: calc(280px - 44px - var(--spacing-lg));
    background-color: var(--color-primary);
    color: var(--color-text-inverse);
    border-color: var(--color-primary);
    
    &:hover {
      background-color: var(--color-primary-hover);
      color: var(--color-text-inverse);
    }
  `}
`;

interface SidebarProps
{
  isOpen: boolean;
  onToggle: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const menuItems = [
  { id: 'accounts', labelKey: 'sidebar.accounts' },
];

export function Sidebar({ isOpen, onToggle, currentPage, onPageChange }: SidebarProps)
{
  const { t } = useI18n();

  return (
    <>
      <AxOverlay $isOpen={isOpen} onClick={onToggle} />
      <AxMenuToggle 
        onClick={onToggle} 
        variant="secondary"
        $isOpen={isOpen}
        aria-label={isOpen ? t('app.menu') : t('app.menu')}
      >
        {isOpen ? '✕' : '☰'}
      </AxMenuToggle>
      <AxSidebar $isOpen={isOpen}>
        <AxSidebarHeader>
          <AxSidebarTitleWrapper>
            <AxSidebarTitle>{t('sidebar.title')}</AxSidebarTitle>
            <AxSidebarSubtitle>{t('sidebar.subtitle')}</AxSidebarSubtitle>
          </AxSidebarTitleWrapper>
        </AxSidebarHeader>
        <AxMenuList>
          {menuItems.map((item) => (
            <AxMenuItem key={item.id}>
              <AxMenuButton
                $isActive={currentPage === item.id}
                onClick={() => {
                  onPageChange(item.id);
                  onToggle(); // Close sidebar after selection
                }}
                variant={currentPage === item.id ? 'primary' : 'secondary'}
              >
                {t(item.labelKey)}
              </AxMenuButton>
            </AxMenuItem>
          ))}
        </AxMenuList>
      </AxSidebar>
    </>
  );
}

