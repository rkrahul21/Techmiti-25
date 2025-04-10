import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  background: linear-gradient(to bottom, #000000 0%, #010d1f 50%, #0d1b2a 100%);
  font-family: 'Orbitron', sans-serif;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  width: 50%;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 400;
  text-align: justify;
  padding: 10rem 2rem 2rem 4rem;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 6rem 2rem 2rem 2rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 4rem 1.5rem 2rem 1.5rem;
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
    object-fit: contain;
    border-radius: 20px;
    box-shadow: 0 0 30px rgba(0, 217, 255, 0.2);
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 1.5rem;

    img {
      max-height: 500px;
    }
  }
`;

const Title = styled.h1`
  position: absolute;
  top: 2rem;
  left: 4rem;
  font-size: 4rem;
  color: #00d9ff;
  font-weight: 700;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1.5rem;
  border-radius: 10px;
  text-shadow: 2px 2px 12px rgba(0, 217, 255, 0.7);

  @media (max-width: 1024px) {
    top: 1.5rem;
    left: 2rem;
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
    left: 1rem;
    padding: 0.4rem 1rem;
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title>About Us</Title>
      <Left>
        TechMITi'25 is the annual science and technology festival of MIT Muzaffarpur,
        which is organized by Moxie-The Technical Club that is going to be held on
        14th - 16th May 2025 in fully offline mode. TechMITi comprises a diverse
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
