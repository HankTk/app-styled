import { AxButton, AxCard, AxInput, AxFormGroup, AxLabel, AxButtonGroup, AxHeading3 } from '@ui/components';

export function CombinationPage()
{
  return (
    <AxCard elevation={2} padding="large">
      <AxHeading3 style={{ marginBottom: 'var(--spacing-lg)', fontSize: 'var(--font-size-xl)' }}>
        Login Form
      </AxHeading3>
      <AxFormGroup>
        <AxLabel htmlFor="email">Email Address</AxLabel>
        <AxInput
          id="email"
          type="email"
          placeholder="example@email.com"
          fullWidth
        />
      </AxFormGroup>
      <AxFormGroup>
        <AxLabel htmlFor="password">Password</AxLabel>
        <AxInput
          id="password"
          type="password"
          placeholder="Enter password"
          fullWidth
        />
      </AxFormGroup>
      <AxButtonGroup>
        <AxButton variant="primary" fullWidth>
          Login
        </AxButton>
        <AxButton variant="secondary" fullWidth>
          Cancel
        </AxButton>
      </AxButtonGroup>
    </AxCard>
  );
}

