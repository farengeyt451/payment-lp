import React from 'react';
import styled from 'styled-components';
import * as Colors from 'styles/colors';

const navList = [
  {
    name: 'Features',
    id: 'ff7e5bbf-2854-4f3e-8201-9ae6a0f3f6cb',
  },
  {
    name: 'Pricing',
    id: '3f5a07b3-4472-4dc9-b5e7-fa550d242d76',
  },
  {
    name: 'Help',
    id: '84e24c7d-7280-4a9e-9aa7-d064e5b4d93e',
  },
  {
    name: 'Blog',
    id: '3b16d5b2-0cbb-4f36-a5b2-1583e9927482',
  },
  {
    name: 'About us',
    id: 'dc4d193e-8d3d-4df5-a641-61e8f8c119f1',
  },
];

const StyledUl = styled.ul({
  display: 'flex',
  listStyle: 'none',
});

const StyledLi = styled.li({
  marginLeft: '60px',
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: 1.5,
});

const StyledLink = styled.a({
  'color': Colors.base,
  'textDecoration': 'none',
  'transition': 'color 0.1s ease-in',
  '&:hover': {
    color: Colors.accent,
  },

  '&:active': {
    color: Colors.accent,
  },
});

function Nav() {
  const [activeLink, setActiveLink] = React.useState('');

  const listItems = navList.map(item => (
    <StyledLi key={item.id}>
      <StyledLink
        onClick={() => setActiveLink(item.name)}
        href="/#"
      >
        {item.name}
      </StyledLink>
    </StyledLi>
  ));

  return (
    <nav>
      <StyledUl>{listItems}</StyledUl>
    </nav>
  );
}

export { Nav };
