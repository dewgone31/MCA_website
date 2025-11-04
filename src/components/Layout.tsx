import styled from 'styled-components';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { useState, useRef, useEffect } from 'react';
import { colors } from '../styles/colors';
import { injectEnvToCss } from '../utils/envToCss';

const Header = styled.header`
  background: ${colors.bgDark};
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: ${process.env.NEXT_PUBLIC_LOGO_HEIGHT || "40px"};
  width: ${process.env.NEXT_PUBLIC_LOGO_WIDTH || "auto"};
  display: block;
  
  @media (max-width: 768px) {
    height: ${process.env.NEXT_PUBLIC_MOBILE_LOGO_HEIGHT || process.env.NEXT_PUBLIC_LOGO_HEIGHT || "32px"};
    width: ${process.env.NEXT_PUBLIC_MOBILE_LOGO_WIDTH || process.env.NEXT_PUBLIC_LOGO_WIDTH || "auto"};
  }
`;

const DesktopLogo = styled.img`
  height: ${process.env.NEXT_PUBLIC_LOGO_HEIGHT || "40px"};
  width: ${process.env.NEXT_PUBLIC_LOGO_WIDTH || "auto"};
  display: block;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileLogo = styled.img`
  height: ${process.env.NEXT_PUBLIC_MOBILE_LOGO_HEIGHT || process.env.NEXT_PUBLIC_LOGO_HEIGHT || "32px"};
  width: ${process.env.NEXT_PUBLIC_MOBILE_LOGO_WIDTH || process.env.NEXT_PUBLIC_LOGO_WIDTH || "auto"};
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${colors.bgWhite};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: ${colors.goldPrimary};
  }
`;

const ApplyNowButton = styled(Link)`
  background: transparent;
  color: ${colors.goldPrimary};
  border: 2px solid ${colors.goldPrimary};
  padding: 0.7rem 1.5rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 2px 8px ${colors.shadows.standard};
  transition: background 0.2s, color 0.2s;
  text-decoration: none;
  margin-left: 2rem;
  display: none;
  @media (min-width: 769px) {
    display: inline-block;
  }
  &:hover {
    background: ${colors.goldPrimary};
    color: ${colors.textPrimary};
  }
`;

const MobileApplyNowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1rem 0 0 0;
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileApplyNowButton = styled(Link)`
  background: transparent;
  color: ${colors.goldPrimary};
  border: 2px solid ${colors.goldPrimary};
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 2px 8px ${colors.shadows.standard};
  transition: background 0.2s, color 0.2s;
  text-decoration: none;
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    background: ${colors.goldPrimary};
    color: ${colors.textPrimary};
  }
`;

const MobileMenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Footer = styled.footer`
  background: ${colors.bgDark};
  color: ${colors.bgWhite};
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: ${colors.goldPrimary};
    margin-bottom: 1rem;
  }
`;

const FooterLink = styled(Link)`
  color: ${colors.bgWhite};
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  
  &:hover {
    color: ${colors.goldPrimary};
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  color: ${colors.bgWhite};
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.4em;
  line-height: 1.5;
  padding: 0;
  height: 100%;
  margin: 0;
  &:hover, &:focus {
    color: ${colors.goldPrimary};
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  min-width: 180px;
  background: ${colors.bgDark};
  border-radius: 10px;
  box-shadow: 0 4px 16px ${colors.shadows.dropdown};
  z-index: 100;
  padding: 0.5rem 0;
  display: none;
  ${DropdownWrapper}:hover &,
  ${DropdownWrapper}:focus-within & {
    display: block;
  }
`;

const DropdownItem = styled(Link)`
  display: block;
  color: ${colors.bgWhite};
  padding: 0.7rem 1.5rem;
  text-decoration: none;
  font-weight: 500;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  &:hover, &:focus {
    background: ${colors.goldPrimary};
    color: ${colors.textPrimary};
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLButtonElement>(null);

  // Inject environment variables into CSS on client-side
  useEffect(() => {
    injectEnvToCss();
  }, []);

  return (
    <>
      <Header>
        <Nav>
          <LogoContainer>
            <Link href="/" aria-label="Goldrock Home">
              <DesktopLogo 
                src={process.env.NEXT_PUBLIC_LOGO_PATH || "/images/goldrock_logo_transparent.svg"} 
                alt={process.env.NEXT_PUBLIC_COMPANY_NAME ? `${process.env.NEXT_PUBLIC_COMPANY_NAME} Logo` : "Company Logo"} 
              />
              <MobileLogo 
                src={process.env.NEXT_PUBLIC_MOBILE_LOGO_PATH || process.env.NEXT_PUBLIC_LOGO_PATH || "/images/goldrock_logo_transparent.svg"} 
                alt={process.env.NEXT_PUBLIC_COMPANY_NAME ? `${process.env.NEXT_PUBLIC_COMPANY_NAME} Logo` : "Company Logo"} 
              />
            </Link>
          </LogoContainer>
          <MobileApplyNowButton href="/apply">Apply Now</MobileApplyNowButton>
          <NavLinks>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <DropdownWrapper>
              <DropdownButton
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
                ref={dropdownRef}
              >
                Services
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: 4}}>
                  <path d="M6 8L10 12L14 8" stroke={colors.goldPrimary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </DropdownButton>
              <DropdownMenu>
                <DropdownItem href="/term-loan">Term Loan</DropdownItem>
                <DropdownItem href="/line-of-credit">Line of Credit</DropdownItem>
              </DropdownMenu>
            </DropdownWrapper>
            <NavLink href="/contact">Contact</NavLink>
          </NavLinks>
          <ApplyNowButton href="/apply">Apply Now</ApplyNowButton>
          <MobileMenuContainer>
            <MobileMenu />
          </MobileMenuContainer>
        </Nav>
        <MobileApplyNowWrapper>
          <ApplyNowButton href="/apply">Apply Now</ApplyNowButton>
        </MobileApplyNowWrapper>
      </Header>

      <main style={{ marginTop: '80px' }}>
        {children}
      </main>

      <Footer>
        <FooterContent>
          <FooterSection>
            <h3>Contact Us</h3>
            <p>{process.env.NEXT_PUBLIC_CONTACT_ADDRESS || "88 Pine Street"}</p>
            <p>{process.env.NEXT_PUBLIC_CONTACT_CITY || "New York, NY 10005"}</p>
            <p>Phone: {process.env.NEXT_PUBLIC_CONTACT_PHONE || "(917) 744-4376"}</p>
            <p>Email: {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@mail.goldrockfinancial.com"}</p>
          </FooterSection>
          
          <FooterSection>
            <h3>Quick Links</h3>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterSection>
          
          <FooterSection>
            <h3>Hours of Operation</h3>
            <p>{process.env.NEXT_PUBLIC_CONTACT_HOURS_WEEKDAYS || "Monday-Thursday: 9AM to 7PM"}</p>
            <p>{process.env.NEXT_PUBLIC_CONTACT_HOURS_FRIDAY || "Friday: 9AM to 4PM"}</p>
          </FooterSection>
        </FooterContent>
      </Footer>
    </>
  );
} 