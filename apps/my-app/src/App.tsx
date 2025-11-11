import { useState } from 'react';
import { ThemeProvider, useTheme, AxHeader, AxTitle, AxSubtitle, AxSection, AxSectionTitle, AxContainer } from '@ui/components';
import { I18nProvider, useI18n } from './i18n/I18nProvider';
import { Sidebar } from './components/Sidebar';
import { Drawer } from './components/Drawer';
import { AccountListingPage } from './pages/AccountListingPage';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-background-page);
  transition: background-color var(--transition-base);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const AxMainContent = styled.div`
  padding: var(--spacing-lg) var(--spacing-lg);
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const CompactHeader = styled(AxHeader)`
  margin-bottom: var(--spacing-sm);
  flex-shrink: 0;
`;

const ContentSection = styled(AxSection)`
  flex: 1;
  overflow: hidden;
  margin-bottom: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
`;

const CompactSectionTitle = styled(AxSectionTitle)`
  margin-bottom: var(--spacing-xs);
`;

function AppContent() {
  const [currentPage, setCurrentPage] = useState('accounts');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();

  return (
    <AxContainer>
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      <Drawer
        isOpen={drawerOpen}
        onToggle={() => setDrawerOpen(!drawerOpen)}
        theme={theme}
        onThemeChange={toggleTheme}
      />
      <AppContainer>
        <AxMainContent>
          <CompactHeader>
            <div>
              <AxTitle>{t('app.title')}</AxTitle>
              <AxSubtitle>{t('app.subtitle')}</AxSubtitle>
            </div>
          </CompactHeader>
          <ContentSection>
            <CompactSectionTitle>{t('account.title')}</CompactSectionTitle>
            <AccountListingPage />
          </ContentSection>
        </AxMainContent>
      </AppContainer>
    </AxContainer>
  );
}

function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <AppContent />
      </I18nProvider>
    </ThemeProvider>
  );
}

export default App;

