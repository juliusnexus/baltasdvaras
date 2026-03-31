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
  title: 'My Google AI Studio App',
  description: 'My Google AI Studio App',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${prata.variable} ${montserrat.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

