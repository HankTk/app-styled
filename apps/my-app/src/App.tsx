import { ThemeProvider, AxHeader, AxTitle, AxSubtitle, AxSection, AxSectionTitle } from '@ui/components';
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
  margin-bottom: var(--spacing-lg);
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
  margin-bottom: var(--spacing-md);
`;

function AppContent() {
  return (
    <AppContainer>
      <AxMainContent>
        <CompactHeader>
          <div>
            <AxTitle>Account Management</AxTitle>
            <AxSubtitle>Manage user accounts and access</AxSubtitle>
          </div>
        </CompactHeader>
        <ContentSection>
          <CompactSectionTitle>Account Listing</CompactSectionTitle>
          <AccountListingPage />
        </ContentSection>
      </AxMainContent>
    </AppContainer>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

