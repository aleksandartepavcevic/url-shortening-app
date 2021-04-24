import React, { useState } from 'react';
import LinkShorterer from './LinkShorterer';
import styled from 'styled-components';
import LinkShortened from './LinkShortened';
import BrandRecognition from './BrandRecognition';
import DetailedRecords from './DetailedRecords';
import FullyCustomizable from './FullyCustomizable';
import axios from 'axios';

const AboutSection = () => {
  const [db, setDb] = useState([]);

  const changeLink = async (inputLink) => {
    console.log('radi');

    await axios
      .get(`https://api.shrtco.de/v2/shorten?url=${inputLink}`)
      .then((res) => {
        const data = res.data.result;
        const array = db.concat(data);
        setDb(array);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <LinkShortererContainer>
        <LinkShorterer onChange={changeLink} />
        {db.length !== 0 &&
          db.map((link) => <LinkShortened data={link} key={link.code} />)}
      </LinkShortererContainer>

      <Heading>Advanced Statistics</Heading>
      <Paragraph>
        Track how your link are performing across the web with our advanced
        statistics dashboard.
      </Paragraph>

      <CardContainer>
        <CardContent>
          <BrandRecognition />
          <DetailedRecords />
          <FullyCustomizable />
        </CardContent>
        <Line />
      </CardContainer>
    </Container>
  );
};

export default AboutSection;

const Container = styled.div`
  background-color: hsl(257, 10%, 93%);
  padding: 0 2rem 7rem 2rem;

  @media only screen and (min-width: 1240px) {
    padding: 0 10rem 7rem 10rem;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  position: relative;
`;

const CardContent = styled.div`
  z-index: 1000;
  position: relative;
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

const Line = styled.span`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 10;

  display: block;
  width: 70%;
  height: 10px;
  background-color: hsl(180, 66%, 49%);

  @media only screen and (max-width: 768px) {
    width: 10px;
    height: 70%;
    top: 15%;
  }
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
