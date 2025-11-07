import { useState } from 'react';
import { AxButton, AxCard, AxInput, AxFormGroup, AxLabel } from '@ui/components';

export function InputPage()
{
  const [inputValue, setInputValue] = useState('');
  const [errorInput, setErrorInput] = useState('');

  return (
    <AxCard padding="large" maxWidth="500px">
      <AxFormGroup>
        <AxLabel htmlFor="normal-input">Normal Input</AxLabel>
        <AxInput
          id="normal-input"
          type="text"
          placeholder="Enter text here"
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          fullWidth
        />
      </AxFormGroup>

      <AxFormGroup>
        <AxLabel htmlFor="error-input">Error State Input</AxLabel>
        <AxInput
          id="error-input"
          type="text"
          placeholder="Error occurred"
          value={errorInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setErrorInput(e.target.value)}
          error
          fullWidth
        />
      </AxFormGroup>

      <AxFormGroup>
        <AxLabel htmlFor="disabled-input">Disabled Input</AxLabel>
        <AxInput
          id="disabled-input"
          type="text"
          placeholder="Disabled"
          disabled
          fullWidth
        />
      </AxFormGroup>

      <AxButton variant="primary" fullWidth>
        Submit
      </AxButton>
    </AxCard>
  );
}

