import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../styles/colors';

const ProcessSection = styled.section`
  padding: 6rem 0;
  background: ${colors.bgLight};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${colors.textPrimary};
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
`;

const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }
`;

const StepNumber = styled.div`
  width: 54px;
  height: 54px;
  background: ${colors.goldPrimary};
  color: ${colors.textPrimary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
  box-shadow: 0 2px 8px ${colors.shadows.standard};
  position: absolute;
  top: -27px;
  left: -27px;
  z-index: 2;
  @media (max-width: 700px) {
    left: 50%;
    transform: translateX(-50%);
    top: -27px;
  }
`;

const Step = styled(motion.div)`
  background: ${colors.bgWhite};
  padding: 2rem 1.2rem 1.5rem 1.2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px ${colors.shadows.medium};
  text-align: left;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  padding-top: 2.5rem;
  padding-left: 2.5rem;

  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding-top: 2.5rem;
    padding-left: 0.5rem;
  }

  h4 {
    color: ${colors.textPrimary};
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }

  p {
    color: ${colors.textMuted};
    margin: 0;
  }
`;

const StepImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 2px 12px ${colors.shadows.standard};
  flex-shrink: 0;
`;

const StepText = styled.div`
  flex: 1;
`;

const InlineApplyButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${colors.goldPrimary};
  color: ${colors.textPrimary};
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 2px 8px ${colors.shadows.standard};
  transition: background 0.2s, color 0.2s;
  text-decoration: none;
  margin-top: 0.8rem;
  &:hover {
    background: ${colors.goldHover};
    color: ${colors.textBlack};
  }
`;

const ApplyNowButton = styled(motion.a)`
  display: inline-block;
  margin: 2.5rem auto 0 auto;
  background: ${colors.goldPrimary};
  color: ${colors.textPrimary};
  padding: 1rem 2.2rem;
  border: none;
  border-radius: 999px;
  font-size: 1.15rem;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 2px 8px ${colors.shadows.standard};
  transition: background 0.2s, color 0.2s;
  text-decoration: none;
  &:hover {
    background: ${colors.goldHover};
    color: ${colors.textBlack};
  }
`;

const steps = [
  {
    number: '1',
    title: 'Apply',
    description: 'Answer a few basic questions about your business. It only takes 5 minutes to complete.',
    image: '/images/apply-card.jpg',
    imageAlt: 'Person applying online',
  },
  {
    number: '2',
    title: 'Get approved',
    description: 'One of our loan specialists will get in touch with you to generate offers that best suit your business.',
    image: '/images/approved-card.jpg',
    imageAlt: 'Person signing approval documents',
  },
  {
    number: '3',
    title: 'Get funded',
    description: 'Once you accept our offer, the money is deposited into your business bank account within 24 hours.',
    image: '/images/funded-card.jpg',
    imageAlt: 'Handshake for funding',
  }
];

export default function Process() {
  return (
    <ProcessSection>
      <Container>
        <Title>Three easy steps</Title>
        <StepsContainer>
          {steps.map((step, index) => (
            <Step
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <StepNumber>{step.number}</StepNumber>
              <StepImage src={step.image} alt={step.imageAlt} />
              <StepText>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
                {index === 0 && (
                  <InlineApplyButton
                    href="/apply"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply Now
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </InlineApplyButton>
                )}
              </StepText>
            </Step>
          ))}
        </StepsContainer>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ApplyNowButton
            href="/apply"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now
          </ApplyNowButton>
        </div>
      </Container>
    </ProcessSection>
  );
} 