import styled from 'styled-components';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { colors } from '../styles/colors';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem 5rem 1rem;
`;

const Hero = styled.section`
  max-width: 1200px;
  margin: 0 auto 3rem auto;
  background: ${colors.goldPrimary};
  color: ${colors.textPrimary};
  border-radius: 24px;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 3rem 2rem 2.5rem 2rem;
  gap: 2.5rem;
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 2.5rem 1rem 2rem 1rem;
  }
`;

const HeroText = styled.div`
  flex: 1 1 0;
  text-align: left;
  @media (max-width: 900px) {
    text-align: center;
  }
`;

const HeroImageWrapper = styled.div`
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 18px;
  box-shadow: 0 4px 24px ${colors.shadows.heavy};
  object-fit: cover;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0 auto;
  max-width: 700px;
`;

const WhySection = styled.section`
  margin: 3rem 0 2.5rem 0;
`;

const WhyTitle = styled.h2`
  color: ${colors.textPrimary};
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
`;

const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  justify-items: center;
`;

const WhyCard = styled(motion.div)`
  background: ${colors.bgWhite};
  border-radius: 14px;
  box-shadow: 0 2px 12px ${colors.shadows.standard};
  padding: 2rem 1.5rem;
  text-align: center;
  min-width: 260px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardStat = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: ${colors.goldPrimary};
  margin-bottom: 0.5rem;
`;

const CardLabel = styled.div`
  font-size: 1.1rem;
  color: ${colors.textPrimary};
`;

const Section = styled.section`
  margin: 3rem 0;
`;

const SectionTitle = styled.h3`
  color: ${colors.textPrimary};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
`;

const HowList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const HowItem = styled.li`
  background: ${colors.bgLight};
  border-radius: 10px;
  box-shadow: 0 2px 8px ${colors.shadows.light};
  padding: 1.5rem 1.2rem;
  color: ${colors.textPrimary};
`;

const StepsSection = styled.section`
  margin: 4rem 0 2.5rem 0;
`;

const StepsTitle = styled.h3`
  color: ${colors.textPrimary};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
`;

const StepCard = styled(motion.div)`
  background: ${colors.bgWhite};
  border-radius: 14px;
  box-shadow: 0 2px 12px ${colors.shadows.standard};
  padding: 2rem 1.5rem;
  text-align: center;
  min-width: 200px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StepNumber = styled.div`
  width: 44px;
  height: 44px;
  background: ${colors.goldPrimary};
  color: ${colors.textPrimary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const StepTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const StepDesc = styled.div`
  color: ${colors.textSecondary};
  font-size: 1rem;
`;

const QualSection = styled.section`
  margin: 4rem 0 2.5rem 0;
`;

const QualGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

const QualCard = styled.div`
  background: ${colors.bgLight};
  border-radius: 10px;
  box-shadow: 0 2px 8px ${colors.shadows.light};
  padding: 2rem 1.5rem;
`;

const QualTitle = styled.h4`
  color: ${colors.textPrimary};
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const QualList = styled.ul`
  margin: 0;
  padding-left: 1.2em;
  color: ${colors.textSecondary};
  font-size: 1rem;
`;

export default function TermLoanPage() {
  return (
    <PageContainer>
      <Head>
        <title>Term Loan - {process.env.NEXT_PUBLIC_COMPANY_NAME}</title>
      </Head>
      <Hero>
        <HeroContent>
          <HeroText>
            <HeroTitle>Let's talk about your loan term​</HeroTitle>
            <HeroSubtitle>
              Fast working capital made simple
            </HeroSubtitle>
          </HeroText>
          <HeroImageWrapper>
            <HeroImage src="/images/term_loan.jpg" alt="Handing over a stack of money" />
          </HeroImageWrapper>
        </HeroContent>
      </Hero>

      <WhySection>
        <WhyTitle>Why Choose Us</WhyTitle>
        <WhyGrid>
          <WhyCard initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <CardStat>$1,000,000</CardStat>
            <CardLabel>Loan amounts up to</CardLabel>
          </WhyCard>
          <WhyCard initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <CardStat>6.9%</CardStat>
            <CardLabel>Rates as low as</CardLabel>
          </WhyCard>
          <WhyCard initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <CardStat>36 months</CardStat>
            <CardLabel>Loan terms up to</CardLabel>
          </WhyCard>
        </WhyGrid>
      </WhySection>

      <Section>
        <SectionTitle>How It Works</SectionTitle>
        <HowList>
          <HowItem>
            <strong>Early payoff discount</strong><br />
            Enjoy a discount on your interest rate if you payoff the loan early.
          </HowItem>
          <HowItem>
            <strong>Fixed interest rates</strong><br />
            Your payments will stay constant over the lifetime of your loan term.
          </HowItem>
          <HowItem>
            <strong>Choose your repayments</strong><br />
            You can choose how you want to repay, weekly, bi-weekly or monthly.
          </HowItem>
          <HowItem>
            <strong>Fast approvals</strong><br />
            Get approved in as fast as 5 minutes and receive funds within 24 hours.
          </HowItem>
        </HowList>
      </Section>

      <StepsSection>
        <StepsTitle>Get funded in 3 easy steps</StepsTitle>
        <StepsGrid>
          <StepCard initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <StepNumber>1</StepNumber>
            <StepTitle>Apply</StepTitle>
            <StepDesc>Answer a few basic questions about your business. It only takes 5 minutes to complete.</StepDesc>
          </StepCard>
          <StepCard initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <StepNumber>2</StepNumber>
            <StepTitle>Get approved</StepTitle>
            <StepDesc>One of our loan specialists will get in touch with you to generate offers that best suit your business.</StepDesc>
          </StepCard>
          <StepCard initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <StepNumber>3</StepNumber>
            <StepTitle>Get funded</StepTitle>
            <StepDesc>Once you accept our offer, the money is deposited into your business bank account within 24 hours.</StepDesc>
          </StepCard>
        </StepsGrid>
      </StepsSection>

      <QualSection>
        <SectionTitle>What you need to get started</SectionTitle>
        <QualGrid>
          <QualCard>
            <QualTitle>Minimum qualifications</QualTitle>
            <QualList>
              <li>At least 6 months in business</li>
              <li>Minimum annual revenue of $200,000</li>
            </QualList>
          </QualCard>
          <QualCard>
            <QualTitle>What you need to apply</QualTitle>
            <QualList>
              <li>Basic info about your business</li>
              <li>Last 3 months of your business bank statements</li>
            </QualList>
          </QualCard>
        </QualGrid>
      </QualSection>
    </PageContainer>
  );
} 