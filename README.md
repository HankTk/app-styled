# Styled Components UI Library

A monorepo project for a component library using React and Styled Components with CSS variables, design tokens, and dark mode support.

## Project Structure

```
styled-components-library/
├── libs/
│   └── ui/                      # Component library
│       ├── src/
│       │   ├── components/      # React components
│       │   │   ├── AxButton.tsx
│       │   │   ├── AxCard.tsx
│       │   │   ├── AxInput.tsx
│       │   │   ├── AxTable.tsx
│       │   │   ├── AxChart.tsx
│       │   │   ├── AxDialog.tsx
│       │   │   └── ...
│       │   ├── theme/           # Theme provider
│       │   │   └── ThemeProvider.tsx
│       │   ├── tokens.css       # CSS design tokens
│       │   └── index.ts         # Exports
│       └── package.json
├── apps/
│   └── my-app/                  # Demo application
│       ├── src/
│       │   ├── pages/           # Example pages
│       │   └── components/     # App components
│       └── package.json
├── package.json                 # Root package.json
└── pnpm-workspace.yaml          # pnpm workspace configuration
```

## Setup

### Install Dependencies

```bash
pnpm install
```

**Note**: This project sets `ignore-scripts=true` in `.npmrc` to avoid errors with `rollup`'s postinstall script. This is not a problem for normal development.

## Development

### Build Component Library

```bash
pnpm build:library
```

### Start Development Server

```bash
pnpm dev
```

The browser will automatically open at `http://localhost:3000`.

### Build Application

```bash
pnpm build:app
```

### Build All

```bash
pnpm build
```

## Features

- **CSS Variables & Design Tokens**: All styling uses CSS custom properties for easy theming
- **Dark Mode Support**: Built-in light/dark theme switching with `ThemeProvider`
- **TypeScript**: Full type safety with TypeScript definitions
- **Spacing System**: Consistent spacing tokens (xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl)
- **Typography System**: Comprehensive typography tokens (font sizes, weights, line heights)
- **Allman Style**: Code follows Allman brace style for consistency

## Components

### Button (AxButton)

Button component with multiple variants and sizes. All styles use CSS variables.

**Props:**
- `variant`: `'primary' | 'secondary' | 'danger'` - Button style variant
- `size`: `'small' | 'medium' | 'large'` - Button size
- `fullWidth`: `boolean` - Make button full width

**Example:**
```tsx
<AxButton variant="primary" size="large" fullWidth>
  Click Me
</AxButton>
```

### Card (AxCard)

Card component with elevation and padding options.

**Props:**
- `elevation`: `0 | 1 | 2 | 3 | 4` - Shadow elevation level
- `padding`: `'none' | 'small' | 'medium' | 'large'` - Internal padding

**Example:**
```tsx
<AxCard elevation={2} padding="large">
  Card content
</AxCard>
```

### Input (AxInput)

Input field component with error state support.

**Props:**
- `error`: `boolean` - Show error state styling
- `fullWidth`: `boolean` - Make input full width

**Example:**
```tsx
<AxInput 
  placeholder="Enter text" 
  error={hasError} 
  fullWidth 
/>
```

### Table (AxTable)

Table component with multiple variants and styling options.

**Props:**
- `variant`: `'default' | 'bordered' | 'striped'` - Table style variant
- `size`: `'small' | 'medium' | 'large'` - Table font size
- `fullWidth`: `boolean` - Make table full width

**Sub-components:**
- `AxTableHead` - Table header section
- `AxTableBody` - Table body section
- `AxTableRow` - Table row
- `AxTableHeader` - Table header cell
- `AxTableCell` - Table data cell

**Example:**
```tsx
<AxTable fullWidth variant="striped">
  <AxTableHead>
    <AxTableRow>
      <AxTableHeader>Name</AxTableHeader>
      <AxTableHeader>Email</AxTableHeader>
    </AxTableRow>
  </AxTableHead>
  <AxTableBody>
    <AxTableRow>
      <AxTableCell>John Doe</AxTableCell>
      <AxTableCell>john@example.com</AxTableCell>
    </AxTableRow>
  </AxTableBody>
</AxTable>
```

### Chart (AxChart)

Chart component built on Recharts with support for multiple chart types.

**Props:**
- `type`: `'line' | 'bar' | 'pie' | 'area'` - Chart type
- `data`: `Array<Record<string, any>>` - Chart data
- `dataKey`: `string` - Key for X-axis or category
- `dataKeys`: `string[]` - Keys for multiple data series (optional)
- `width`: `number | string` - Chart width (optional)
- `height`: `number` - Chart height (default: 400)
- `colors`: `string[]` - Custom color array (optional)
- `showLegend`: `boolean` - Show legend (default: true)
- `showGrid`: `boolean` - Show grid (default: true)
- `showTooltip`: `boolean` - Show tooltip (default: true)
- `title`: `string` - Chart title (optional)

