import Card from 'assets/card2x.png';
import { Hero } from 'components/hero';
import styled from 'styled-components';
import { Header } from '../header';

const HeroWrapper = styled.div({
  position: 'absolute',
  width: '100%',
  maxWidth: '540px',
  top: '50%',
  transform: 'translateY(-50%)',
});

function App() {
  return (
    <div className="App">
      <Header></Header>

      <main>
        <HeroWrapper>
          <Hero></Hero>
        </HeroWrapper>

        <img
          style={{
            position: 'absolute',
            right: '10%',
            top: '20%',
            width: '522px',
          }}
          src={Card}
          alt=""
        />
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
