import Head from 'next/head';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - {process.env.NEXT_PUBLIC_COMPANY_NAME}</title>
      </Head>
      <ContactForm />
    </>
  );
} 