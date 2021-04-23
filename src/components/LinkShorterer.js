import React from 'react';
import styled from 'styled-components';

const LinkShorterer = () => {
  return (
    <Container>
      <Input placeholder="Shorten a link here..." />
      <Button>Shorten it!</Button>
    </Container>
  );
};

export default LinkShorterer;

const Container = styled.div`
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: hsl(257, 27%, 26%);
  margin-top: -17rem;
`;

const Input = styled.input`
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  padding: 1rem;
  border-radius: 10px;
  border: none;

  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  color: white;
  padding: 0.8rem;
  border-radius: 10px;
  border: none;
  background-color: hsl(180, 66%, 49%);
`;
