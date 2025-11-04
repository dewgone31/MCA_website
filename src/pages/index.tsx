import styled from 'styled-components';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Process from '../components/Process';
import ContactForm from '../components/ContactForm';
import { colors } from '../styles/colors';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Hero = styled.section`
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(${colors.overlays.hero}, ${colors.overlays.hero}),
              url('${process.env.NEXT_PUBLIC_HERO_BG_IMAGE || "/images/hero-bg.jpg"}') center/cover;
  color: ${colors.bgWhite};
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  padding-top: 4rem;
  padding-bottom: 4rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  @media (min-width: 600px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 1rem;
  letter-spacing: -1px;
  @media (min-width: 600px) {
    font-size: 3.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  max-width: 600px;
  @media (min-width: 600px) {
    font-size: 1.5rem;
  }
`;

const HeroActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media (min-width: 500px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

const PrimaryButton = styled(motion.a)`
  background: ${colors.goldPrimary};
  color: ${colors.textPrimary};
  padding: 1rem 2.2rem;
  border: none;
  border-radius: 6px;
  font-size: 1.15rem;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 2px 8px ${colors.shadows.standard};
  transition: background 0.2s;
  display: inline-block;
  text-decoration: none;
  &:hover {
    background: ${colors.goldHover};
  }
`;

const SecondaryButton = styled(motion.a)`
  background: transparent;
  color: ${colors.goldPrimary};
  border: 2px solid ${colors.goldPrimary};
  padding: 1rem 2.2rem;
  border-radius: 6px;
  font-size: 1.15rem;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 2px 8px ${colors.shadows.standard};
  transition: background 0.2s, color 0.2s;
  display: inline-block;
  text-decoration: none;
  .icon-phone {
    color: ${colors.goldPrimary};
    transition: color 0.2s;
  }
  &:hover {
    background: ${colors.goldPrimary};
    color: ${colors.textPrimary};
  }
  &:hover .icon-phone {
    color: ${colors.textPrimary};
  }
`;

const HeroPhone = styled.div`
  margin-top: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.goldPrimary};
  letter-spacing: 1px;
`;

const Features = styled.section`
  padding: 4rem 0;
  background: ${colors.bgLight};
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

const FeatureCard = styled.div`
  background: ${colors.bgWhite};
  padding: 2rem 1rem 1.5rem 1rem;
  border-radius: 18px;
  box-shadow: 0 2px 12px ${colors.shadows.standard};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 140px;
`;

const FeatureIcon = styled.div`
  margin-bottom: 1rem;
  svg {
    width: 38px;
    height: 38px;
    display: block;
    margin: 0 auto;
  }
`;

const IconRight = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.7em;
  svg {
    width: 1em;
    height: 1em;
    display: block;
  }
`;

const IconLeft = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.7em;
  svg {
    width: 1em;
    height: 1em;
    display: block;
  }
`;

const features = [
  {
    icon: (
      <svg fill="none" viewBox="0 0 32 32"><g><circle cx="16" cy="16" r="16" fill={colors.bgGoldLight}/><path d="M16 9l7 5.25v7.25a2 2 0 01-2 2h-2.5v-3.5a2.5 2.5 0 00-5 0V23H11a2 2 0 01-2-2v-7.25L16 9z" fill={colors.goldPrimary}/><circle cx="16" cy="17.5" r="1.5" fill="#fff"/></g></svg>
    ),
    title: 'No collateral required',
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 32 32"><g><circle cx="16" cy="16" r="16" fill={colors.bgGoldLight}/><path d="M23 18a7 7 0 11-14 0 7 7 0 0114 0zm-7-4v4l3 1" stroke={colors.goldPrimary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
    ),
    title: 'No impact on your credit score',
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 32 32"><g><circle cx="16" cy="16" r="16" fill={colors.bgGoldLight}/><path d="M16 10v12M12 14h8M12 18h8" stroke={colors.goldPrimary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
    ),
    title: 'No application fee',
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 32 32"><g><circle cx="16" cy="16" r="16" fill={colors.bgGoldLight}/><path d="M22 16a6 6 0 11-6-6" stroke={colors.goldPrimary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 10v6h6" stroke={colors.goldPrimary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
    ),
    title: 'Funding within 24 hours',
  },
];

const ServicesSection = styled.section`
  padding: 5rem 0;
  background: ${colors.bgWhite};
`;

const ServicesTitle = styled.h2`
  color: ${colors.textPrimary};
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.5rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const ServiceCard = styled(motion.div)`
  background: ${colors.bgWhite};
  border-radius: 18px;
  box-shadow: 0 2px 12px ${colors.shadows.standard};
  padding: 2.5rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 320px;
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${colors.bgGoldLight};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  svg {
    width: 40px;
    height: 40px;
    color: ${colors.goldPrimary};
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.textPrimary};
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: ${colors.textSecondary};
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const LearnMoreButton = styled(motion.a)`
  display: inline-block;
  background: ${colors.goldPrimary};
  color: ${colors.textPrimary};
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.2s;
  &:hover {
    background: ${colors.goldHover};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${colors.shadows.goldButton};
  }
`;

export default function Home() {
  return (
    <main>
      <Head>
        <title>{process.env.NEXT_PUBLIC_COMPANY_NAME} - Home</title>
      </Head>
      <Hero>
        <HeroContent>
          <HeroTitle>Let's grow your business together</HeroTitle>
          <HeroSubtitle>Get your business loan deposited into your account within 24 hours</HeroSubtitle>
          <HeroActions>
            <PrimaryButton
              href="/apply"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
              <IconRight>
                <svg fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </IconRight>
            </PrimaryButton>
            <SecondaryButton
              href="tel:9177444376"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconLeft className="icon-phone">
                <svg fill="none" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </IconLeft>
              Call us
            </SecondaryButton>
          </HeroActions>
        </HeroContent>
        {/* SVG Wave at the bottom */}
        <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, width: '100%', zIndex: 2, lineHeight: 0}} aria-hidden="true">
          <svg viewBox="0 0 1440 80" width="100%" height="80" preserveAspectRatio="none" style={{display: 'block'}}>
            <path d="M0,40 C360,120 1080,0 1440,60 L1440,80 L0,80 Z" fill="#F9F9F9" />
          </svg>
        </div>
      </Hero>

      <Features>
        <Container>
          <h2 style={{textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: '1.5rem'}}>What you need to know before you get started:</h2>
          <FeatureGrid>
            {features.map((feature, idx) => (
              <FeatureCard key={idx}>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <div style={{fontWeight: 600, fontSize: '1.1rem', color: colors.textPrimary}}>{feature.title}</div>
              </FeatureCard>
            ))}
          </FeatureGrid>
        </Container>
      </Features>

      <ServicesSection>
        <Container>
          <ServicesTitle>Our Financial Solutions</ServicesTitle>
          <ServicesGrid>
            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ServiceIcon>
                <svg fill="none" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor"/>
                </svg>
              </ServiceIcon>
              <ServiceTitle>Term Loan</ServiceTitle>
              <ServiceDescription>
                Get a business loan up to $1,000,000 with rates as low as 6.9%. Fixed payments and terms up to 36 months with early payoff discounts.
              </ServiceDescription>
              <LearnMoreButton
                href="/term-loan"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </LearnMoreButton>
            </ServiceCard>

            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ServiceIcon>
                <svg fill="none" viewBox="0 0 24 24">
                  <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="currentColor"/>
                </svg>
              </ServiceIcon>
              <ServiceTitle>Line of Credit</ServiceTitle>
              <ServiceDescription>
                Access up to $250,000 with rates starting at 4.9%. Draw funds as needed and only pay for what you use, with terms up to 12 months.
              </ServiceDescription>
              <LearnMoreButton
                href="/line-of-credit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </LearnMoreButton>
            </ServiceCard>
          </ServicesGrid>
        </Container>
      </ServicesSection>

      <Process />
      <ContactForm />
    </main>
  );
} 