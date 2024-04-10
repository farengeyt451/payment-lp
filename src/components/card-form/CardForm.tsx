import CardLogo from 'assets/card-logo.png';
import { StyledButton } from 'components/button';
import {
  ALPHABET,
  DEFAULT_CARD_CVC,
  DEFAULT_CARD_MM,
  DEFAULT_CARD_NAME,
  DEFAULT_CARD_NUMBER,
  DEFAULT_CARD_YY,
  RANDOM_CREDIT_CARD_NUMBER,
} from 'constants/card-data';
import React, { PropsWithChildren, SyntheticEvent, useCallback, useRef } from 'react';
import './CardForm.scss';

interface FormProps {
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  setCardName: React.Dispatch<React.SetStateAction<string>>;
  setCardExpMM: React.Dispatch<React.SetStateAction<string>>;
  setCardExpYY: React.Dispatch<React.SetStateAction<string>>;
  setCVC: React.Dispatch<React.SetStateAction<string>>;
  randomName: string;
  randomCreditCardNumber: string;
  isDataFilled: boolean;
  className?: string;
  onFormSubmit: () => void;
}

export interface FormPayload {
  cardNumber: string;
  cardName: string;
  cardExpMM: string;
  cardExpYY: string;
  cvc: string;
}

enum ChangesTypeEnum {
  Month = 'Month',
  Year = 'Year',
  CVC = 'CVC',
}

const useDebounce = (func: any, delay: number) => {
  const inDebounce = useRef<ReturnType<typeof setTimeout>>();

  const debounce = useCallback(
    function (...args: unknown[]) {
      clearTimeout(inDebounce.current);
      inDebounce.current = setTimeout(() => func.apply({}, args), delay);
    },
    [func, delay],
  );

  return debounce;
};

