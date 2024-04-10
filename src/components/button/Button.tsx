import { PropsWithChildren, SyntheticEvent } from 'react';
import { styled } from 'styled-components';
import * as Colors from 'styles/colors';

interface ButtonComponent {
  onButtonAction: (e: SyntheticEvent) => void;
  className?: string;
  icon?: string;
  disabled?: boolean;
}

function Button({ disabled = false, className, onButtonAction, icon, children }: PropsWithChildren<ButtonComponent>) {
  return (
    <button
      disabled={disabled}
      className={className}
      onClick={onButtonAction}
      style={
        icon
          ? {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }
          : {}
      }
    >
      <span
        style={{
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        {children}
        {icon && (
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '22px',
              height: '22px',
              marginLeft: '10px',
            }}
          >
            <img
              src={icon}
              alt="button-icon"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
              }}
            />
          </span>
        )}
      </span>
    </button>
  );
}

const StyledButton = styled(Button)<{ $accent?: boolean; $weight?: number; $size?: number }>(
  props => ({
    'pointerEvents': props.disabled ? 'none' : 'auto',
    'position': 'relative',
    'backgroundColor': props.$accent ? Colors.accent : '',
    'fontFamily': 'Poppins, sans-serif',
    'fontSize': `${props.$size}px` || '20px',
    'padding': '12px 36px',
    'borderRadius': '10px',
    'border': 'none',
    'fontWeight': props.$weight || 400,
    'color': Colors.text,
    'transition': 'color 0.1s ease-in, background-color 0.1s ease-out',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: Colors.text,
      color: Colors.base,
    },
  }),
  withIconStyles,
  disabled,
);

function withIconStyles(props: PropsWithChildren<ButtonComponent>) {
  return (
    props.icon && {
      '&:hover': {
        backgroundColor: Colors.accent,
        color: Colors.text,

        img: {
          transition: 'transform 0.1s ease',
          transform: 'translateY(2.5px)',
        },
      },
    }
  );
}

function disabled(props: PropsWithChildren<ButtonComponent>) {
  return (
    props.disabled && {
      background: Colors.text,
      color: Colors.disabled,
    }
  );
}

export { Button, StyledButton };
