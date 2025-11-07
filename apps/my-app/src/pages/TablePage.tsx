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
} from '@ui/components';

export function TablePage() {
  const sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'Active' },
  ];

  return (
    <>
      <AxCard padding="large">
        <AxHeading3 style={{ marginBottom: 'var(--spacing-sm)' }}>Default Table</AxHeading3>
        <AxParagraph style={{ marginBottom: 'var(--spacing-xl)' }}>
          A basic table with default styling
        </AxParagraph>
        <AxTable fullWidth>
          <AxTableHead>
            <AxTableRow>
              <AxTableHeader>ID</AxTableHeader>
              <AxTableHeader>Name</AxTableHeader>
              <AxTableHeader>Email</AxTableHeader>
              <AxTableHeader>Role</AxTableHeader>
              <AxTableHeader>Status</AxTableHeader>
            </AxTableRow>
          </AxTableHead>
          <AxTableBody>
            {sampleData.map((row) => (
              <AxTableRow key={row.id}>
                <AxTableCell>{row.id}</AxTableCell>
                <AxTableCell>{row.name}</AxTableCell>
                <AxTableCell>{row.email}</AxTableCell>
                <AxTableCell>{row.role}</AxTableCell>
                <AxTableCell>{row.status}</AxTableCell>
              </AxTableRow>
            ))}
          </AxTableBody>
        </AxTable>
      </AxCard>

      <AxCard padding="large">
        <AxHeading3 style={{ marginBottom: 'var(--spacing-sm)' }}>Bordered Table</AxHeading3>
        <AxParagraph style={{ marginBottom: 'var(--spacing-xl)' }}>
          A table with borders around cells
        </AxParagraph>
        <AxTable fullWidth variant="bordered">
          <AxTableHead>
            <AxTableRow variant="bordered">
              <AxTableHeader variant="bordered">ID</AxTableHeader>
              <AxTableHeader variant="bordered">Name</AxTableHeader>
              <AxTableHeader variant="bordered">Email</AxTableHeader>
              <AxTableHeader variant="bordered">Role</AxTableHeader>
              <AxTableHeader variant="bordered">Status</AxTableHeader>
            </AxTableRow>
          </AxTableHead>
          <AxTableBody>
            {sampleData.map((row) => (
              <AxTableRow key={row.id} variant="bordered">
                <AxTableCell variant="bordered">{row.id}</AxTableCell>
                <AxTableCell variant="bordered">{row.name}</AxTableCell>
                <AxTableCell variant="bordered">{row.email}</AxTableCell>
                <AxTableCell variant="bordered">{row.role}</AxTableCell>
                <AxTableCell variant="bordered">{row.status}</AxTableCell>
              </AxTableRow>
            ))}
          </AxTableBody>
        </AxTable>
      </AxCard>

      <AxCard padding="large">
        <AxHeading3 style={{ marginBottom: 'var(--spacing-sm)' }}>Striped Table</AxHeading3>
        <AxParagraph style={{ marginBottom: 'var(--spacing-xl)' }}>
          A table with alternating row colors
        </AxParagraph>
        <AxTable fullWidth variant="striped">
          <AxTableHead>
            <AxTableRow>
              <AxTableHeader>ID</AxTableHeader>
              <AxTableHeader>Name</AxTableHeader>
              <AxTableHeader>Email</AxTableHeader>
              <AxTableHeader>Role</AxTableHeader>
              <AxTableHeader>Status</AxTableHeader>
            </AxTableRow>
          </AxTableHead>
          <AxTableBody>
            {sampleData.map((row) => (
              <AxTableRow key={row.id}>
                <AxTableCell>{row.id}</AxTableCell>
                <AxTableCell>{row.name}</AxTableCell>
                <AxTableCell>{row.email}</AxTableCell>
                <AxTableCell>{row.role}</AxTableCell>
                <AxTableCell>{row.status}</AxTableCell>
              </AxTableRow>
            ))}
          </AxTableBody>
        </AxTable>
      </AxCard>

      <AxCard padding="large">
        <AxHeading3 style={{ marginBottom: 'var(--spacing-sm)' }}>Table Sizes</AxHeading3>
        <AxParagraph style={{ marginBottom: 'var(--spacing-xl)' }}>
          Tables with different font sizes
        </AxParagraph>
        
        <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <AxParagraph style={{ marginBottom: 'var(--spacing-md)' }}>Small Size</AxParagraph>
          <AxTable fullWidth size="small">
            <AxTableHead>
              <AxTableRow>
                <AxTableHeader>Name</AxTableHeader>
                <AxTableHeader>Email</AxTableHeader>
                <AxTableHeader align="center">Status</AxTableHeader>
              </AxTableRow>
            </AxTableHead>
            <AxTableBody>
              {sampleData.slice(0, 3).map((row) => (
                <AxTableRow key={row.id}>
                  <AxTableCell>{row.name}</AxTableCell>
                  <AxTableCell>{row.email}</AxTableCell>
                  <AxTableCell align="center">{row.status}</AxTableCell>
                </AxTableRow>
              ))}
            </AxTableBody>
          </AxTable>
        </div>

        <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <AxParagraph style={{ marginBottom: 'var(--spacing-md)' }}>Medium Size (Default)</AxParagraph>
          <AxTable fullWidth size="medium">
            <AxTableHead>
              <AxTableRow>
                <AxTableHeader>Name</AxTableHeader>
                <AxTableHeader>Email</AxTableHeader>
                <AxTableHeader align="center">Status</AxTableHeader>
              </AxTableRow>
            </AxTableHead>
            <AxTableBody>
              {sampleData.slice(0, 3).map((row) => (
                <AxTableRow key={row.id}>
                  <AxTableCell>{row.name}</AxTableCell>
                  <AxTableCell>{row.email}</AxTableCell>
                  <AxTableCell align="center">{row.status}</AxTableCell>
                </AxTableRow>
              ))}
            </AxTableBody>
          </AxTable>
        </div>

        <div>
          <AxParagraph style={{ marginBottom: 'var(--spacing-md)' }}>Large Size</AxParagraph>
          <AxTable fullWidth size="large">
            <AxTableHead>
              <AxTableRow>
                <AxTableHeader>Name</AxTableHeader>
                <AxTableHeader>Email</AxTableHeader>
                <AxTableHeader align="center">Status</AxTableHeader>
              </AxTableRow>
            </AxTableHead>
            <AxTableBody>
              {sampleData.slice(0, 3).map((row) => (
                <AxTableRow key={row.id}>
                  <AxTableCell>{row.name}</AxTableCell>
                  <AxTableCell>{row.email}</AxTableCell>
                  <AxTableCell align="center">{row.status}</AxTableCell>
                </AxTableRow>
              ))}
            </AxTableBody>
          </AxTable>
        </div>
      </AxCard>

      <AxCard padding="large">
        <AxHeading3 style={{ marginBottom: 'var(--spacing-sm)' }}>Text Alignment</AxHeading3>
        <AxParagraph style={{ marginBottom: 'var(--spacing-xl)' }}>
          Table cells with different text alignments
        </AxParagraph>
        <AxTable fullWidth>
          <AxTableHead>
            <AxTableRow>
              <AxTableHeader align="left">Left</AxTableHeader>
              <AxTableHeader align="center">Center</AxTableHeader>
              <AxTableHeader align="right">Right</AxTableHeader>
            </AxTableRow>
          </AxTableHead>
          <AxTableBody>
            <AxTableRow>
              <AxTableCell align="left">Left aligned text</AxTableCell>
              <AxTableCell align="center">Center aligned text</AxTableCell>
              <AxTableCell align="right">Right aligned text</AxTableCell>
            </AxTableRow>
            <AxTableRow>
              <AxTableCell align="left">$1,234.56</AxTableCell>
              <AxTableCell align="center">Status: Active</AxTableCell>
              <AxTableCell align="right">100%</AxTableCell>
            </AxTableRow>
          </AxTableBody>
        </AxTable>
      </AxCard>
    </>
  );
}

