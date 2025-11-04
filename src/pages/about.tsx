import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { colors } from '../styles/colors';
import Head from 'next/head';

const GoldBanner = styled.section`
  width: 100%;
  background: ${colors.goldPrimary};
  color: ${colors.textPrimary};
  padding: 3rem 1rem 2.2rem 1rem;
  text-align: center;
  border-radius: 0 0 24px 24px;
  box-shadow: 0 2px 12px ${colors.shadows.standard};
`;

const BannerTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: ${colors.textPrimary};
`;

const BannerSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${colors.textPrimary};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem 5rem 1rem;
`;

const ContentSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-top: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const TextContent = styled.div`
  h2 {
    font-size: 2rem;
    color: ${colors.textPrimary};
    margin-bottom: 1.5rem;
    font-weight: 700;
  }

  p {
    font-size: 1.1rem;
    color: ${colors.textSecondary};
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 24px ${colors.shadows.heavy};
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

const ValuesSection = styled.section`
  margin-top: 6rem;
  text-align: center;
`;

const ValuesTitle = styled.h2`
  font-size: 2rem;
  color: ${colors.textPrimary};
  margin-bottom: 3rem;
  font-weight: 700;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ValueCard = styled(motion.div)`
  background: ${colors.bgLight};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px ${colors.shadows.medium};
  text-align: center;

  h3 {
    color: ${colors.textPrimary};
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: ${colors.textMuted};
    line-height: 1.6;
  }
`;

const values = [
  {
    title: 'Customer Service',
    description: 'We understand that exceptional customer service is the foundation of any successful business. That\'s why we prioritize your needs and provide personalized support throughout your journey.'
  },
  {
    title: 'Accessible Financing',
    description: 'We believe that every business owner deserves access to the funding they need to grow. Our flexible loan options are designed to help you overcome financial challenges.'
  },
  {
    title: 'Business Growth',
    description: 'Your success is our success. We\'re committed to providing the financial tools and support you need to expand your business and achieve your goals.'
  }
];

const FAQSection = styled.section`
  margin-top: 6rem;
  margin-bottom: 2rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const FAQTitle = styled.h2`
  color: ${colors.goldPrimary};
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

const FAQSubtitle = styled.p`
  color: ${colors.textPrimary};
  text-align: center;
  font-size: 1.15rem;
  margin-bottom: 2.5rem;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const FAQItem = styled.div`
  background: ${colors.bgWhite};
  border-radius: 10px;
  box-shadow: 0 2px 8px ${colors.shadows.standard};
  overflow: hidden;
`;

const FAQQuestion = styled.button`
  width: 100%;
  background: none;
  border: none;
  color: ${colors.textPrimary};
  font-size: 1.1rem;
  font-weight: 700;
  text-align: left;
  padding: 1.2rem 1.5rem;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.2s;
  &:hover, &:focus {
    background: ${colors.bgGoldLight};
  }
`;

const FAQAnswer = styled.div<{ open: boolean }>`
  max-height: ${({open}) => open ? '1000px' : '0'};
  opacity: ${({open}) => open ? 1 : 0};
  transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
  overflow: hidden;
  background: ${colors.bgLight};
  padding: ${({open}) => open ? '1rem 1.5rem 1.5rem 1.5rem' : '0 1.5rem'};
  color: ${colors.textFaq};
  font-size: 1rem;
