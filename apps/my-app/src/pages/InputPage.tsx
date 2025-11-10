import { useState } from 'react';
import { AxButton, AxCard, AxInput, AxFormGroup, AxLabel } from '@ui/components';
import { I18N, useI18n } from '../i18n/I18nProvider';

export function InputPage()
{
  const { t } = useI18n();
  const [inputValue, setInputValue] = useState('');
  const [errorInput, setErrorInput] = useState('');

  return (
    <AxCard padding="large" maxWidth="500px">
      <AxFormGroup>
        <AxLabel htmlFor="normal-input"><I18N l10n="input.normal" /></AxLabel>
        <AxInput
          id="normal-input"
          type="text"
          placeholder={t('input.enterText')}
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          fullWidth
        />
      </AxFormGroup>

      <AxFormGroup>
        <AxLabel htmlFor="error-input"><I18N l10n="input.errorState" /></AxLabel>
        <AxInput
          id="error-input"
          type="text"
          placeholder={t('input.errorOccurred')}
          value={errorInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setErrorInput(e.target.value)}
          error
          fullWidth
        />
      </AxFormGroup>

      <AxFormGroup>
        <AxLabel htmlFor="disabled-input"><I18N l10n="input.disabled" /></AxLabel>
        <AxInput
          id="disabled-input"
          type="text"
          placeholder={t('input.disabledPlaceholder')}
          disabled
          fullWidth
        />
      </AxFormGroup>

      <AxButton variant="primary" fullWidth>
        <I18N l10n="input.submit" />
      </AxButton>
    </AxCard>
  );
}

