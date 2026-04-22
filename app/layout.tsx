import type {Metadata} from 'next';
import { Prata, Montserrat } from 'next/font/google';
import './globals.css'; // Global styles

const prata = Prata({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-prata',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Baltas Dvaras | Astrologinės konsultacijos',
  description: 'Atraskite savo asmeninį žvaigždėlapį ir potencialą per profesionalią astrologinę analizę Baltame Dvare.',
  keywords: ['astrologija', 'horoskopai', 'astrologinė konsultacija', 'žvaigždėlapis', 'Baltas Dvaras'],
  authors: [{ name: 'Baltas Dvaras' }],
  openGraph: {
    title: 'Baltas Dvaras | Astrologinės konsultacijos',
    description: 'Atraskite savo asmeninį žvaigždėlapį ir potencialą per profesionalią astrologinę analizę Baltame Dvare.',
    type: 'website',
  },
};

import Footer from './_components/Footer';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="lt" suppressHydrationWarning className={`${prata.variable} ${montserrat.variable}`}>
      <body suppressHydrationWarning>
        {children}
        <Footer />
      </body>
    </html>
  );
}

