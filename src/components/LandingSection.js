import React from 'react';
import Header from './Header';
import illustrationSrc from '../images/illustration-working.svg';
import styled from 'styled-components';
import GetStartedCta from './GetStartedCta';
import LinkShorterer from './LinkShorterer';

const LandingSection = () => {
  return (
    <Container>
      <Header />

      <MainContainer>
        <IllustrationContainer>
          <Illustration src={illustrationSrc} />
        </IllustrationContainer>

        <Content>
          <Heading>More than just shorter links</Heading>
          <Paragraph>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </Paragraph>

          <GetStartedCta />
        </Content>
      </MainContainer>
    </Container>
  );
};

export default LandingSection;

const Container = styled.div`
  padding: 0 2rem;
  overflow: hidden;
  z-index: 1000;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  order: 0;

  @media only screen and (max-width: 768px) {
    order: 1;
    align-items: center;
    margin-bottom: 15rem;
  }
`;

const IllustrationContainer = styled.div`
  flex: 1.5;
  order: 1;

  @media only screen and (max-width: 768px) {
    order: 0;
  }
`;

const Illustration = styled.img`
  width: 100%;
  height: auto;
  margin-left: 100px;

  @media only screen and (max-width: 768px) {
    margin-left: 70px;
    min-width: 400px;
  }
`;

const Heading = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 4.2rem;
  color: hsl(260, 8%, 14%);
  line-height: 50px;
  letter-spacing: -2px;
  margin: 4rem 0 0.5rem 0;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  color: hsl(257, 7%, 63%);
  line-height: 30px;
  margin-bottom: 3rem;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;
