import React from 'react';
import styled from 'styled-components';
import backgroundPatternSrc from '../images/bg-shorten-desktop.svg';

const LinkShorterer = ({ onChange }) => {
  const textInput = React.createRef();

  return (
    <Container>
      <Form>
        <Input ref={textInput} placeholder="Shorten a link here..." />
        <Button
          onClick={() => {
            const link = textInput.current.value;
            return onChange(link);
          }}
        >
          Shorten it!
        </Button>
      </Form>
      <BackgroundPattern src={backgroundPatternSrc} />
    </Container>
  );
};

export default LinkShorterer;

const Container = styled.div`
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  background-color: hsl(257, 27%, 26%);
  margin-top: -17rem;
  position: relative;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: 4rem;
  }
`;

const BackgroundPattern = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 100;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
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

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 1rem;
    flex: 4;
    padding: 1.5rem;
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
  transition: background-color 200ms ease;
  cursor: pointer;

  :hover {
    background-color: hsl(180, 66%, 65%);
    transition: background-color 200ms ease;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex: 1;
  }
`;
