import React, { useState } from 'react';
import styled from 'styled-components';

const LinkShortened = ({ data }) => {
  const [buttonState, setButtonState] = useState(false);
  const link = React.createRef();

  const copyButton = () => {
    buttonState === false ? setButtonState(true) : setButtonState(false);
    const text = link.current.value;
    navigator.clipboard.writeText(text);
  };

  return (
    <Container>
      <LinkInput>{data.original_link}</LinkInput>
      <ShortenContainer>
        <LinkShorten
          ref={link}
          value={data.full_short_link}
          rows="1"
          cols="30"
          readOnly
        />
        <Button buttonState={buttonState} onClick={copyButton}>
          {buttonState === false ? 'Copy' : 'Copied!'}
        </Button>
      </ShortenContainer>
    </Container>
  );
};

export default LinkShortened;

const Container = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  margin-top: 2rem;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ShortenContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const LinkInput = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  font-color: hsl(257, 7%, 63%);
  border-bottom: solid 1px hsl(0, 0%, 75%);
  padding-bottom: 0.5em;

  @media only screen and (min-width: 768px) {
    border: none;
    padding-bottom: 0;
  }
`;

const LinkShorten = styled.textarea`
  text-align: end;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  margin-top: 1rem;
  color: hsl(180, 66%, 49%);
  resize: none;
  border: none;
  outline: none;
  cursor: auto;

  @media only screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

const Button = styled.button`
  margin-top: 1rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  color: white;
  padding: 0.5em;
  border-radius: 10px;
  border: none;
  background-color: ${(props) =>
    props.buttonState === true ? 'hsl(257, 27%, 26%)' : 'hsl(180, 66%, 49%)'};
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    margin-top: 0;
    padding: 0.5em 1.5em;
    margin-left: 1.5rem;
  }
`;
