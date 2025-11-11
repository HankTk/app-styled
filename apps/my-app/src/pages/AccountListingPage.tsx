import {
  AxTable,
  AxTableHead,
  AxTableBody,
  AxTableRow,
  AxTableHeader,
  AxTableCell,
  AxCard,
  AxHeading3,
  AxParagraph,
  AxButton,
} from '@ui/components';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  height: 100%;
  min-height: 0;
  overflow: hidden;
`;

const HeaderCard = styled(AxCard)`
  flex-shrink: 0;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
`;

const TableCard = styled(AxCard)`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  max-height: calc(100% - 2rem);
  overflow: hidden;
`;

interface Account {
  id: string;
  name: string;
  email: string;
  accountType: string;
  status: 'Active' | 'Inactive' | 'Pending';
  balance: string;
  createdAt: string;
}

export function AccountListingPage() {
  const accounts: Account[] = [
    {
      id: 'ACC-001',
      name: 'John Doe',
      email: 'john.doe@example.com',
      accountType: 'Premium',
      status: 'Active',
      balance: '$12,450.00',
      createdAt: '2024-01-15',
    },
    {
      id: 'ACC-002',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      accountType: 'Standard',
      status: 'Active',
      balance: '$8,230.50',
      createdAt: '2024-02-20',
    },
    {
      id: 'ACC-003',
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      accountType: 'Premium',
      status: 'Inactive',
      balance: '$0.00',
      createdAt: '2023-11-10',
    },
    {
      id: 'ACC-004',
      name: 'Alice Williams',
      email: 'alice.williams@example.com',
      accountType: 'Enterprise',
      status: 'Active',
      balance: '$45,680.75',
      createdAt: '2024-03-05',
    },
    {
      id: 'ACC-005',
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      accountType: 'Standard',
      status: 'Pending',
      balance: '$1,200.00',
      createdAt: '2024-04-12',
    },
    {
      id: 'ACC-006',
      name: 'Diana Prince',
      email: 'diana.prince@example.com',
      accountType: 'Premium',
      status: 'Active',
      balance: '$23,890.25',
      createdAt: '2024-01-28',
    },
  ];

  const getStatusColor = (status: Account['status']) => {
    switch (status) {
      case 'Active':
        return 'var(--color-success)';
      case 'Inactive':
        return 'var(--color-error)';
      case 'Pending':
        return 'var(--color-warning)';
      default:
        return 'var(--color-text-secondary)';
    }
  };

  return (
    <PageContainer>
      <HeaderCard padding="large">
        <HeaderSection>
          <div>
            <AxHeading3 style={{ marginBottom: 'var(--spacing-xs)' }}>
              Accounts
            </AxHeading3>
            <AxParagraph style={{ color: 'var(--color-text-secondary)' }}>
              Manage and view all user accounts
            </AxParagraph>
          </div>
          <AxButton variant="primary">Add New Account</AxButton>
        </HeaderSection>
      </HeaderCard>

      <TableCard padding="large">
        <div style={{ flex: 1, overflow: 'auto', minHeight: 0 }}>
          <AxTable fullWidth>
            <AxTableHead>
              <AxTableRow>
                <AxTableHeader>Account ID</AxTableHeader>
                <AxTableHeader>Name</AxTableHeader>
                <AxTableHeader>Email</AxTableHeader>
                <AxTableHeader>Account Type</AxTableHeader>
                <AxTableHeader>Status</AxTableHeader>
                <AxTableHeader align="right">Balance</AxTableHeader>
                <AxTableHeader>Created At</AxTableHeader>
                <AxTableHeader align="center">Actions</AxTableHeader>
              </AxTableRow>
            </AxTableHead>
            <AxTableBody>
              {accounts.map((account) => (
                <AxTableRow key={account.id}>
                  <AxTableCell>{account.id}</AxTableCell>
                  <AxTableCell>{account.name}</AxTableCell>
                  <AxTableCell>{account.email}</AxTableCell>
                  <AxTableCell>{account.accountType}</AxTableCell>
                  <AxTableCell>
                    <span
                      style={{
                        color: getStatusColor(account.status),
                        fontWeight: 500,
                      }}
                    >
                      {account.status}
                    </span>
                  </AxTableCell>
                  <AxTableCell align="right">{account.balance}</AxTableCell>
                  <AxTableCell>{account.createdAt}</AxTableCell>
                  <AxTableCell align="center">
                    <div style={{ display: 'flex', gap: 'var(--spacing-sm)', justifyContent: 'center' }}>
                      <AxButton variant="secondary" size="small">
                        View
                      </AxButton>
                      <AxButton variant="secondary" size="small">
                        Edit
                      </AxButton>
                    </div>
                  </AxTableCell>
                </AxTableRow>
              ))}
            </AxTableBody>
          </AxTable>
        </div>
      </TableCard>
    </PageContainer>
  );
}

