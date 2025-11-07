import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

export interface AxDialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'fullscreen';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  footer?: React.ReactNode;
}

interface StyledOverlayProps {
  $isOpen: boolean;
}

const StyledOverlay = styled.div<StyledOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity var(--transition-base);
  padding: var(--spacing-xl);
  overflow-y: auto;
`;

interface StyledDialogProps {
  $size: 'small' | 'medium' | 'large' | 'fullscreen';
  $isOpen: boolean;
}

const StyledDialog = styled.div<StyledDialogProps>`
  font-family: var(--font-family-base);
  background-color: var(--color-background-default);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-2xl);
  width: 100%;
  max-width: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '400px';
      case 'large':
        return '800px';
      case 'fullscreen':
        return '100%';
      default:
        return '600px';
    }
  }};
  max-height: ${({ $size }) => ($size === 'fullscreen' ? '100%' : '90vh')};
  display: flex;
  flex-direction: column;
  transform: ${({ $isOpen }) => ($isOpen ? 'scale(1)' : 'scale(0.95)')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: transform var(--transition-base), opacity var(--transition-base);
  overflow: hidden;
`;

const StyledDialogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-xl);
  border-bottom: 1px solid var(--color-border-default);
`;

const StyledDialogTitle = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin: 0;
`;

const StyledCloseButton = styled.button`
  background: none;
  border: none;
  font-size: var(--font-size-2xl);
  color: var(--color-text-secondary);
  cursor: pointer;
  padding: var(--spacing-xs);
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  transition: background-color var(--transition-base), color var(--transition-base);

  &:hover {
    background-color: var(--color-background-disabled);
    color: var(--color-text-primary);
  }

  &:active {
    background-color: var(--color-background-hover);
  }
`;

const StyledDialogContent = styled.div`
  padding: var(--spacing-xl);
  overflow-y: auto;
  flex: 1;
  color: var(--color-text-primary);
`;

const StyledDialogFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--spacing-md);
  padding: var(--spacing-xl);
  border-top: 1px solid var(--color-border-default);
`;

export const AxDialog: React.FC<AxDialogProps> = ({
  open,
  onClose,
  title,
  children,
  size = 'medium',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  footer,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [open, closeOnEscape, onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && e.target === overlayRef.current) {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <StyledOverlay
      ref={overlayRef}
      $isOpen={open}
      onClick={handleOverlayClick}
    >
      <StyledDialog
        ref={dialogRef}
        $size={size}
        $isOpen={open}
        onClick={(e) => e.stopPropagation()}
      >
        {(title || showCloseButton) && (
          <StyledDialogHeader>
            {title && <StyledDialogTitle>{title}</StyledDialogTitle>}
            {showCloseButton && (
              <StyledCloseButton onClick={onClose} aria-label="Close dialog">
                ×
              </StyledCloseButton>
            )}
          </StyledDialogHeader>
        )}
        <StyledDialogContent>{children}</StyledDialogContent>
        {footer && <StyledDialogFooter>{footer}</StyledDialogFooter>}
      </StyledDialog>
    </StyledOverlay>
  );
};

