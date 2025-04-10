import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SponsorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 2rem;
  background: radial-gradient(circle at top center, #0f2b46, #000000);
  font-family: 'Orbitron', sans-serif;
  color: white;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const SponsorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 3rem 4rem;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 4rem;
  justify-items: center;
  text-align: center;
`;

const SponsorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  p {
    font-size: 0.9rem;
    color: #ccc;
    margin: 0;
  }

  img {
    max-width: 180px;
    height: auto;
    margin-top: 0.8rem;
    object-fit: contain;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 8px;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
    }
  }
`;

const LargeImage = styled.img`
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
`;

const Sponsors = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <SponsorsContainer>
      <SectionTitle data-aos="fade-up">Title Sponsor</SectionTitle>
      <LargeImage data-aos="zoom-in" src="https://i.imgur.com/d9pkeAd.png" alt="MITMAAI" />

      <SectionTitle data-aos="fade-up">Associate Sponsor</SectionTitle>
      <a href="https://www.dmi.ac.in/" target="_blank" rel="noopener noreferrer">
        <LargeImage data-aos="zoom-in" src="https://i.imgur.com/t1ESRta.jpg" alt="DMI" />
      </a>

      <SectionTitle data-aos="fade-up">Partners</SectionTitle>
      <SponsorGrid>
        <SponsorCard data-aos="flip-left">
          <p>GO69</p>
          <img src="https://i.imgur.com/zVIsPPH.png" alt="GO69" />
        </SponsorCard>
      </SponsorGrid>

      <SectionTitle data-aos="fade-up">Event Sponsors</SectionTitle>
      <SponsorGrid>
        <SponsorCard data-aos="flip-left">
          <p>Synergy Classes</p>
          <img src="https://i.imgur.com/qXJb2oi.jpg" alt="Synergy Classes" />
        </SponsorCard>
        <SponsorCard data-aos="flip-left" data-aos-delay="100">
          <p>Decathlon</p>
          <img src="https://i.imgur.com/ZbBqdNf.jpg" alt="Decathlon" />
        </SponsorCard>
        <SponsorCard data-aos="flip-left" data-aos-delay="200">
          <p>Internshala</p>
          <img src="https://i.imgur.com/7mE2L8v.png" alt="Internshala" />
        </SponsorCard>
      </SponsorGrid>
    </SponsorsContainer>
  );
};

export default Sponsors;
