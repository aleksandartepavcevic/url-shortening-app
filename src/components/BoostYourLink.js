import React from 'react';
import styled from 'styled-components';
import GetStartedCta from './GetStartedCta';

const BoostYourLink = () => {
  return (
    <Container>
      <h1>Boost your links today</h1>
      <GetStartedCta />
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

  h1 {
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
`;
