// import DownloadIcon from 'assets/icons/arrow-down-circle.svg';
import logoSvg from 'assets/logo.svg';
import { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { StyledButton } from '../button';
import { Nav } from '../nav';

const StyledHeader = styled.header({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
});

const Logo = styled.img({
  display: 'block',
  width: '40px',
  height: '40px',
});

const ClickableLogo = styled.a({});

const HeaderActions = styled.div({
  '& button:last-child': {
    marginLeft: '20px',
  },
});

function Header() {
  function handleButtonAction(e: SyntheticEvent) {
    console.log(e);
  }

  return (
    <StyledHeader>
      <ClickableLogo href="/#">
        <Logo
          src={logoSvg}
          alt="main logo"
        />
      </ClickableLogo>
      <Nav></Nav>
      <HeaderActions>
        <StyledButton
          onButtonAction={handleButtonAction}
          $accent
          $weight={700}
          $size={15}
        >
          Log In
        </StyledButton>
        <StyledButton
          onButtonAction={handleButtonAction}
          $accent
          $weight={700}
        >
          Sign Up
        </StyledButton>
      </HeaderActions>
    </StyledHeader>
  );
}

export { Header };
