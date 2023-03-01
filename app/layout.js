import './globals.css';
import Header from '@/components/Header';
import { Montserrat } from '@next/font/google';
import Footer from '@/components/Footer';

// Montserrat font
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
