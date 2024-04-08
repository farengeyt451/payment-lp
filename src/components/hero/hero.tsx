import DownloadIcon from 'assets/icons/arrow-down-circle.svg';
import { StyledButton } from 'components/button';
import styled from 'styled-components';
import * as Colors from 'styles/colors';

const Title = styled.h1({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '600',
  fontSize: '55px',
  lineHeight: '1.4',
  letterSpacing: '1px',
  color: Colors.base,
  margin: '0',
});

const HeroSubTitle = styled.span({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '500',
  fontSize: '18px',
  lineHeight: '1.5',
  letterSpacing: '7px',
  color: Colors.accent,
});

const Host = styled.div({
  textAlign: 'left',
});

const HeroButton = styled(StyledButton)({
  marginTop: '35px',
});

function Hero() {
  function handleButtonAction() {}

  return (
    <Host>
      <HeroSubTitle>Start Saving Money</HeroSubTitle>
      <Title>Smart Credit Card For your Daily Life.</Title>
      <HeroButton
        onButtonAction={handleButtonAction}
        $accent
        icon={DownloadIcon}
        $weight={700}
      >
        Download
      </HeroButton>
    </Host>
  );
}

export { Hero };
