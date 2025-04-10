import React from "react";
import styled from "styled-components";
import logoImage from "../../assets/logo.jpg";

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

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  position: relative;
  font-family: "Orbitron", sans-serif;
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

  @media (max-width: 48em) {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: white;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(120deg, #4a90e2, #67f3ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

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

  @media (max-width: 48em) {
    font-size: 2.5rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 64em) {
    flex-direction: column;
  }
`;

const ContentCard = styled.div`
  background: rgba(28, 28, 39, 0.75);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  flex: 1;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  position: relative;
  right: 70px;
  overflow: hidden;

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

  &:hover::before {
    opacity: 1;
  }

  h2 {
    color: #4a90e2;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  p {
    color: #e0e0e0;
    font-size: 1.1rem;
    line-height: 1.8;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 48em) {
    padding: 1.5rem;

    h2 {
      font-size: 1.75rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 480px;
  position: relative;
  right: 80px;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 2px solid #4a90e2;
    border-radius: 20px;
    animation: borderPulse 4s infinite;
    opacity: 0.5;
  }

  @keyframes borderPulse {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.02);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 8px 32px rgba(74, 144, 226, 0.3);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  @media (max-width: 64em) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

const FeatureBoxesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  margin-top: 4rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureBox = styled.div`
  background: rgba(28, 28, 39, 0.75);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;

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

  .icon {
    font-size: 2.5rem;
    color: #4a90e2;
    margin-bottom: 1rem;
  }

  h3 {
    color: #4a90e2;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: #e0e0e0;
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const About = () => {
  return (
    <Section id="about">
      <VideoBackground autoPlay muted loop playsInline>
        <source src="/bg-video.mp4" type="video/mp4" />
      </VideoBackground>
      <ContentWrapper>
        <Title>About Techmiti</Title>
        <FlexContainer>
          <ContentCard>
            <h2>Welcome to Techmiti 2025</h2>
            <p>
              Techmiti is the annual technical festival of MIT Muzaffarpur,
              bringing together the brightest minds in technology and
              innovation. This three-day extravaganza is a celebration of
              technology, creativity, and learning.
            </p>
            <p>
              With a legacy of excellence, Techmiti 2025 promises to be bigger
              and better than ever before. Join us for an unforgettable
              experience filled with competitions, workshops, technical talks,
              and networking opportunities.
            </p>
          </ContentCard>
          <ImageContainer>
            <img src={logoImage} alt="Techmiti 2025 Logo" />
          </ImageContainer>
        </FlexContainer>

        <FeatureBoxesContainer>
          <FeatureBox>
            <div className="icon">🎯</div>
            <h3>20+ Events</h3>
            <p>
              Exciting technical events and competitions across various domains.
            </p>
          </FeatureBox>
          <FeatureBox>
            <div className="icon">🏛️</div>
            <h3>40+ Elite Colleges</h3>
            <p>
              Participation from top engineering colleges across the country.
            </p>
          </FeatureBox>
          <FeatureBox>
            <div className="icon">📅</div>
            <h3>3 Days Event</h3>
            <p>Three days of non-stop technical extravaganza and learning.</p>
          </FeatureBox>
          <FeatureBox>
            <div className="icon">💰</div>
            <h3>₹2L+ Prize Pool</h3>
            <p>Massive prize pool for winners across different competitions.</p>
          </FeatureBox>
        </FeatureBoxesContainer>
      </ContentWrapper>
    </Section>
  );
};

export default About;
