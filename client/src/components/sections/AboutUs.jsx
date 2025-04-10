import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  background-color: #2b3e56; /* Matches the event poster background */
  font-family: 'Orbitron', sans-serif;
  position: relative;

  @media (max-width: 48em) {
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  width: 50%;
  color: white;
  font-size: 1.1rem;
  font-weight: 400;
  text-align: justify;
  padding: 10rem 2rem 2rem 4rem;

  @media (max-width: 64em) {
    width: 100%;
    padding: 2rem;
    font-size: 1rem;
  }

  @media (max-width: 30em) {
    padding: 1.5rem;
    font-size: 0.95rem;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  img {
    width: 100%;
    height: auto;
    max-height: 750px;
    object-fit: cover;
  }

  @media (max-width: 64em) {
    width: 100%;
    padding: 1rem;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

const Title = styled.h1`
  position: absolute;
  top: 2rem;
  left: 4rem;
  font-size: 4rem;
  color: white;
  font-weight: 700;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1.5rem;
  border-radius: 10px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);

  @media (max-width: 64em) {
    top: 1.5rem;
    left: 2rem;
    font-size: 3rem;
  }

  @media (max-width: 30em) {
    font-size: 2.5rem;
    left: 1rem;
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title>About Us</Title>
      <Left>
        TechMITi'25 is the annual science and technology festival of MIT Muzaffarpur,
        which is organized by Moxie-The Technical Club that is going to be held on
        14th -16th May 2025 in fully offline mode. TechMITi comprises a diverse
        array of competitive technical events, exhibitions, workshops, and guest
        speakers that attract the participation of students from engineering institutes
        all across the nation. The 3-day fest congregation is expected to have
        4,000+ footprints gathering from various technical institutes to participate in
        and witness the TechMITi.
      </Left>
      <Right>
        <img src="/231531.jpg" alt="TechMITi Poster" />
      </Right>
    </Section>
  );
};

export default About;