import React from 'react';
import styled from 'styled-components';
import iconSrc from '../images/icon-fully-customizable.svg';

const FullyCustomizable = () => {
  return (
    <Container>
      <Icon>
        <img src={iconSrc} alt="" />
      </Icon>
      <Heading>Fully Customizable</Heading>
      <Paragraph>
        Improve brand awareness and content discoverability through customizable
        links, supercharging audience engagement.
      </Paragraph>
    </Container>
  );
};

export default FullyCustomizable;

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 6rem 2rem 4rem 2rem;
  position: relative;
  margin-bottom: 7rem;

  @media only screen and (min-width: 768px) {
    margin-top: 5rem;
    margin-bottom: 2rem;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: -43px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 86px;
  height: 86px;
  background-color: hsl(257, 27%, 26%);
  border-radius: 100%;
`;

const Heading = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: hsl(260, 8%, 14%);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Paragraph = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  color: hsl(257, 7%, 63%);
  text-align: center;
`;
