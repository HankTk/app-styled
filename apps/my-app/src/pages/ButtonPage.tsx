import { useState } from 'react';
import {
  AxButton,
  AxCard,
  AxButtonGroup,
  AxHeading3,
  AxTypographyExample,
  AxTypographyRow,
  AxTypographyLabel,
  AxSpacingExample,
  AxSpacingRow,
  AxSpacingVisual,
  AxSpacingBox,
  AxSpacingInfo,
  AxSpacingItem,
  AxSpacingLabel,
  AxSpacingValue,
  AxDialog,
  AxParagraph,
} from '@ui/components';

export function ButtonPage()
{
  const [primaryDialogOpen, setPrimaryDialogOpen] = useState(false);
  const [secondaryDialogOpen, setSecondaryDialogOpen] = useState(false);
  const [dangerDialogOpen, setDangerDialogOpen] = useState(false);

  return (
    <AxCard padding="large">
      <AxHeading3>Variants</AxHeading3>
      <AxButtonGroup>
        <AxButton variant="primary" onClick={() => setPrimaryDialogOpen(true)}>
          Primary
        </AxButton>
        <AxButton variant="secondary" onClick={() => setSecondaryDialogOpen(true)}>
          Secondary
        </AxButton>
        <AxButton variant="danger" onClick={() => setDangerDialogOpen(true)}>
          Danger
        </AxButton>
      </AxButtonGroup>

      <AxDialog
        open={primaryDialogOpen}
        onClose={() => setPrimaryDialogOpen(false)}
        title="Primary Button Clicked"
      >
        <AxParagraph>
          You clicked the Primary button! This is a primary action button typically used for
          the main action on a page.
        </AxParagraph>
      </AxDialog>

      <AxDialog
        open={secondaryDialogOpen}
        onClose={() => setSecondaryDialogOpen(false)}
        title="Secondary Button Clicked"
      >
        <AxParagraph>
          You clicked the Secondary button! This is a secondary action button used for
          alternative actions.
        </AxParagraph>
      </AxDialog>

      <AxDialog
        open={dangerDialogOpen}
        onClose={() => setDangerDialogOpen(false)}
        title="Danger Button Clicked"
      >
        <AxParagraph>
          You clicked the Danger button! This button variant is typically used for
          destructive actions like delete or remove.
        </AxParagraph>
      </AxDialog>

      <AxHeading3>Sizes</AxHeading3>
      <AxButtonGroup>
        <AxButton size="small">Small</AxButton>
        <AxButton size="medium">Medium</AxButton>
        <AxButton size="large">Large</AxButton>
      </AxButtonGroup>

      <AxHeading3>States</AxHeading3>
      <AxButtonGroup>
        <AxButton>Normal</AxButton>
        <AxButton disabled>Disabled</AxButton>
        <AxButton fullWidth>Full Width</AxButton>
      </AxButtonGroup>

      <AxHeading3>Typography Examples</AxHeading3>
      <AxTypographyExample>
        <AxTypographyRow>
          <AxTypographyLabel>Font Sizes:</AxTypographyLabel>
          <AxButton fontSize="var(--font-size-xs)" size="small">
            XS (12px)
          </AxButton>
          <AxButton fontSize="var(--font-size-sm)" size="small">
            SM (14px)
          </AxButton>
          <AxButton fontSize="var(--font-size-base)">
            Base (15px)
          </AxButton>
          <AxButton fontSize="var(--font-size-md)">
            MD (16px)
          </AxButton>
          <AxButton fontSize="var(--font-size-lg)">
            LG (18px)
          </AxButton>
        </AxTypographyRow>
        <AxTypographyRow>
          <AxTypographyLabel>Font Weights:</AxTypographyLabel>
          <AxButton fontWeight="var(--font-weight-normal)">
            Normal
          </AxButton>
          <AxButton fontWeight="var(--font-weight-medium)">
            Medium
          </AxButton>
          <AxButton fontWeight="var(--font-weight-semibold)">
            Semibold
          </AxButton>
          <AxButton fontWeight="var(--font-weight-bold)">
            Bold
          </AxButton>
        </AxTypographyRow>
        <AxTypographyRow>
          <AxTypographyLabel>Combinations:</AxTypographyLabel>
          <AxButton
            fontSize="var(--font-size-lg)"
            fontWeight="var(--font-weight-bold)"
          >
            Large + Bold
          </AxButton>
          <AxButton
            fontSize="var(--font-size-sm)"
            fontWeight="var(--font-weight-semibold)"
            size="small"
          >
            Small + Semibold
          </AxButton>
          <AxButton
            fontSize="var(--font-size-xl)"
            fontWeight="var(--font-weight-medium)"
          >
            XL + Medium
          </AxButton>
        </AxTypographyRow>
      </AxTypographyExample>

      <AxHeading3>Spacing Examples</AxHeading3>
      <AxSpacingExample>
        <AxSpacingRow>
          <AxTypographyLabel>Spacing Tokens (gap between boxes):</AxTypographyLabel>
          <AxSpacingInfo>
            <AxSpacingItem>
              <AxSpacingLabel>XS</AxSpacingLabel>
              <AxSpacingValue>--spacing-xs: 4px</AxSpacingValue>
              <AxSpacingVisual spacing="var(--spacing-xs)">
                <AxSpacingBox>1</AxSpacingBox>
                <AxSpacingBox>2</AxSpacingBox>
              </AxSpacingVisual>
            </AxSpacingItem>
            <AxSpacingItem>
              <AxSpacingLabel>SM</AxSpacingLabel>
              <AxSpacingValue>--spacing-sm: 8px</AxSpacingValue>
              <AxSpacingVisual spacing="var(--spacing-sm)">
                <AxSpacingBox>1</AxSpacingBox>
                <AxSpacingBox>2</AxSpacingBox>
              </AxSpacingVisual>
            </AxSpacingItem>
            <AxSpacingItem>
              <AxSpacingLabel>MD</AxSpacingLabel>
              <AxSpacingValue>--spacing-md: 12px</AxSpacingValue>
              <AxSpacingVisual spacing="var(--spacing-md)">
                <AxSpacingBox>1</AxSpacingBox>
                <AxSpacingBox>2</AxSpacingBox>
              </AxSpacingVisual>
            </AxSpacingItem>
            <AxSpacingItem>
              <AxSpacingLabel>LG</AxSpacingLabel>
              <AxSpacingValue>--spacing-lg: 16px</AxSpacingValue>
              <AxSpacingVisual spacing="var(--spacing-lg)">
                <AxSpacingBox>1</AxSpacingBox>
                <AxSpacingBox>2</AxSpacingBox>
              </AxSpacingVisual>
            </AxSpacingItem>
            <AxSpacingItem>
              <AxSpacingLabel>XL</AxSpacingLabel>
              <AxSpacingValue>--spacing-xl: 20px</AxSpacingValue>
              <AxSpacingVisual spacing="var(--spacing-xl)">
                <AxSpacingBox>1</AxSpacingBox>
                <AxSpacingBox>2</AxSpacingBox>
              </AxSpacingVisual>
            </AxSpacingItem>
            <AxSpacingItem>
              <AxSpacingLabel>2XL</AxSpacingLabel>
              <AxSpacingValue>--spacing-2xl: 24px</AxSpacingValue>
              <AxSpacingVisual spacing="var(--spacing-2xl)">
                <AxSpacingBox>1</AxSpacingBox>
                <AxSpacingBox>2</AxSpacingBox>
              </AxSpacingVisual>
            </AxSpacingItem>
            <AxSpacingItem>
              <AxSpacingLabel>3XL</AxSpacingLabel>
              <AxSpacingValue>--spacing-3xl: 32px</AxSpacingValue>
              <AxSpacingVisual spacing="var(--spacing-3xl)">
                <AxSpacingBox>1</AxSpacingBox>
                <AxSpacingBox>2</AxSpacingBox>
              </AxSpacingVisual>
            </AxSpacingItem>
            <AxSpacingItem>
              <AxSpacingLabel>4XL</AxSpacingLabel>
              <AxSpacingValue>--spacing-4xl: 40px</AxSpacingValue>
              <AxSpacingVisual spacing="var(--spacing-4xl)">
                <AxSpacingBox>1</AxSpacingBox>
                <AxSpacingBox>2</AxSpacingBox>
              </AxSpacingVisual>
            </AxSpacingItem>
            <AxSpacingItem>
              <AxSpacingLabel>5XL</AxSpacingLabel>
              <AxSpacingValue>--spacing-5xl: 48px</AxSpacingValue>
              <AxSpacingVisual spacing="var(--spacing-5xl)">
                <AxSpacingBox>1</AxSpacingBox>
                <AxSpacingBox>2</AxSpacingBox>
              </AxSpacingVisual>
            </AxSpacingItem>
          </AxSpacingInfo>
        </AxSpacingRow>
        <AxSpacingRow>
          <AxTypographyLabel>Button Spacing Examples:</AxTypographyLabel>
          <AxSpacingInfo>
            <AxSpacingItem>
              <AxSpacingLabel>Gap: XS (4px)</AxSpacingLabel>
              <div style={{ display: 'flex', gap: 'var(--spacing-xs)', flexWrap: 'wrap' }}>
                <AxButton size="small">Button 1</AxButton>
                <AxButton size="small">Button 2</AxButton>
                <AxButton size="small">Button 3</AxButton>
              </div>
            </AxSpacingItem>
            <AxSpacingItem>
              <AxSpacingLabel>Gap: MD (12px)</AxSpacingLabel>
              <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
                <AxButton>Button 1</AxButton>
                <AxButton>Button 2</AxButton>
                <AxButton>Button 3</AxButton>
              </div>
            </AxSpacingItem>
            <AxSpacingItem>
              <AxSpacingLabel>Gap: XL (20px)</AxSpacingLabel>
              <div style={{ display: 'flex', gap: 'var(--spacing-xl)', flexWrap: 'wrap' }}>
                <AxButton>Button 1</AxButton>
                <AxButton>Button 2</AxButton>
                <AxButton>Button 3</AxButton>
              </div>
            </AxSpacingItem>
            <AxSpacingItem>
              <AxSpacingLabel>Gap: 2XL (24px)</AxSpacingLabel>
              <div style={{ display: 'flex', gap: 'var(--spacing-2xl)', flexWrap: 'wrap' }}>
                <AxButton size="large">Button 1</AxButton>
                <AxButton size="large">Button 2</AxButton>
                <AxButton size="large">Button 3</AxButton>
              </div>
            </AxSpacingItem>
          </AxSpacingInfo>
        </AxSpacingRow>
      </AxSpacingExample>
    </AxCard>
  );
}

