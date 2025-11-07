import { useState } from 'react';
import {
  AxDialog,
  AxButton,
  AxButtonGroup,
  AxCard,
  AxHeading3,
  AxParagraph,
  AxInput,
  AxLabel,
} from '@ui/components';

export function DialogPage() {
  const [openBasic, setOpenBasic] = useState(false);
  const [openWithTitle, setOpenWithTitle] = useState(false);
  const [openSmall, setOpenSmall] = useState(false);
  const [openLarge, setOpenLarge] = useState(false);
  const [openFullscreen, setOpenFullscreen] = useState(false);
  const [openWithFooter, setOpenWithFooter] = useState(false);
  const [openNoClose, setOpenNoClose] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <AxCard padding="large" style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <AxHeading3 style={{ marginBottom: 'var(--spacing-sm)' }}>Basic Dialog</AxHeading3>
        <AxParagraph style={{ marginBottom: 'var(--spacing-xl)' }}>
          A simple dialog without title
        </AxParagraph>
        <AxButton onClick={() => setOpenBasic(true)}>Open Basic Dialog</AxButton>
        <AxDialog open={openBasic} onClose={() => setOpenBasic(false)}>
          <AxParagraph>
            This is a basic dialog without a title. You can close it by clicking the X button,
            pressing ESC, or clicking outside the dialog.
          </AxParagraph>
        </AxDialog>
      </AxCard>

      <AxCard padding="large" style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <AxHeading3 style={{ marginBottom: 'var(--spacing-sm)' }}>Dialog with Title</AxHeading3>
        <AxParagraph style={{ marginBottom: 'var(--spacing-xl)' }}>
          A dialog with a title and close button
        </AxParagraph>
        <AxButton onClick={() => setOpenWithTitle(true)}>Open Dialog with Title</AxButton>
        <AxDialog
          open={openWithTitle}
          onClose={() => setOpenWithTitle(false)}
          title="Dialog Title"
        >
          <AxParagraph>
            This dialog has a title. The title is displayed in the header along with a close button.
          </AxParagraph>
        </AxDialog>
      </AxCard>

      <AxCard padding="large" style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <AxHeading3 style={{ marginBottom: 'var(--spacing-sm)' }}>Dialog Sizes</AxHeading3>
        <AxParagraph style={{ marginBottom: 'var(--spacing-xl)' }}>
          Dialogs can be displayed in different sizes
        </AxParagraph>
        <AxButtonGroup>
          <AxButton onClick={() => setOpenSmall(true)}>Small</AxButton>
          <AxButton onClick={() => setOpenLarge(true)}>Large</AxButton>
          <AxButton onClick={() => setOpenFullscreen(true)}>Fullscreen</AxButton>
        </AxButtonGroup>

        <AxDialog
          open={openSmall}
          onClose={() => setOpenSmall(false)}
          title="Small Dialog"
          size="small"
        >
          <AxParagraph>This is a small dialog (400px max-width).</AxParagraph>
        </AxDialog>

        <AxDialog
          open={openLarge}
          onClose={() => setOpenLarge(false)}
          title="Large Dialog"
          size="large"
        >
          <AxParagraph>This is a large dialog (800px max-width).</AxParagraph>
          <AxParagraph style={{ marginTop: 'var(--spacing-md)' }}>
            It provides more space for content that needs to be displayed.
          </AxParagraph>
        </AxDialog>

        <AxDialog
          open={openFullscreen}
          onClose={() => setOpenFullscreen(false)}
          title="Fullscreen Dialog"
          size="fullscreen"
        >
          <AxParagraph>This is a fullscreen dialog that takes up the entire viewport.</AxParagraph>
          <AxParagraph style={{ marginTop: 'var(--spacing-md)' }}>
            It's useful for displaying large amounts of content or complex forms.
          </AxParagraph>
        </AxDialog>
      </AxCard>

      <AxCard padding="large" style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <AxHeading3 style={{ marginBottom: 'var(--spacing-sm)' }}>Dialog with Footer</AxHeading3>
        <AxParagraph style={{ marginBottom: 'var(--spacing-xl)' }}>
          A dialog with custom footer actions
        </AxParagraph>
        <AxButton onClick={() => setOpenWithFooter(true)}>Open Dialog with Footer</AxButton>
        <AxDialog
          open={openWithFooter}
          onClose={() => setOpenWithFooter(false)}
          title="Confirm Action"
          footer={
            <>
              <AxButton variant="secondary" onClick={() => setOpenWithFooter(false)}>
                Cancel
              </AxButton>
              <AxButton variant="primary" onClick={() => setOpenWithFooter(false)}>
                Confirm
              </AxButton>
            </>
          }
        >
          <AxParagraph>Are you sure you want to proceed with this action?</AxParagraph>
        </AxDialog>
      </AxCard>

      <AxCard padding="large" style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <AxHeading3 style={{ marginBottom: 'var(--spacing-sm)' }}>Dialog Options</AxHeading3>
        <AxParagraph style={{ marginBottom: 'var(--spacing-xl)' }}>
          Dialogs can be configured with different behaviors
        </AxParagraph>
        <AxButton onClick={() => setOpenNoClose(true)}>Open Dialog (No Close Button)</AxButton>
        <AxDialog
          open={openNoClose}
          onClose={() => setOpenNoClose(false)}
          title="Dialog Without Close Button"
          showCloseButton={false}
        >
          <AxParagraph>
            This dialog doesn't have a close button in the header. You can still close it by
            pressing ESC or clicking outside the dialog.
          </AxParagraph>
          <AxButton
            variant="primary"
            onClick={() => setOpenNoClose(false)}
            style={{ marginTop: 'var(--spacing-md)' }}
          >
            Close Dialog
          </AxButton>
        </AxDialog>
      </AxCard>

      <AxCard padding="large">
        <AxHeading3 style={{ marginBottom: 'var(--spacing-sm)' }}>Form Dialog</AxHeading3>
        <AxParagraph style={{ marginBottom: 'var(--spacing-xl)' }}>
          A dialog containing a form
        </AxParagraph>
        <AxButton onClick={() => setOpenForm(true)}>Open Form Dialog</AxButton>
        <AxDialog
          open={openForm}
          onClose={() => setOpenForm(false)}
          title="User Information"
          size="medium"
          footer={
            <>
              <AxButton variant="secondary" onClick={() => setOpenForm(false)}>
                Cancel
              </AxButton>
              <AxButton variant="primary" onClick={() => setOpenForm(false)}>
                Save
              </AxButton>
            </>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
            <div>
              <AxLabel>Name</AxLabel>
              <AxInput placeholder="Enter your name" style={{ marginTop: 'var(--spacing-xs)' }} />
            </div>
            <div>
              <AxLabel>Email</AxLabel>
              <AxInput
                type="email"
                placeholder="Enter your email"
                style={{ marginTop: 'var(--spacing-xs)' }}
              />
            </div>
            <div>
              <AxLabel>Message</AxLabel>
              <AxInput
                placeholder="Enter your message"
                style={{ marginTop: 'var(--spacing-xs)' }}
              />
            </div>
          </div>
        </AxDialog>
      </AxCard>
    </>
  );
}

