import React from "react";
import styled from "styled-components";

const VideoBackground = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  object-fit: cover;
  opacity: 0.7;
`;

const SponsorsContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to b,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.75) 50%,
      rgba(0, 0, 0, 0.85) 100%
    );
    pointer-events: none;
    z-index: 0;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: white;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(120deg, #4a90e2, #67f3ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  font-family: "Orbitron", sans-serif;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: #4a90e2;
    border-radius: 2px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  width: 100%;

  h2 {
    font-size: 2rem;
    color: #4a90e2;
    margin-bottom: 2rem;
    text-align: center;
    font-family: "Orbitron", sans-serif;
    background: linear-gradient(120deg, #4a90e2, #67f3ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const HorizontalSponsorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  gap: 3rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HorizontalSection = styled(Section)`
  flex: 1;
  margin-bottom: 0;
  min-width: 250px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SponsorCard = styled.div`
  background: rgba(28, 28, 39, 0.75);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%;
  max-width: ${(props) => props.$maxWidth || "auto"};
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(79, 172, 254, 0.1),
      rgba(0, 242, 254, 0.1)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.2);

    &::before {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    max-width: 250px;
    height: auto;
    border-radius: 10px;
    transition: transform 0.3s ease;
    object-fit: contain;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

const SponsorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const Sponsors = () => {
  return (
    <SponsorsContainer>
      <VideoBackground autoPlay muted loop playsInline>
        <source src="/bg-video.mp4" type="video/mp4" />
      </VideoBackground>
      <ContentWrapper>
        <Title>Our Sponsors</Title>

        <HorizontalSponsorsContainer>
          <HorizontalSection>
            <h2>Title Sponsor</h2>
            <SponsorCard $maxWidth="500px">
              <img src="https://i.imgur.com/d9pkeAd.png" alt="MITMAAI" />
            </SponsorCard>
          </HorizontalSection>

          <HorizontalSection>
            <h2>Associate Sponsor</h2>
            <SponsorCard $maxWidth="600px">
              <a
                href="https://www.dmi.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://i.imgur.com/t1ESRta.jpg" alt="DMI" />
              </a>
            </SponsorCard>
          </HorizontalSection>

          <HorizontalSection>
            <h2>Partners</h2>
            <SponsorCard $maxWidth="400px">
              <img src="https://i.imgur.com/zVIsPPH.png" alt="GO69" />
            </SponsorCard>
          </HorizontalSection>
        </HorizontalSponsorsContainer>

        <Section>
          <h2>Event Sponsors</h2>
          <SponsorGrid>
            <SponsorCard>
              <img
                src="https://i.imgur.com/qXJb2oi.jpg"
                alt="Synergy Classes"
              />
            </SponsorCard>
            <SponsorCard>
              <img src="https://i.imgur.com/ZbBqdNf.jpg" alt="Decathlon" />
            </SponsorCard>
            <SponsorCard>
              <img src="https://i.imgur.com/7mE2L8v.png" alt="Internshala" />
            </SponsorCard>
            <SponsorCard>
              <img src="https://i.imgur.com/7mE2L8v.png" alt="Internshala" />
            </SponsorCard>
            <SponsorCard>
              <img src="https://i.imgur.com/7mE2L8v.png" alt="Internshala" />
            </SponsorCard>
            <SponsorCard>
              <img src="https://i.imgur.com/7mE2L8v.png" alt="Internshala" />
            </SponsorCard>
          </SponsorGrid>
        </Section>
      </ContentWrapper>
    </SponsorsContainer>
  );
};

export default Sponsors;
