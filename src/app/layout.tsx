import type { Metadata } from 'next';
import { Poppins, Montserrat, Playfair_Display, Cormorant_Garamond, Orbitron } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const orbitron = Orbitron({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://q-dat.com'),
  title: 'Q-DAT IT SOLUTIONS | Enterprise Data & IT Services',
  description:
    'Leading provider of Data Entry Services, Enterprise Data Management, Application Development, QA Testing, and IT Infrastructure solutions in Bangalore, India.',
  icons: {
    icon: '/assets/favicon-512.png',
  },
  openGraph: {
    title: 'Q-DAT IT SOLUTIONS | Smart IT Solutions For Modern Enterprises',
    description:
      'Transforming businesses through dependable data entry, custom ERP software, cloud infrastructure, and QA testing.',
    images: ['/assets/favicon-512.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable} ${playfair.variable} ${cormorant.variable} ${orbitron.variable}`}>
      <head>
        <link rel="icon" type="image/png" sizes="400x400" href="/assets/favicon-512.png" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
