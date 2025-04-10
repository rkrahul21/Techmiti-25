import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import styled from "styled-components";
import logo from "../assets/logo.jpg";

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

const FooterContainer = styled.footer`
  position: relative;
  min-height: 30vh;
  width: 100%;
  padding: 2rem 1rem;
  overflow: hidden;
  background: transparent;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    min-height: 25vh;
    padding: 1.5rem 1rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(0, 0, 0, 0.85) 100%
    );
    pointer-events: none;
    z-index: 0;
  }
`;

const Content = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  z-index: 1;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const LogoWrapper = styled.div`
  padding: 4px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    opacity: 0.5;
    filter: blur(4px);
  }
`;

const LogoInner = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 4px;
  border-radius: 50%;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-family: "Orbitron", sans-serif;
  background: linear-gradient(120deg, #4facfe, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(79, 172, 254, 0.3);

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin: 0.75rem 0;

  @media (max-width: 768px) {
    gap: 1rem;
    margin: 0.5rem 0;
  }
`;

const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  font-family: "Orbitron", sans-serif;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #4facfe, #00f2fe);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #00f2fe;
    transform: translateY(-2px);

    &::after {
      width: 100%;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin: 0.75rem 0;

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin: 0.5rem 0;
  }
`;

const SocialIcon = styled.a`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.25rem;
  transition: all 0.3s ease;
  position: relative;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  &::before {
    content: "";
    position: absolute;
    inset: -6px;
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    color: #fff;
    transform: translateY(-3px);

    &::before {
      opacity: 0.2;
    }
  }
`;

const Divider = styled.div`
  width: 50%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    #4facfe 20%,
    #00f2fe 50%,
    #4facfe 80%,
    transparent 100%
  );
  margin: 0.75rem 0;
  position: relative;

  @media (max-width: 768px) {
    width: 70%;
    margin: 0.5rem 0;
  }

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    background: inherit;
    filter: blur(4px);
    opacity: 0.5;
  }
`;

const Copyright = styled.div`
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

  span {
    color: #00f2fe;
  }

  .team {
    color: #fff;
    font-weight: 600;
  }
`;

function Footer() {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    "HOME",
    "EVENTS",
    "GLIMPSE",
    "BROCHURE",
    "CA RULEBOOK",
    "REGISTER",
  ];

  return (
    <FooterContainer>
      <VideoBackground autoPlay muted loop playsInline>
        <source src="/bg-video.mp4" type="video/mp4" />
      </VideoBackground>

      <Content>
        <LogoContainer>
          <LogoWrapper>
            <LogoInner>
              <Logo src={logo} alt="TechMITi'25 Logo" />
            </LogoInner>
          </LogoWrapper>
          <Title>TechMITi'25</Title>
        </LogoContainer>

        <Navigation>
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
            >
              {link}
            </NavLink>
          ))}
        </Navigation>

        <SocialLinks>
          <SocialIcon href="#" aria-label="Instagram">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="#" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="#" aria-label="Facebook">
            <FaFacebook />
          </SocialIcon>
        </SocialLinks>

        <Divider />

        <Copyright>
          <p>© {currentYear} TechMITi'25. All rights reserved.</p>
          <p>
            Made with <span>♥</span> by <span className="team">Team MOXIE</span>
          </p>
        </Copyright>
      </Content>
    </FooterContainer>
  );
}

export default Footer;
