import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { colors } from '../styles/colors';

const MenuButton = styled.button`
  background: none;
  border: none;
  color: ${colors.bgWhite};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${colors.overlays.mobile};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const MenuLink = styled(Link)`
  color: ${colors.bgWhite};
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: ${colors.goldPrimary};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${colors.bgWhite};
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  margin-left: 1.5rem;
  margin-top: 0.5rem;
`;

const SubMenuLink = styled(Link)`
  color: ${colors.goldPrimary};
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: 500;
  padding: 0.2rem 0;
  &:hover {
    color: ${colors.bgWhite};
  }
`;

const ApplyNowLink = styled(Link)`
  color: ${colors.goldPrimary};
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border: 2px solid ${colors.goldPrimary};
  border-radius: 6px;
  transition: all 0.2s;
  &:hover {
    background: ${colors.goldPrimary};
    color: ${colors.textPrimary};
  }
`;

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen((open) => !open);

  return (
    <>
      <MenuButton onClick={toggleMenu}>
        ☰
      </MenuButton>

      <AnimatePresence>
        {isOpen && (
          <MenuOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CloseButton onClick={toggleMenu}>×</CloseButton>
            <MenuLinks>
              <MenuLink href="/" onClick={toggleMenu}>Home</MenuLink>
              <MenuLink href="/about" onClick={toggleMenu}>About Us</MenuLink>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5em',
                  outline: 'none',
                  padding: 0,
                }}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={toggleServices}
              >
                Services
                <span style={{ color: colors.goldPrimary, fontSize: '1.2em', marginLeft: 4 }}>{servicesOpen ? '▲' : '▼'}</span>
              </button>
              {servicesOpen && (
                <SubMenu>
                  <SubMenuLink href="/term-loan" onClick={toggleMenu}>Term Loan</SubMenuLink>
                  <SubMenuLink href="/line-of-credit" onClick={toggleMenu}>Line of Credit</SubMenuLink>
                </SubMenu>
              )}
              <MenuLink href="/contact" onClick={toggleMenu}>Contact</MenuLink>
              <ApplyNowLink href="/apply" onClick={toggleMenu}>Apply Now</ApplyNowLink>
            </MenuLinks>
          </MenuOverlay>
        )}
      </AnimatePresence>
    </>
  );
} 