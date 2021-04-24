import React from 'react';
import styled from 'styled-components';
import GetStartedCta from './GetStartedCta';
import backgroundPatternSrc from '../images/bg-boost-desktop.svg';

const BoostYourLink = () => {
  return (
    <Container>
      <Content>
        <h1>Boost your links today</h1>
        <GetStartedCta />
      </Content>

      <BackgroundPattern src={backgroundPatternSrc} />
    </Container>
  );
};

export default BoostYourLink;

const Container = styled.div`
  padding: 2rem;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsl(257, 27%, 26%);
  position: relative;

  h1 {
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BackgroundPattern = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
`;
