import Card from 'assets/app-prev.png';
import { CardForm } from 'components/card-form';
import { Hero } from 'components/hero';
import styled from 'styled-components';
import { Header } from '../header';

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

const HeroWrapper = styled.div({
  width: '100%',
  maxWidth: '540px',
});

const HeroImg = styled.img({
  width: '522px',
});

function App() {
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
        <FormSection>
          <CardForm></CardForm>
        </FormSection>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
