import React from 'react';
import AboutSection from './components/AboutSection';
import BoostYourLink from './components/BoostYourLink';
import LandingSection from './components/LandingSection';
import styled from 'styled-components';

const App = () => {
  return (
    <Wrapper>
      <Container>
        <LandingSection />

        <AboutSection />

        <BoostYourLink />
      </Container>
    </Wrapper>
  );
};

export default App;

const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  overflow: hidden;
`;
