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
  opacity: 1;
  transition: opacity 200ms ease;
  cursor: pointer;

  :hover {
    opacity: 0.7;
    transition: opacity 200ms ease;
  }
`;
