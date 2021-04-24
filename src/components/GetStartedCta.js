import React from 'react';
import styled from 'styled-components';

const GetStartedCta = () => {
  return (
    <div>
      <GetStarted>Get started</GetStarted>
    </div>
  );
};

export default GetStartedCta;

const GetStarted = styled.button`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: white;
  background-color: hsl(180, 66%, 49%);
  padding: 0.7em 1.5em;
  border: none;
  border-radius: 25px;
  transition: all 500ms ease;
  cursor: pointer;

  :hover {
    background-color: hsl(180, 66%, 49%);
    box-shadow: 0px 2px 10px hsl(180, 66%, 30%);
    transition: all 500ms ease;
  }
`;
