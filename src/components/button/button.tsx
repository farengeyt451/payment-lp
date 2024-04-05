import { SyntheticEvent } from 'react';
import './button.scss';

function Button({ onButtonAction }: { onButtonAction: (e: SyntheticEvent) => void }) {
  return (
    <button
      className="btn"
      onClick={onButtonAction}
    >
      Login
    </button>
  );
}

export { Button };
