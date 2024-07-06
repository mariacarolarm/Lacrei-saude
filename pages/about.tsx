import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Main = styled.main`
  padding: 1rem;
  text-align: center;
`;

const Section = styled.section`
  background: linear-gradient(to right, #018383, #014687);
  color: white;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  margin: 0;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  display: flex;
  align-items: start;
`;

const ContentBox = styled.div`
  background-color: #f5f5f5;
  padding: 2rem;
  text-align: left;
`;

const ContentTitle = styled.h3`
  font-size: 1rem;
  color: #004c3f;
`;

const ContentText = styled.p`
  font-size: 1rem;
  color: #333;
`;

const About: React.FC = () => (
  <>
    <Header />
    <Main>
      <Section>
        <SectionTitle>Missão, visão e valores da Lacrei Saúde</SectionTitle>
      </Section>
      <ContentBox>
        <ContentTitle>O que nos motiva: </ContentTitle>
        <ContentText>Proporcionar a inclusão da comunidade ao atendimento clínico.</ContentText>
        <ContentText>Ser a plataforma de serviços de saúde da comunidade LGBTQIAPN+ no Brasil.</ContentText>
        <ContentText>Representatividade, segurança e acessibilidade da comunidade LGBTQIAPN+.</ContentText>
        <ContentText>
          A Lacrei Saúde facilita a conexão entre pessoas da comunidade LGBTQIAPN+ que precisam de atendimento clínico a profissionais da saúde.
          <br />
          Buscamos proporcionar um atendimento de qualidade, sustentado pelos pilares da inclusão, representatividade e segurança.
        </ContentText>
      </ContentBox>
    </Main>
    <Footer />
  </>
);

export default About;
