import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { colors } from '../styles/colors';

const ContactSection = styled.section`
  padding: 6rem 0;
  background: ${colors.bgLight};
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 2;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${colors.textPrimary};
  font-weight: 700;
`;

const ContactCard = styled.div`
  background: ${colors.bgWhite};
  border-radius: 15px;
  box-shadow: 0 5px 20px ${colors.shadows.light};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  background: ${colors.bgDark};
  color: ${colors.bgWhite};
  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem 1.5rem 2.5rem;
  gap: 1.5rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
  }
`;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 180px;
`;

const IconCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${colors.overlays.icon};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.08rem;
  line-height: 1.3;
`;

const HeaderLabel = styled.span`
  font-weight: 700;
  font-size: 0.95rem;
`;

const HeaderValue = styled.span`
  font-weight: 400;
  font-size: 0.95rem;
  word-break: break-all;
`;

const CardBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FormContainer = styled.div`
  padding: 3rem;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: ${colors.textPrimary};
  font-size: 0.95rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: ${colors.bgLighter};
  
  &:focus {
    outline: none;
    border-color: ${colors.goldPrimary};
    background: ${colors.bgWhite};
    box-shadow: 0 0 0 3px ${colors.shadows.goldFocus};
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  background: ${colors.bgLighter};
  
  &:focus {
    outline: none;
    border-color: ${colors.goldPrimary};
    background: ${colors.bgWhite};
    box-shadow: 0 0 0 3px ${colors.shadows.goldFocus};
  }
`;

const SubmitButton = styled(motion.button)`
  background: ${colors.goldPrimary};
  color: ${colors.textBlack};
  padding: 1.2rem 2.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 1rem;
  transition: all 0.3s ease;
  width: fit-content;
  align-self: center;
  
  &:hover {
    background: ${colors.goldHover};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${colors.shadows.goldButton};
  }
`;

const SuccessMessage = styled.div`
  background: ${colors.success};
  color: ${colors.bgWhite};
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
`;

const ErrorMessage = styled.div`
  background: ${colors.error};
  color: ${colors.bgWhite};
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
`;

// SVG ICONS
const LocationIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
);
const PhoneIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0 1 22 16.92z"/></svg>
);
const EmailIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
);
const ClockIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <ContactSection>
      <Container>
        <Title>Contact our sales team</Title>
        <ContactCard>
          <CardHeader>
            <HeaderItem>
              <IconCircle><LocationIcon /></IconCircle>
              <HeaderText>
                <HeaderLabel>Address</HeaderLabel>
                <HeaderValue>
                  {process.env.NEXT_PUBLIC_CONTACT_ADDRESS || "88 Pine Street"}<br/>
                  {process.env.NEXT_PUBLIC_CONTACT_CITY || "New York, NY 10005"}
                </HeaderValue>
              </HeaderText>
            </HeaderItem>
            <HeaderItem>
              <IconCircle><ClockIcon /></IconCircle>
              <HeaderText>
                <HeaderLabel>Hours of Operation</HeaderLabel>
                <HeaderValue>
                  {process.env.NEXT_PUBLIC_CONTACT_HOURS_WEEKDAYS || "Monday-Thursday: 9AM to 7PM"}<br/>
                  {process.env.NEXT_PUBLIC_CONTACT_HOURS_FRIDAY || "Friday: 9AM to 4PM"}
                </HeaderValue>
              </HeaderText>
            </HeaderItem>
            <HeaderItem>
              <IconCircle><PhoneIcon /></IconCircle>
              <HeaderText>
                <HeaderLabel>Phone</HeaderLabel>
                <HeaderValue>
                  {process.env.NEXT_PUBLIC_CONTACT_PHONE || "(917) 744-4376"}
                </HeaderValue>
              </HeaderText>
            </HeaderItem>
            <HeaderItem>
              <IconCircle><EmailIcon /></IconCircle>
              <HeaderText>
                <HeaderLabel>Email</HeaderLabel>
                <HeaderValue>
                  {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@mail.goldrockfinancial.com"}
                </HeaderValue>
              </HeaderText>
            </HeaderItem>
          </CardHeader>
          <CardBody>
            <FormContainer>
              <Form onSubmit={handleSubmit}>
                <InputGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                  />
                </InputGroup>

                <InputGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </InputGroup>

                <InputGroup>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </InputGroup>

                <InputGroup>
                  <Label htmlFor="message">Message</Label>
                  <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Enter your message"
                  />
                </InputGroup>

                <SubmitButton
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Info
                </SubmitButton>

                {status === 'success' && (
                  <SuccessMessage>
                    Thank you for your message! We'll get back to you soon.
                  </SuccessMessage>
                )}

                {status === 'error' && (
                  <ErrorMessage>
                    Sorry, there was an error sending your message. Please try again.
                  </ErrorMessage>
                )}
              </Form>
            </FormContainer>
            <MapContainer>
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(`${process.env.NEXT_PUBLIC_CONTACT_ADDRESS || '88 Pine St'}, ${process.env.NEXT_PUBLIC_CONTACT_CITY || 'New York, NY 10005'}`)}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </MapContainer>
          </CardBody>
        </ContactCard>
      </Container>
    </ContactSection>
  );
} 