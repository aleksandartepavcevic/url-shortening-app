import React from 'react';
import styled from 'styled-components';

const LinkShortened = () => {
  return (
    <Container>
      <LinkInput>https://www.facebook.com/</LinkInput>
      <LinkShorten>https://www.fb.com/</LinkShorten>
      <Button>Copy</Button>
    </Container>
  );
};

export default LinkShortened;

const Container = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  margin-top: 2rem;
`;

const LinkInput = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  font-color: hsl(257, 7%, 63%);
  border-bottom: solid 1px hsl(0, 0%, 75%);
  padding-bottom: 0.5em;
`;

const LinkShorten = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  margin-top: 1rem;
  color: hsl(180, 66%, 49%);
`;

const Button = styled.button`
  width: 100%;
  margin-top: 1rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  color: white;
  padding: 0.5em;
  border-radius: 10px;
  border: none;
  background-color: hsl(180, 66%, 49%);
`;
