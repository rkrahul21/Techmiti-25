import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import logoImage from "../../assets/231531.jpg";

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
  padding: 2rem 1rem;
  padding-top: 8rem;

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

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0.5rem;
    padding-top: 6rem;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  background: rgba(20, 20, 30, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.1),
      rgba(0, 242, 254, 0.1)
    );
    opacity: 0.5;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(79, 172, 254, 0.5),
      transparent
    );
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

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    gap: 2rem;
  }
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
    right: 0;

    h2 {
      font-size: 1.75rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 36em) {
    padding: 1.25rem;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 480px;
  position: relative;

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
    right: 0;
  }
`;

const FeatureBoxesContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 0.5rem 0;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
  will-change: transform;
`;

const CarouselSlide = styled.div`
  flex: 0 0 ${(props) => props.$slideWidth}%;
  padding: 0 0.5rem;
  box-sizing: border-box;
`;

const CarouselNav = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.5rem;

  @media (min-width: 769px) {
    display: none;
  }
`;

const CarouselDot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$active ? "rgba(79, 172, 254, 0.8)" : "rgba(255, 255, 255, 0.3)"};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.$active ? "rgba(79, 172, 254, 1)" : "rgba(255, 255, 255, 0.5)"};
  }
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(28, 28, 39, 0.75);
  color: #4a90e2;
  border: 1px solid rgba(79, 172, 254, 0.3);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(79, 172, 254, 0.2);
    border-color: rgba(79, 172, 254, 0.6);
    transform: translateY(-50%) scale(1.1);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const CarouselIndicator = styled.div`
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => 100 / props.$totalSlides}%;
    background: linear-gradient(to right, #4facfe, #00f2fe);
    transform: translateX(${(props) => props.$currentSlide * 100}%);
    transition: transform 0.5s ease;
  }

  @media (min-width: 769px) {
    display: none;
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
  height: 100%;
  max-width: 280px;
  margin: 0 auto;

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

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 240px;

    .icon {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    max-width: 220px;

    .icon {
      font-size: 1.75rem;
    }

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`;

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(25);
  const [totalSlides, setTotalSlides] = useState(4);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [animationID, setAnimationID] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setSlideWidth(100);
        setTotalSlides(4);
      } else {
        setSlideWidth(25);
        setTotalSlides(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationID);
    };
  }, [animationID]);

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      if (!isDragging) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isDragging, currentSlide, totalSlides, isMobile]);

  const nextSlide = useCallback(() => {
    if (!isMobile) return;
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [isMobile, totalSlides]);

  const prevSlide = useCallback(() => {
    if (!isMobile) return;
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [isMobile, totalSlides]);

  const goToSlide = useCallback(
    (index) => {
      if (!isMobile) return;
      setCurrentSlide(index);
    },
    [isMobile]
  );

  const getPositionX = useCallback((e) => {
    return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
  }, []);

  const touchStart = useCallback(
    (e) => {
      if (!isMobile) return;
      setIsDragging(true);
      setStartPos(getPositionX(e));
      setPrevTranslate(currentTranslate);
      cancelAnimationFrame(animationID);
    },
    [isMobile, getPositionX, currentTranslate, animationID]
  );

  const touchMove = useCallback(
    (e) => {
      if (!isMobile || !isDragging) return;

      const currentPosition = getPositionX(e);
      const diff = currentPosition - startPos;

      // Limit the drag to prevent over-scrolling
      const maxTranslate = 0;
      const minTranslate = -(totalSlides - 1) * slideWidth;

      let newTranslate = prevTranslate + diff;
      newTranslate = Math.max(
        minTranslate,
        Math.min(maxTranslate, newTranslate)
      );

      setCurrentTranslate(newTranslate);
    },
    [
      isMobile,
      isDragging,
      getPositionX,
      startPos,
      prevTranslate,
      totalSlides,
      slideWidth,
    ]
  );

  const touchEnd = useCallback(() => {
    if (!isMobile) return;
    setIsDragging(false);
    cancelAnimationFrame(animationID);

    const movedBy = currentTranslate - prevTranslate;

    if (Math.abs(movedBy) > 50) {
      if (movedBy < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setCurrentTranslate(-currentSlide * slideWidth);
  }, [
    isMobile,
    animationID,
    currentTranslate,
    prevTranslate,
    nextSlide,
    prevSlide,
    currentSlide,
    slideWidth,
  ]);

  return (
    <Section id="about">
      <VideoBackground autoPlay muted loop playsInline>
        <source src="/bg-video.mp4" type="video/mp4" />
      </VideoBackground>
      <MainContainer>
        <ContentWrapper>
          <Title>About
          <span class="text-5xl font-bold ml-2 group">
          <span class="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-white transition-all duration-500">Tech</span>
          <span class="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFA500] group-hover:to-[#FF8C00] transition-all duration-500">MIT</span>
          <span class="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-white transition-all duration-500">i'25</span>
          </span></Title>
          <FlexContainer>
            <ContentCard>
              <h2>Welcome to 
                <span class="text-3xl font-bold ml-2 inline-block">
                <span class="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white transition-all duration-500">Tech</span>
                <span class="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-[#FFD700] hover:via-[#FFA500] hover:to-[#FF8C00] transition-all duration-500">MIT</span>
                <span class="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white transition-all duration-500">i'25</span>
          </span></h2>
              <p>
              <span class="text-1xl font-bold ml-2 inline-block">
          <span class="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white transition-all duration-500">Tech</span>
          <span class="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-[#FFD700] hover:via-[#FFA500] hover:to-[#FF8C00] transition-all duration-500">MIT</span>
          <span class="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white transition-all duration-500">i'25</span>
          </span> is the annual technical festival of MIT Muzaffarpur,
                bringing together the brightest minds in technology and
                innovation. This three-day extravaganza is a celebration of
                technology, creativity, and learning.
              </p>
              <p>
                With a legacy of excellence,<span class="text-1xl font-bold ml-2 inline-block">
          <span class="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white transition-all duration-500">Tech</span>
          <span class="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-[#FFD700] hover:via-[#FFA500] hover:to-[#FF8C00] transition-all duration-500">MIT</span>
          <span class="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white transition-all duration-500">i'25</span>
          </span> 2025 promises to be bigger
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
            {isMobile && (
              <>
                <CarouselButton
                  className="prev"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </CarouselButton>
                <CarouselButton
                  className="next"
                  onClick={nextSlide}
                  aria-label="Next slide"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </CarouselButton>
              </>
            )}

            <CarouselWrapper>
              <CarouselTrack
                ref={carouselRef}
                style={{
                  transform: isMobile
                    ? `translateX(${
                        isDragging
                          ? currentTranslate
                          : -currentSlide * slideWidth
                      }%)`
                    : "none",
                  cursor: isMobile && isDragging ? "grabbing" : "default",
                }}
                onTouchStart={touchStart}
                onTouchMove={touchMove}
                onTouchEnd={touchEnd}
                onMouseDown={touchStart}
                onMouseMove={touchMove}
                onMouseUp={touchEnd}
                onMouseLeave={touchEnd}
              >
                <CarouselSlide $slideWidth={slideWidth}>
                  <FeatureBox>
                    <div className="icon">🎯</div>
                    <h3>20+ Events</h3>
                    <p>
                      Exciting technical events and competitions across various
                      domains.
                    </p>
                  </FeatureBox>
                </CarouselSlide>
                <CarouselSlide $slideWidth={slideWidth}>
                  <FeatureBox>
                    <div className="icon">🏛️</div>
                    <h3>40+ Elite Colleges</h3>
                    <p>
                      Participation from top engineering colleges across the
                      country.
                    </p>
                  </FeatureBox>
                </CarouselSlide>
                <CarouselSlide $slideWidth={slideWidth}>
                  <FeatureBox>
                    <div className="icon">📅</div>
                    <h3>3 Days Event</h3>
                    <p>
                      Three days of non-stop technical extravaganza and
                      learning.
                    </p>
                  </FeatureBox>
                </CarouselSlide>
                <CarouselSlide $slideWidth={slideWidth}>
                  <FeatureBox>
                    <div className="icon">💰</div>
                    <h3>₹2L+ Prize Pool</h3>
                    <p>
                      Massive prize pool for winners across different
                      competitions.
                    </p>
                  </FeatureBox>
                </CarouselSlide>
              </CarouselTrack>

              {isMobile && (
                <CarouselIndicator
                  $currentSlide={currentSlide}
                  $totalSlides={totalSlides}
                />
              )}
            </CarouselWrapper>

            {isMobile && (
              <CarouselNav>
                {[...Array(totalSlides)].map((_, index) => (
                  <CarouselDot
                    key={index}
                    $active={currentSlide === index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </CarouselNav>
            )}
          </FeatureBoxesContainer>
        </ContentWrapper>
      </MainContainer>
    </Section>
  );
};

export default AboutUs;
