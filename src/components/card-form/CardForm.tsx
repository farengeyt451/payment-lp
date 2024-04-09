import { StyledButton } from 'components/button';
import React from 'react';
import './CardForm.scss';

function shuffle(array: any) {
  let currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}
function randomIntFromInterval(min: any, max: any) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Form({ setCardNumber, setCardName, setCardExp, setCVC }: any) {
  function animateName(name: string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let length = name.length;
    let tempStr = alphabet.slice(0, length - 1);
    for (let i = 0; i < 10; i++) {
      setCardName(tempStr.join(''));
      shuffle(tempStr);
    }
    setTimeout(() => {
      setCardName(name);
    }, 1000);
  }

  return (
    <form name="cc-info-form">
      {/*Item 1*/}
      <div className="form-item">
        <label htmlFor="cc-name">Cardholder Name</label>
        <div className="input-border">
          <input
            className="form-input"
            placeholder="e.g. Jane Appleseed"
            type="text"
            name="cc-name"
            id="cc-name"
            onChange={e => {
              if (e.target.value.trim() === '') {
                setCardName('Jane Appleseed');
              } else {
                animateName(e.target.value);
              }
            }}
          />
        </div>
      </div>
      {/*End Item 1*/}

      {/*Item 2*/}
      <div className="form-item">
        <label htmlFor="cc-number">Card Number</label>
        <div className="input-border">
          <input
            className="form-input"
            type="tel"
            pattern="[0-9\.]+"
            autoComplete="cc-number"
            // maxLength="19"
            name="cc-number"
            id="cc-number"
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={e => {
              let len = e.target.value.replace(/\s/g, '').length;

              if (len > 0) {
                if (len % 4 === 0) {
                  e.target.value += ' ';
                }
              }
              if (e.target.value.trim().length === 0) {
                setCardNumber('0000 0000 0000 0000');
              } else {
                setCardNumber(e.target.value);
              }
            }}
          />
        </div>
      </div>
      {/*End Item 2*/}

      <div>
        {/*Item 3*/}
        <div className="form-item">
          <span>
            Exp. Date (<label htmlFor="exp-month"> MM </label> /<label htmlFor="exp-year">YY</label>)
          </span>
          <div className="exp-inputs">
            <div className="input-border border-m">
              <input
                className="form-input"
                type="text"
                name="exp-month"
                id="exp-month"
                placeholder="MM"
              />
            </div>
            <div className="input-border">
              <input
                className="form-input"
                type="text"
                name="exp-year"
                id="exp-year"
                placeholder="YY"
              />
            </div>
          </div>
        </div>
        {/*End Item 3*/}

        {/*Item 4*/}
        <div className="form-item">
          <label htmlFor="cvc">CVC</label>
          <div className="input-border">
            <input
              className="form-input"
              type="text"
              name="cvc"
              id="cvc"
              placeholder="e.g. 123"
            />
          </div>
        </div>
        {/*End Item 4*/}
      </div>
      <StyledButton
        onButtonAction={e => {
          e.preventDefault();
        }}
        $accent
        $weight={500}
      >
        Confirm
      </StyledButton>
    </form>
  );
}

function CardForm() {
  const [cardNumber, setCardNumber] = React.useState('0000 0000 0000 0000');
  const [cardName, setCardName] = React.useState('Jane Appleseed');
  const [cardExp, setCardExp] = React.useState('00/00');
  const [cvc, setCVC] = React.useState('000');

  return (
    <>
      <div className="global-container">
        <div className="cards">
          <div className="card-front">
            <img
              className="card-logo"
              src="https://i.ibb.co/wYPDjyL/card-logo.png"
              alt="card-logo"
            />
            <div className="details">
              <div className="higher-details">
                <p className="card-number">{cardNumber}</p>
              </div>
              <div className="lower-details">
                <p className="card-name">{cardName}</p>
                <p className="card-exp">{cardExp}</p>
              </div>
            </div>
          </div>
          <div className="card-back">
            <p className="cvc">{cvc}</p>
          </div>
        </div>
        <Form
          setCardNumber={setCardNumber}
          setCardName={setCardName}
          setCardExp={setCardExp}
          setCVC={setCVC}
        />
      </div>
    </>
  );
}

export { CardForm };