**Dependencies:**
- Requires `recharts` as a peer dependency

**Example:**
```tsx
const data = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
];

<AxChart
  type="line"
  data={data}
  dataKey="month"
  dataKeys={['sales']}
  height={400}
  title="Monthly Sales"
/>
```

### Dialog (AxDialog)

Modal dialog component with customizable options.

**Props:**
- `open`: `boolean` - Dialog open state
- `onClose`: `() => void` - Close handler function
- `title`: `string` - Dialog title (optional)
- `size`: `'small' | 'medium' | 'large' | 'fullscreen'` - Dialog size (default: 'medium')
- `closeOnOverlayClick`: `boolean` - Close on overlay click (default: true)
- `closeOnEscape`: `boolean` - Close on ESC key (default: true)
- `showCloseButton`: `boolean` - Show close button (default: true)
- `footer`: `React.ReactNode` - Custom footer content (optional)

**Example:**
```tsx
const [open, setOpen] = useState(false);

<AxDialog
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm Action"
  size="medium"
  footer={
    <>
      <AxButton variant="secondary" onClick={() => setOpen(false)}>
        Cancel
      </AxButton>
      <AxButton variant="primary" onClick={() => setOpen(false)}>
        Confirm
      </AxButton>
    </>
  }
>
  <AxParagraph>Are you sure you want to proceed?</AxParagraph>
</AxDialog>
```

### ThemeProvider

Theme provider component for managing light/dark mode.

**Props:**
- `defaultTheme`: `'light' | 'dark'` - Default theme (defaults to 'light')
- `storageKey`: `string` - LocalStorage key for theme persistence (defaults to 'ui-theme')

**Hook:**
- `useTheme()` - Returns `{ theme, toggleTheme, setTheme }`

## Usage

### Basic Setup

1. Import the CSS tokens in your application entry point:

```tsx
import '@ui/components/tokens.css';
```

2. Wrap your app with `ThemeProvider`:

```tsx
import { ThemeProvider } from '@ui/components';

function App()
{
  return (
    <ThemeProvider>
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

### Using Components

```tsx
import { 
  AxButton, 
  AxCard, 
  AxInput, 
  AxTable,
  AxChart,
  AxDialog,
  ThemeProvider, 
  useTheme 
} from '@ui/components';

function MyComponent()
{
  const { theme, toggleTheme } = useTheme();
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <AxCard padding="large" elevation={2}>
      <AxButton onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </AxButton>
      <AxInput placeholder="Enter text here" fullWidth />
      <AxButton variant="primary" onClick={() => setDialogOpen(true)}>
        Open Dialog
      </AxButton>
      <AxDialog 
        open={dialogOpen} 
        onClose={() => setDialogOpen(false)}
        title="Example Dialog"
      >
        <p>Dialog content here</p>
      </AxDialog>
    </AxCard>
  );
}
```

### Using Design Tokens

All components use CSS variables that you can override or use directly:

```css
.my-custom-component
{
  padding: var(--spacing-lg);
  font-size: var(--font-size-md);
  color: var(--color-text-primary);
  background-color: var(--color-background-default);
  border-radius: var(--radius-md);
}
```

### Available CSS Variables

**Colors:**
- `--color-primary`, `--color-secondary`, `--color-danger`
- `--color-text-primary`, `--color-text-secondary`, `--color-text-tertiary`
- `--color-background-default`, `--color-background-page`
- `--color-border-default`, `--color-border-error`, `--color-border-focus`

**Spacing:**
- `--spacing-xs` (4px) through `--spacing-5xl` (48px)

**Typography:**
- Font sizes: `--font-size-xs` through `--font-size-3xl`
- Font weights: `--font-weight-normal`, `--font-weight-medium`, `--font-weight-semibold`, `--font-weight-bold`
- Line heights: `--line-height-tight`, `--line-height-normal`, `--line-height-relaxed`

**Other:**
- Border radius: `--radius-sm` through `--radius-full`
- Shadows: `--shadow-sm` through `--shadow-2xl`
- Transitions: `--transition-fast`, `--transition-base`, `--transition-slow`

## Tech Stack

- **React** 18.2.0
- **TypeScript** 5.0.0
- **Styled Components** 6.1.0
- **Vite** 5.0.0
- **Recharts** 3.3.0 (for Chart component)
- **pnpm** (workspace)

## Demo Application

The demo application (`apps/my-app`) showcases all available components:

- **Button Page**: Button variants, sizes, and states
- **Card Page**: Card elevation examples
- **Input Page**: Input field examples
- **Table Page**: Table variants and styling options
- **Chart Page**: Line, bar, area, and pie chart examples
- **Dialog Page**: Dialog sizes and configuration options
- **Combination Page**: Component combination examples

Run `pnpm dev` to start the development server and explore the components.

