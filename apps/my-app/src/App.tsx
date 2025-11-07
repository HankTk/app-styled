import { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider, useTheme, AxContainer, AxHeader, AxTitle, AxSubtitle, AxSection, AxSectionTitle } from '@ui/components';
import { Sidebar } from './components/Sidebar';
import { Drawer } from './components/Drawer';
import { ButtonPage } from './pages/ButtonPage';
import { CardPage } from './pages/CardPage';
import { InputPage } from './pages/InputPage';
import { CombinationPage } from './pages/CombinationPage';
import { TablePage } from './pages/TablePage';
import { ChartPage } from './pages/ChartPage';
import { DialogPage } from './pages/DialogPage';

const AxMainContent = styled.div`
  margin-left: 280px;
  padding: var(--spacing-4xl) var(--spacing-xl);
  min-height: 100vh;
`;

const pages: Record<string, { component: React.ComponentType; title: string }> = {
  button: { component: ButtonPage, title: 'Button Component' },
  card: { component: CardPage, title: 'Card Component' },
  input: { component: InputPage, title: 'Input Component' },
  table: { component: TablePage, title: 'Table Component' },
  chart: { component: ChartPage, title: 'Chart Component' },
  dialog: { component: DialogPage, title: 'Dialog Component' },
  combination: { component: CombinationPage, title: 'Combination Example' },
};

function AppContent()
{
  const [currentPage, setCurrentPage] = useState('button');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const CurrentPageComponent = pages[currentPage]?.component || ButtonPage;
  const pageTitle = pages[currentPage]?.title || 'Button Component';

  return (
    <AxContainer>
      <Sidebar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      <Drawer
        isOpen={drawerOpen}
        onToggle={() => setDrawerOpen(!drawerOpen)}
        theme={theme}
        onThemeChange={toggleTheme}
      />
      <AxMainContent>
        <AxHeader>
          <div>
            <AxTitle>Styled Components UI Library</AxTitle>
            <AxSubtitle>Demo application for component library</AxSubtitle>
          </div>
        </AxHeader>
        <AxSection>
          <AxSectionTitle>{pageTitle}</AxSectionTitle>
          <CurrentPageComponent />
        </AxSection>
      </AxMainContent>
    </AxContainer>
  );
}

function App()
{
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
