import Card from 'assets/app-prev.png';
import { CardForm, FormPayload } from 'components/card-form';
import { Hero } from 'components/hero';
import {
  DEFAULT_CARD_CVC,
  DEFAULT_CARD_MM,
  DEFAULT_CARD_NAME,
  DEFAULT_CARD_NUMBER,
  DEFAULT_CARD_YY,
} from 'constants/card-data';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import * as Colors from 'styles/colors';
import { Header } from '../header';
const renderFormData = (data?: FormPayload) => {
  return `
  {

    CARDHOLDER NAME: ${data?.cardName}

    CARD NUMBER: ${data?.cardNumber}

    EXP. DATE (MM/YY): ${data?.cardExpMM}/${data?.cardExpYY}

    CVC: ${data?.cvc}

  }
`;
};

const MainSection = styled.section({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '50px',
});

const FormSection = styled.section({
  display: 'block',
  marginTop: '50px',
  overflow: 'hidden',
});

const Wrapper = styled.div({
  display: 'flex',
});

const Code = styled.code({
  color: Colors.base,
});

const Pre = styled.pre({
  padding: '20px 0 20px 60px',
});

const HeroWrapper = styled.div({
  width: '100%',
  maxWidth: '540px',
});

const HeroImg = styled.img({
  width: '522px',
});

const Footer = styled.footer({
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',

  p: {
    textAlign: 'center',
    color: Colors.base,
    padding: '10px 0',
  },
});

function App() {
  const [formData, setFormData] = React.useState<FormPayload>();
  const year = new Date().getFullYear();

  useEffect(() => {
    setFormData({
      cardName: DEFAULT_CARD_NAME,
      cardNumber: DEFAULT_CARD_NUMBER,
      cardExpMM: DEFAULT_CARD_MM,
      cardExpYY: DEFAULT_CARD_YY,
      cvc: DEFAULT_CARD_CVC,
    });
  }, []);

  return (
    <div className="App">
      <Header></Header>

      <main>
        <MainSection>
          <HeroWrapper>
            <Hero></Hero>
          </HeroWrapper>
          <HeroImg
            src={Card}
            alt="app-preview"
          />
        </MainSection>

        <Wrapper>
          <FormSection>
            <CardForm onCardFormSubmit={payload => setFormData(payload)}></CardForm>
          </FormSection>

          <Pre>
            <Code>{renderFormData(formData)}</Code>
          </Pre>
        </Wrapper>
      </main>

      <Footer>
        <p>© {year} — MIT License</p>
      </Footer>
    </div>
  );
}

export default App;
