import React from 'react';
import styled from 'styled-components';

type PropStyle = {
  primary?: boolean;
};

const Header = styled.header<PropStyle>`
  background: ${(props: PropStyle) => (props.primary ? 'blue' : 'black')};
  color: white;
  height: 40px;
`;

export default Header;
