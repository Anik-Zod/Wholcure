import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ApplicationModal from './components/ApplicationModal';
import ClientEffects from './components/ClientEffects';
import { ModalProvider } from './context/ModalContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-heading'
});

export const metadata: Metadata = {
  title: 'WholCure - Multi-Industry Excellence',
  description: 'WholCure is a multi-industry group operating in Real Estate, Construction, Technology, Marketing, Solar, Electronics, Packaging, Legal Services, and LMS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <ModalProvider>
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
          <ApplicationModal />
          <ClientEffects />
        </ModalProvider>
      </body>
    </html>
  );
}
