import React from 'react';
import LinkShorterer from './LinkShorterer';
import styled from 'styled-components';
import LinkShortened from './LinkShortened';
import BrandRecognition from './BrandRecognition';
import DetailedRecords from './DetailedRecords';
import FullyCustomizable from './FullyCustomizable';

const AboutSection = () => {
  return (
    <Container>
      <LinkShortererContainer>
        <LinkShorterer />
        <LinkShortened />
      </LinkShortererContainer>

      <Heading>Advanced Statistics</Heading>
      <Paragraph>
        Track how your link are performing across the web with our advanced
        statistics dashboard.
      </Paragraph>

      <BrandRecognition />
      <DetailedRecords />
      <FullyCustomizable />
    </Container>
  );
};

export default AboutSection;

const Container = styled.div`
  background-color: hsl(257, 10%, 93%);
  padding: 0 2rem 7rem 2rem;
`;

const LinkShortererContainer = styled.div`
  padding-top: 10rem;
  margin-bottom: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 2.4rem;
  color: hsl(260, 8%, 14%);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Paragraph = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  color: hsl(257, 7%, 63%);
  text-align: center;
  margin-bottom: 15rem;
`;