import { useState, useEffect } from 'react';
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
  AxDialog,
  AxInput,
  AxLabel,
  AxFormGroup,
} from '@ui/components';
import { useI18n } from '../i18n/I18nProvider';
import { fetchAccounts, createAccount, updateAccount, deleteAccount, Account } from '../api/accountApi';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  height: 100%;
  min-height: 0;
  overflow: hidden;
`;

const HeaderCard = styled(AxCard)`
  flex-shrink: 0;
  padding: var(--spacing-md) var(--spacing-lg) !important;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
`;

const TableCard = styled(AxCard)`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  max-height: calc(100% - 2rem);
  overflow: hidden;
`;

interface ColumnConfig {
  key: string;
  label: string;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, account: Account) => React.ReactNode;
}

type DialogMode = 'add' | 'edit' | null;

export function AccountListingPage() {
  const { l10n } = useI18n();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [columns, setColumns] = useState<ColumnConfig[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dialogMode, setDialogMode] = useState<DialogMode>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [submitting, setSubmitting] = useState(false);

  // Helper function to reorder columns: move status after created date
  const reorderColumns = (cols: ColumnConfig[]): ColumnConfig[] => {
    const statusIndex = cols.findIndex(col => col.key.toLowerCase() === 'status');
    const createdIndex = cols.findIndex(col => 
      col.key.toLowerCase().includes('created') || 
      col.key.toLowerCase().includes('createdat') ||
      col.key.toLowerCase() === 'created_date'
    );
    
    if (statusIndex !== -1 && createdIndex !== -1 && statusIndex < createdIndex) {
      const statusCol = cols[statusIndex];
      const newCols = [...cols];
      newCols.splice(statusIndex, 1);
      newCols.splice(createdIndex, 0, statusCol);
      return newCols;
    }
    
    return cols;
  };

  // Generate columns from account data
  const generateColumns = (firstAccount: Account, onEdit: (account: Account) => void, onDelete: (account: Account) => void): ColumnConfig[] => {
    const accountKeys = Object.keys(firstAccount);
    
    const generatedColumns: ColumnConfig[] = accountKeys.map((key) => {
      // Skip internal or action keys
      if (key.toLowerCase().includes('action') || 
          key.toLowerCase().includes('_id') || 
          key === '__v' || 
          key.startsWith('__')) {
        return null;
      }
      
      // Generate label with special handling for created_date
      let label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim();
      if (key.toLowerCase() === 'created_date') {
        label = 'Created Date';
      } else if (key.toLowerCase().includes('created') && key.toLowerCase().includes('date')) {
        label = 'Created Date';
      }
      
      const column: ColumnConfig = {
        key,
        label,
        align: 'left',
      };

      // Special handling for status field
      if (key.toLowerCase() === 'status') {
        column.render = (value) => {
          const status = String(value || '').toLowerCase();
          let color = 'var(--color-text-secondary)';
          if (status.includes('active')) {
            color = 'var(--color-success)';
          } else if (status.includes('inactive')) {
            color = 'var(--color-error)';
          } else if (status.includes('pending')) {
            color = 'var(--color-warning)';
          }
          return (
            <span style={{ color, fontWeight: 500 }}>
              {value}
            </span>
          );
        };
      }

      // Special handling for balance or amount fields
      if (key.toLowerCase().includes('balance') || key.toLowerCase().includes('amount')) {
        column.align = 'right';
        column.render = (value) => {
          if (typeof value === 'number') {
            return new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(value);
          }
          return value;
        };
      }

      // Special handling for date fields
      if (key.toLowerCase().includes('date') || 
          key.toLowerCase().includes('created') || 
          key.toLowerCase().includes('updated') ||
          key.toLowerCase() === 'created_date') {
        column.render = (value) => {
          if (value) {
            try {
              const date = new Date(value);
              return date.toLocaleDateString();
            } catch {
              return value;
            }
          }
          return value;
        };
      }

      return column;
    }).filter((col): col is ColumnConfig => col !== null);

    // Reorder columns: move status after created date
    const reorderedColumns = reorderColumns(generatedColumns);

    // Always add Actions column at the end
    reorderedColumns.push({
      key: 'actions',
      label: l10n('account.actions'),
      align: 'center',
      render: (_, account) => (
        <div style={{ display: 'flex', gap: 'var(--spacing-sm)', justifyContent: 'center' }}>
          <AxButton 
            variant="secondary" 
            size="small"
            onClick={() => onEdit(account)}
          >
            {l10n('account.edit')}
          </AxButton>
          <AxButton 
            variant="danger" 
            size="small"
            onClick={() => onDelete(account)}
          >
            {l10n('account.delete')}
          </AxButton>
        </div>
      ),
    });

    return reorderedColumns;
  };

  const handleEdit = (account: Account) => {
    setFormData({ ...account });
    setSelectedAccount(account);
    setDialogMode('edit');
  };

  const handleDeleteClick = (account: Account) => {
    setSelectedAccount(account);
    setDeleteDialogOpen(true);
  };

  // Update accounts and columns state
  const updateAccountsAndColumns = (accountsData: Account[]) => {
    if (accountsData.length === 0) {
      setAccounts([]);
      setColumns([]);
      return;
    }

    const generatedColumns = generateColumns(accountsData[0], handleEdit, handleDeleteClick);
    setAccounts(accountsData);
    setColumns(generatedColumns);
  };

  // Load accounts and update state
  const loadAccounts = async () => {
    try {
      setLoading(true);
      setError(null);
      const accountsData = await fetchAccounts();
      updateAccountsAndColumns(accountsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load accounts');
      console.error('Error fetching accounts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAccounts();
  }, [l10n]);

  const handleAdd = () => {
    setFormData({});
    setSelectedAccount(null);
    setDialogMode('add');
  };

  const handleDelete = async () => {
    if (!selectedAccount) return;

    try {
      setSubmitting(true);
      const accountId = selectedAccount.id || selectedAccount._id;
      await deleteAccount(accountId);

      // Refresh the accounts list
      await loadAccounts();

      setDeleteDialogOpen(false);
      setSelectedAccount(null);
    } catch (err) {
      console.error('Error deleting account:', err);
      alert(err instanceof Error ? err.message : 'Failed to delete account');
    } finally {
      setSubmitting(false);
    }
  };

  const handleSave = async () => {
    try {
      setSubmitting(true);
      const accountId = selectedAccount?.id || selectedAccount?._id;
      
      if (dialogMode === 'edit' && accountId) {
        await updateAccount(accountId, formData);
      } else {
        await createAccount(formData);
      }

      // Refresh the accounts list
      await loadAccounts();

      setDialogMode(null);
      setFormData({});
      setSelectedAccount(null);
    } catch (err) {
      console.error('Error saving account:', err);
      alert(err instanceof Error ? err.message : `Failed to ${dialogMode === 'edit' ? 'update' : 'create'} account`);
    } finally {
      setSubmitting(false);
    }
  };

  const getFormFields = () => {
    // Use columns if available (excludes actions column, created_date, and status)
    if (columns.length > 0) {
      const fields = columns
        .filter(col => 
          col.key !== 'actions' && 
          col.key !== 'created_date' && 
          col.key !== 'createdDate' &&
          col.key.toLowerCase() !== 'status'
        )
        .map(col => col.key);
      if (fields.length > 0) {
        return fields;
      }
    }
    
    // Fallback: use accounts if available
    if (accounts.length > 0) {
      const firstAccount = accounts[0];
      const keys = Object.keys(firstAccount);
      
      // Filter out internal fields, actions, and status
      const fields = keys.filter(key => 
        !key.toLowerCase().includes('action') && 
        !key.toLowerCase().includes('_id') &&
        key !== 'id' &&
        key !== 'createdAt' &&
        key !== 'updatedAt' &&
        key !== 'created_date' &&
        key !== 'createdDate' &&
        key.toLowerCase() !== 'status' &&
        key !== '__v' &&
        !key.startsWith('__')
      );
      if (fields.length > 0) {
        return fields;
      }
    }
    
    // Default fields if no data is available yet (based on actual API data structure, excluding status)
    return ['name', 'username', 'password', 'description', 'url'];
  };

  if (loading) {
    return (
      <PageContainer>
        <HeaderCard padding="large">
          <HeaderSection>
            <div>
              <AxHeading3 style={{ marginBottom: 'var(--spacing-xs)' }}>
                {l10n('account.title')}
              </AxHeading3>
              <AxParagraph style={{ color: 'var(--color-text-secondary)' }}>
                {l10n('account.subtitle')}
              </AxParagraph>
            </div>
            <AxButton variant="primary" onClick={handleAdd}>{l10n('account.addNew')}</AxButton>
          </HeaderSection>
        </HeaderCard>
        <TableCard padding="large">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
            <AxParagraph>Loading accounts...</AxParagraph>
          </div>
        </TableCard>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <HeaderCard padding="large">
          <HeaderSection>
            <div>
              <AxHeading3 style={{ marginBottom: 'var(--spacing-xs)' }}>
                {l10n('account.title')}
              </AxHeading3>
              <AxParagraph style={{ color: 'var(--color-text-secondary)' }}>
                {l10n('account.subtitle')}
              </AxParagraph>
            </div>
            <AxButton variant="primary" onClick={handleAdd}>{l10n('account.addNew')}</AxButton>
          </HeaderSection>
        </HeaderCard>
        <TableCard padding="large">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            <AxParagraph style={{ color: 'var(--color-error)' }}>Error: {error}</AxParagraph>
            <AxButton variant="secondary" onClick={() => window.location.reload()}>
              Retry
            </AxButton>
          </div>
        </TableCard>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <HeaderCard padding="large">
        <HeaderSection>
          <div>
            <AxHeading3 style={{ marginBottom: 'var(--spacing-xs)' }}>
              {l10n('account.title')}
            </AxHeading3>
            <AxParagraph style={{ color: 'var(--color-text-secondary)' }}>
              {l10n('account.subtitle')}
            </AxParagraph>
          </div>
          <AxButton variant="primary" onClick={handleAdd}>{l10n('account.addNew')}</AxButton>
        </HeaderSection>
      </HeaderCard>

      <TableCard padding="large">
        <div style={{ flex: 1, overflow: 'auto', minHeight: 0 }}>
          {accounts.length === 0 ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
              <AxParagraph>No accounts found</AxParagraph>
            </div>
          ) : (
            <AxTable fullWidth>
              <AxTableHead>
                <AxTableRow>
                  {columns.map((column) => (
                    <AxTableHeader key={column.key} align={column.align}>
                      {column.label}
                    </AxTableHeader>
                  ))}
                </AxTableRow>
              </AxTableHead>
              <AxTableBody>
                {accounts.map((account, index) => (
                  <AxTableRow key={account.id || account._id || index}>
                    {columns.map((column) => (
                      <AxTableCell key={column.key} align={column.align}>
                        {column.render
                          ? column.render(account[column.key], account)
                          : account[column.key] ?? ''}
                      </AxTableCell>
                    ))}
                  </AxTableRow>
                ))}
              </AxTableBody>
            </AxTable>
          )}
        </div>
      </TableCard>

      {/* Add/Edit Account Dialog */}
      <AxDialog
        open={dialogMode !== null}
        onClose={() => {
          setDialogMode(null);
          setFormData({});
          setSelectedAccount(null);
        }}
        title={dialogMode === 'add' ? l10n('account.dialog.add') : l10n('account.dialog.edit')}
        size="large"
        footer={
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)', justifyContent: 'flex-end' }}>
            <AxButton 
              variant="secondary" 
              onClick={() => {
                setDialogMode(null);
                setFormData({});
                setSelectedAccount(null);
              }}
              disabled={submitting}
            >
              {l10n('account.dialog.cancel')}
            </AxButton>
            <AxButton 
              variant="primary" 
              onClick={handleSave}
              disabled={submitting}
            >
              {submitting ? l10n('account.dialog.loading') : l10n('account.dialog.save')}
            </AxButton>
          </div>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
          {getFormFields().map((key) => {
            const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim();
            const value = formData[key] ?? '';
            
            // Special handling for different field types
            let inputType = 'text';
            if (key.toLowerCase().includes('email')) {
              inputType = 'email';
            } else if (key.toLowerCase().includes('password')) {
              inputType = 'password';
            } else if (key.toLowerCase().includes('number') || key.toLowerCase().includes('balance') || key.toLowerCase().includes('amount')) {
              inputType = 'number';
            } else if (key.toLowerCase().includes('date')) {
              inputType = 'date';
            }

            return (
              <AxFormGroup key={key}>
                <AxLabel>{label}</AxLabel>
                <AxInput
                  type={inputType}
                  value={value}
                  onChange={(e) => {
                    const newValue = inputType === 'number' ? parseFloat(e.target.value) || 0 : e.target.value;
                    setFormData({ ...formData, [key]: newValue });
                  }}
                  style={{ marginTop: 'var(--spacing-xs)' }}
                  disabled={submitting}
                />
              </AxFormGroup>
            );
          })}
        </div>
      </AxDialog>

      {/* Delete Confirmation Dialog */}
      <AxDialog
        open={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false);
          setSelectedAccount(null);
        }}
        title={l10n('account.dialog.delete')}
        size="medium"
        footer={
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)', justifyContent: 'flex-end' }}>
            <AxButton 
              variant="secondary" 
              onClick={() => {
                setDeleteDialogOpen(false);
                setSelectedAccount(null);
              }}
              disabled={submitting}
            >
              {l10n('account.dialog.cancel')}
            </AxButton>
            <AxButton 
              variant="danger" 
              onClick={handleDelete}
              disabled={submitting}
            >
              {submitting ? l10n('account.dialog.loading') : l10n('account.dialog.confirm')}
            </AxButton>
          </div>
        }
      >
        <AxParagraph style={{ marginBottom: 'var(--spacing-md)' }}>
          {l10n('account.dialog.deleteConfirm')}
        </AxParagraph>
        <AxParagraph style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
          {l10n('account.dialog.deleteMessage')}
        </AxParagraph>
      </AxDialog>
    </PageContainer>
  );
}

