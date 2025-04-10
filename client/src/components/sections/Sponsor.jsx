import React from 'react';
import styled from 'styled-components';

const SponsorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: auto;
  padding: 5rem 0;
  height: 100%;
  cursor: pointer;
  background: radial-gradient(circle at top center, #0f2b46, #000000); /* Updated background */
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
  }
`;

const ContImg = styled.img`
  width: 300px;
  height: 300px;
`;

const Partners = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-wrap: wrap;
  padding: auto 20px;
`;

const EventSponsors = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-wrap: wrap;
`;

const EventSponsorImg = styled.img`
  display: flex;
  margin-top: 20px;
  margin-right: 20px;
  width: 500px;
  height: 300px;
  border-radius: 5px;
`;

const Sponsors = () => {
  return (
    <SponsorsContainer>
      <Section>
        <h1>Title Sponsor</h1>
        <ContImg src='https://i.imgur.com/d9pkeAd.png' alt='MITMAAI' />
      </Section>

      <Section>
        <h1>Associate Sponsor</h1>
        <a href='https://www.dmi.ac.in/' target='_blank' rel="noopener noreferrer">
          <EventSponsorImg
            src='https://i.imgur.com/t1ESRta.jpg'
            alt='DMI'
            style={{ width: '500px', height: '300px', borderRadius: '5px' }}
          />
        </a>
      </Section>

      <Section>
        <h1>Partners</h1>
        <Partners>
          <ContImg src="https://i.imgur.com/zVIsPPH.png" alt="GO69" />
        </Partners>
      </Section>

      <Section>
        <h1>Event Sponsor</h1>
        <EventSponsors>
          <EventSponsorImg src="https://i.imgur.com/qXJb2oi.jpg" alt="Synergy Classes" />
          <EventSponsorImg src="https://i.imgur.com/ZbBqdNf.jpg" alt="Decathlon" />
          <EventSponsorImg src="https://i.imgur.com/7mE2L8v.png" alt="Internshala" />
        </EventSponsors>
      </Section>
    </SponsorsContainer>
  );
};

export default Sponsors;
