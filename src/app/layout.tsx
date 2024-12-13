import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/common/Header/Header';

export const metadata: Metadata = {
  title: 'Missão Itapicuru',
  description: 'Home do site da ONG Missão Itapicuru',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
