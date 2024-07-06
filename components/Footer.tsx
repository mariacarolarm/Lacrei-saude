import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: rgb(241, 255, 235);
  padding: 1rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer: React.FC = () => (
  <FooterWrapper>
    <p>&copy; 2024 Lacrei Saúde. All rights reserved.</p>
  </FooterWrapper>
);

export default Footer;