`;

const faqs = [
  {
    q: 'Who are we?',
    a: 'We simplify business funding. We help business owners across all industries select the best financing solution to grow their business.'
  },
  {
    q: 'How does it work?',
    a: 'We provide all your funding options in one place thanks to a simple application that can get your business approved within hours. A dedicated Funding Specialist is there for you every step of the way.'
  },
  {
    q: 'How can I apply?',
    a: 'Applying is simple. We ask a few basic questions about you, your business, and revenue data. It takes minutes to complete and does not affect your credit score. <a href="/apply" style="color:' + colors.goldPrimary + ';font-weight:600;">Click here to get started.</a>'
  },
  {
    q: 'How long does it take to be approved?',
    a: 'Our application process is designed to deliver a funding decision within hours.'
  },
  {
    q: 'How quickly can I get my funds?',
    a: `Once approved, the process is quick and simple. Your funds are transferred directly into your business's bank account typically within 24 hours. We do offer same day wire.`
  },
  {
    q: 'Is my business eligible?',
    a: `Our minimum requirements are:<ul style="margin:0 0 0 1.2em;padding:0;"><li>6+ months in business</li><li>$15,000 monthly revenue or $180,000 annually</li><li>500+ FICO Score</li></ul>To see if your business is eligible for funding, contact one of our expert Funding Specialists at <a href="tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE || '9177444376'}" style="color:' + colors.goldPrimary + ';font-weight:600;">${process.env.NEXT_PUBLIC_CONTACT_PHONE || '(917) 744-4376'}</a>`
  },
  {
    q: 'Will exploring my funding options impact my credit score?',
    a: 'Completing your online application will not affect your credit score. However, we conduct a soft credit pull, which should have minimal impact on your credit.'
  },
  {
    q: 'How secure is my information?',
    a: `We use the latest bank-grade encryption and Secure Sockets Layer (SSL) technology, we can ensure that the safety of our applicant's information is our number one priority.`
  },
  {
    q: 'How long is the financing period?',
    a: 'With a variety of funding options, financing terms can range from 4 months to 5 years.'
  },
  {
    q: 'Can I pay off my financing early?',
    a: 'Yes. Most funding options can be paid off ahead of time without any additional fees or pre-payment penalties.'
  }
];

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  return (
    <FAQSection>
      <FAQTitle>FAQ</FAQTitle>
      <FAQSubtitle>Most frequent questions and answers</FAQSubtitle>
      <FAQList>
        {faqs.map((item, idx) => (
          <FAQItem key={idx}>
            <FAQQuestion
              aria-expanded={openFAQ === idx}
              aria-controls={`faq-answer-${idx}`}
              onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
            >
              {item.q}
              <span style={{marginLeft: '1em', fontWeight: 400, fontSize: '1.3em'}}>{openFAQ === idx ? '−' : '+'}</span>
            </FAQQuestion>
            <FAQAnswer
              id={`faq-answer-${idx}`}
              open={openFAQ === idx}
              style={{transition: 'all 0.3s'}}
              dangerouslySetInnerHTML={{__html: item.a}}
            />
          </FAQItem>
        ))}
      </FAQList>
    </FAQSection>
  );
}

export default function About() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>About {process.env.NEXT_PUBLIC_COMPANY_NAME || "Our Company"} - Business Financing Solutions</title>
        <meta name="description" content={`Learn about ${process.env.NEXT_PUBLIC_COMPANY_NAME || "Our Company"} and our commitment to helping businesses grow with innovative financing solutions.`} />
      </Head>

      <GoldBanner>
        <BannerTitle>About {process.env.NEXT_PUBLIC_COMPANY_NAME || "Our Company"}</BannerTitle>
        <BannerSubtitle>
          We are a leading financial services company dedicated to helping businesses grow and succeed through innovative financing solutions.
        </BannerSubtitle>
      </GoldBanner>
      <PageContainer>
        <ContentSection>
          <TextContent>
            <h2>Our Mission</h2>
            <p>
              At {process.env.NEXT_PUBLIC_COMPANY_NAME || "Our Company"}, we believe that every business deserves access to the capital they need to grow and succeed. Our mission is to provide fast, flexible, and transparent financing solutions that help businesses achieve their goals.
            </p>
            <p>
              We understand that traditional banks often make it difficult for small and medium-sized businesses to access the funding they need. That's why we've built a streamlined process that gets you the capital you need quickly, with minimal paperwork and maximum transparency.
            </p>
          </TextContent>
          <ImageWrapper>
            <StyledImage 
              src="/images/office_space_modern.jpg" 
              alt="Modern office space representing business growth and success"
            />
          </ImageWrapper>
        </ContentSection>

        <ValuesSection>
          <ValuesTitle>Our Core Values</ValuesTitle>
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </ValueCard>
            ))}
          </ValuesGrid>
        </ValuesSection>
        <FAQ />
      </PageContainer>
    </>
  );
} 