function shuffle(array: string[]): string[] {
  let currentIndex = array.length;
  let randomIndex: number;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

function Form({
  setCardNumber,
  setCardName,
  setCardExpMM,
  setCardExpYY,
  setCVC,
  randomName,
  randomCreditCardNumber,
  isDataFilled,
  onFormSubmit,
}: PropsWithChildren<FormProps>) {
  const debounce = useDebounce(handleCardName, 250);

  function handleCardName(value: string) {
    if (!value.trim()) {
      setCardName(randomName);
    } else {
      animateName(value);
    }
  }

  const animateName = useCallback(
    (name: string) => {
      let length = name.length;
      let tempStr = ALPHABET.slice(0, length - 1);
      setCardName(tempStr.join(''));
      shuffle(tempStr);
      setTimeout(() => {
        setCardName(name);
      }, 200);
    },
    [setCardName],
  );

  function handleNameChange(event: SyntheticEvent<HTMLInputElement>) {
    const { value } = event.target as HTMLInputElement;
    debounce(value);
  }

  function handleCardNumberChange(event: SyntheticEvent<HTMLInputElement>) {
    let { value: cardNumber } = event.target as HTMLInputElement;
    let { length: cardNumberLength } = cardNumber.replace(/\s/g, '');

    if (cardNumberLength > 0 && cardNumberLength % 4 === 0) {
      (event.target as HTMLInputElement).value += ' ';
    }

    if (!cardNumber.trim().length) {
      setCardNumber(DEFAULT_CARD_NUMBER);
    } else {
      setCardNumber(cardNumber);
    }
  }

  function handleCardChanges(event: SyntheticEvent<HTMLInputElement>, changesType: ChangesTypeEnum) {
    const { value } = event.target as HTMLInputElement;
    const trimmed = value.trim();

    switch (changesType) {
      case ChangesTypeEnum.Month:
        setCardExpMM(trimmed ? value : DEFAULT_CARD_MM);
        break;
      case ChangesTypeEnum.Year:
        setCardExpYY(trimmed ? value : DEFAULT_CARD_YY);
        break;
      case ChangesTypeEnum.CVC:
        setCVC(trimmed ? value : DEFAULT_CARD_CVC);
        break;
    }
  }

  return (
    <form className="form">
      <div className="form__item">
        <label
          htmlFor="cc-name"
          className="form__label"
        >
          Cardholder Name
        </label>
        <div className="form__wrapper">
          <input
            className="form__input"
            maxLength={30}
            placeholder={`${randomName}`}
            type="text"
            name="cc-name"
            id="cc-name"
            onChange={handleNameChange}
          />
        </div>
      </div>

      <div className="form__item">
        <label
          htmlFor="cc-number"
          className="form__label"
        >
          Card Number
        </label>
        <div className="form__wrapper">
          <input
            className="form__input"
            type="tel"
            pattern="[0-9\.]+"
            autoComplete="cc-number"
            maxLength={19}
            name="cc-number"
            id="cc-number"
            placeholder={`${randomCreditCardNumber}`}
            onChange={handleCardNumberChange}
          />
        </div>
      </div>

      <div className="form__exp">
        <div className="form__item">
          <span className="form__exp-date">
            Exp. Date (
            <label
              className="form__label"
              htmlFor="exp-month"
            >
              MM
            </label>
            /<label htmlFor="exp-year">YY</label>)
          </span>
          <div className="form__exp-actions">
            <div className="form__wrapper form__wrapper--spaced">
              <input
                className="form__input form__input--exp-month"
                maxLength={2}
                type="text"
                name="exp-month"
                id="exp-month"
                placeholder="MM"
                onChange={event => handleCardChanges(event, ChangesTypeEnum.Month)}
              />
            </div>
            <div className="form__wrapper">
              <input
                className="form__input form__input--exp-year"
                maxLength={2}
                type="text"
                name="exp-year"
                id="exp-year"
                placeholder="YY"
                onChange={event => handleCardChanges(event, ChangesTypeEnum.Year)}
              />
            </div>
          </div>
        </div>

        <div className="form__item">
          <label
            htmlFor="cvc"
            className="form__label"
          >
            CVC
          </label>
          <div className="form__wrapper">
            <input
              className="form__input form__input--cvc"
              maxLength={3}
              type="text"
              name="cvc"
              id="cvc"
              placeholder="123"
              onChange={event => handleCardChanges(event, ChangesTypeEnum.CVC)}
            />
          </div>
        </div>
      </div>
      <StyledButton
        disabled={!isDataFilled}
        onButtonAction={e => {
          e.preventDefault();
          onFormSubmit();
        }}
        $accent
        $weight={500}
      >
        Confirm
      </StyledButton>
    </form>
  );
}

function CardForm({ onCardFormSubmit }: PropsWithChildren<{ onCardFormSubmit: (data: FormPayload) => void }>) {
  const [cardNumber, setCardNumber] = React.useState<string>(DEFAULT_CARD_NUMBER);
  const [cardName, setCardName] = React.useState<string>(DEFAULT_CARD_NAME);
  const [cardExpMM, setCardExpMM] = React.useState<string>(DEFAULT_CARD_MM);
  const [cardExpYY, setCardExpYY] = React.useState<string>(DEFAULT_CARD_YY);
  const [cvc, setCVC] = React.useState<string>(DEFAULT_CARD_CVC);

  // const isDataFilled =
  //   cardNumber !== DEFAULT_CARD_NUMBER &&
  //   cardName !== DEFAULT_CARD_NAME &&
  //   cardExpMM !== DEFAULT_CARD_MM &&
  //   cardExpYY !== DEFAULT_CARD_YY &&
  //   cvc !== DEFAULT_CARD_CVC;

  const isDataFilled = true;
  return (
    <div className="card-f">
      <div className="card-f__cards">
        <div className="card-f__front">
          <img
            className="card-f__logo"
            src={CardLogo}
            alt="card-logo"
          />
          <div className="card-f__details">
            <div className="card-f__main-details">
              <p className="card-f__number">{cardNumber}</p>
            </div>
            <div className="card-f__other-details">
              <p className="card-f__name">{cardName}</p>
              <p className="card-f__exp">
                {cardExpMM}/{cardExpYY}
              </p>
            </div>
          </div>
        </div>
        <div className="card-f__back">
          <p className="card-f__cvc">{cvc}</p>
        </div>
      </div>
      <Form
        randomName={DEFAULT_CARD_NAME}
        randomCreditCardNumber={RANDOM_CREDIT_CARD_NUMBER}
        setCardNumber={setCardNumber}
        setCardName={setCardName}
        setCardExpMM={setCardExpMM}
        setCardExpYY={setCardExpYY}
        setCVC={setCVC}
        isDataFilled={isDataFilled}
        onFormSubmit={() =>
          onCardFormSubmit({
            cardNumber,
            cardName,
            cardExpMM,
            cardExpYY,
            cvc,
          })
        }
      />
    </div>
  );
}

export { CardForm };
