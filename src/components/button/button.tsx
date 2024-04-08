import { PropsWithChildren, SyntheticEvent } from 'react';
import { styled } from 'styled-components';
import * as Colors from '../../styles/colors';

import './button.scss';

interface ButtonComponent {
  onButtonAction: (e: SyntheticEvent) => void;
  className?: string;
  icon?: string;
}

function Button({ className, onButtonAction, icon, children }: PropsWithChildren<ButtonComponent>) {
  return (
    <button
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

const StyledButton = styled(Button)<{ $accent?: boolean; $weight?: number }>(props => ({
  position: 'relative',
  backgroundColor: props.$accent ? Colors.accent : '',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '20px',
  padding: '12px 36px',
  borderRadius: '10px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: props.$weight || 400,
}));

// const StyledWithIconButton = styled(StyledButton)<{ $icon: string }>`
//   padding-right: 58px;

//   &:after {
//     content: '';
//     display: block;
//     position: absolute;
//     top: calc(50%);
//     right: 16px;
//     background-image: url(${DownloadIcon});
//     background-size: 100%;
//     z-index: 1;
//     width: 22px;
//     height: 22px;
//     transform: translate(0, -50%);
//   }
// `;

export { Button, StyledButton };
