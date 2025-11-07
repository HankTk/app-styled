import { AxCard, AxGrid, AxHeading3, AxParagraph } from '@ui/components';

export function CardPage()
{
  return (
    <AxGrid>
      <AxCard elevation={0} padding="large">
        <AxHeading3 style={{ marginBottom: 'var(--spacing-sm)' }}>Elevation 0</AxHeading3>
        <AxParagraph>Card without shadow</AxParagraph>
      </AxCard>
      <AxCard elevation={1} padding="large">
        <AxHeading3 style={{ marginBottom: 'var(--spacing-sm)' }}>Elevation 1</AxHeading3>
        <AxParagraph>Card with light shadow</AxParagraph>
      </AxCard>
      <AxCard elevation={2} padding="large">
        <AxHeading3 style={{ marginBottom: 'var(--spacing-sm)' }}>Elevation 2</AxHeading3>
        <AxParagraph>Card with medium shadow</AxParagraph>
      </AxCard>
      <AxCard elevation={3} padding="large">
        <AxHeading3 style={{ marginBottom: 'var(--spacing-sm)' }}>Elevation 3</AxHeading3>
        <AxParagraph>Card with strong shadow</AxParagraph>
      </AxCard>
      <AxCard elevation={4} padding="large">
        <AxHeading3 style={{ marginBottom: 'var(--spacing-sm)' }}>Elevation 4</AxHeading3>
        <AxParagraph>Card with very strong shadow</AxParagraph>
      </AxCard>
    </AxGrid>
  );
}

