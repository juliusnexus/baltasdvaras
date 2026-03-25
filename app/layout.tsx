import type {Metadata} from 'next';
import { Domine } from 'next/font/google';
import './globals.css'; // Global styles

const domine = Domine({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-domine',
});

export const metadata: Metadata = {
  title: 'My Google AI Studio App',
  description: 'My Google AI Studio App',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning className={domine.variable}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

