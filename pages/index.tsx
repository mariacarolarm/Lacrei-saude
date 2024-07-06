import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Main = styled.main`
  padding: 1rem;
  text-align: center;
`;

const Container = styled.div`
  padding: 2rem;
`;

const HeaderStyle = styled.header`
  background: linear-gradient(to right, #018383, #014687);
  color: white;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 2,874px;
  height: 30px;
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
`;

const Button = styled.button`
  background-color: rgb(255, 255, 255);
  color: rgb(1, 135, 98);
  box-shadow: rgba(0, 0, 0, 0.2) 4px 4px 4px;
  width: 10rem;
  height: 3rem;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #004c3f;
    color: white;
  }
`;

const ContentBox = styled.section`
  background-color: #018762;
  color: white;
  padding: 1rem;
  margin-top: 2rem;
  height: 2,5rem;
  display: flex;
  align-items: flex-start;
`;

const ContentBoxTitle = styled.h2`
  font-size: 1rem;
`;

const ContentBoxText = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  text-align: left;
`;

const Home: React.FC = () => (
  <>
    <Header />
    <Main>
    <Container>
      <HeaderStyle>
        <HeaderTitle>Olá, você está na Lacrei Saúde!</HeaderTitle>
      </HeaderStyle>
      <ContentBox>
      <ContentBoxTitle>Atendimento de qualidade e inclusivo</ContentBoxTitle>
      </ContentBox>
      <ContentBoxText>
      Acreditamos que, ao possibilitar a inclusão clínica da nossa comunidade, transformamos o mundo.
      Foi pensando nisso, que a Lacrei Saúde nasceu em 2020 com o propósito de oferecer a melhor experiência no acesso à profissionais da saúde para as pessoas LGBTQIAPN+.
      Atuamos de forma ética e embasada nas regras e diretrizes estabelecidas pelos órgãos de classe e regulamentadores.
      </ContentBoxText>
      <Button onClick={() => window.open('https://lacreisaude.com.br/ajuda/', '_blank')}>Ajuda</Button>
    </Container>
    </Main>
    <Footer />
  </>
);

export default Home;