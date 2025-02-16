import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/common/Header/Header';
import HeaderDesktop from '@/components/display/Desktop/Header/HeaderDesktop';
import Footer from '@/components/common/Footer/Footer';

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
        <HeaderDesktop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
