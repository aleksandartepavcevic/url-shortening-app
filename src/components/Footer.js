import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
  return (
    <Container>
      <Logo>Shortly</Logo>
      <Section>
        <Heading>Features</Heading>
        <List>
          <Item>Link Shortening</Item>
          <Item>Branded Links</Item>
          <Item>Analytics</Item>
        </List>
      </Section>
      <Section>
        <Heading>Resources</Heading>
        <List>
          <Item>Blog</Item>
          <Item>Developers</Item>
          <Item>Support</Item>
        </List>
      </Section>
      <Section>
        <Heading>Company</Heading>
        <List>
          <Item>About</Item>
          <Item>Our Team</Item>
          <Item>Careers</Item>
          <Item>Contact</Item>
        </List>
      </Section>
      <SocialLinks>
        <FacebookIcon />
        <TwitterIcon />
        <PinterestIcon />
        <InstagramIcon />
      </SocialLinks>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: hsl(255, 11%, 15%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: unset;
    justify-content: space-between;
    padding: 6rem 10rem;
  }
`;

const Logo = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 3.2rem;
  color: white;
  margin-bottom: 6rem;

  @media only screen and (min-width: 768px) {
    flex: 3;
  }
`;

const Heading = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: white;
  margin-bottom: 2rem;
  text-align: center;

  @media only screen and (min-width: 768px) {
    text-align: unset;
  }
`;

const List = styled.ul`
  list-style-type: none;
  text-align: center;

  @media only screen and (min-width: 768px) {
    text-align: unset;
  }
`;

const Item = styled.li`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  color: hsl(0, 0%, 75%);
  cursor: pointer;

  :not(:last-of-type) {
    margin-bottom: 1rem;
  }

  :hover {
    text-decoration: underline;
  }
`;

const Section = styled.div`
  margin-bottom: 4rem;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 2rem;
    flex: 1;
  }
`;

const SocialLinks = styled.div`
  margin-top: 4rem;

  svg {
    color: white;
    font-size: 2.8rem;
    cursor: pointer;

    :not(:last-of-type) {
      margin-right: 1.5rem;
    }

    :hover {
      color: hsl(180, 66%, 49%);
    }
  }

  @media only screen and (min-width: 768px) {
    margin-top: 0;
    flex: 1;
  }
`;
