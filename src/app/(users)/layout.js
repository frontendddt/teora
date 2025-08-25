
import { AnimationProvider } from '@/context/AnimationContext';
import { Archivo, Roboto, Roboto_Condensed} from 'next/font/google';

import "@/styles/globals.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from '@/components/bootstrap/BootstrapClient';

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer"; 

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Load and configure fonts
import 'swiper/css';
import 'swiper/css/navigation';

export const metadata = {
  title: 'Teora',
  icons: {
    icon: '/favicon.png',
  },
};

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'], 
  variable: '--font-archivo',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100',  '300', '400', '500', '600', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['100',  '300', '400', '600', '700'],
  variable: '--font-roboto-condensed',
});


// export default function RootLayout({ children }) {
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${roboto.variable} ${roboto_condensed.variable}`}> 
        <head>
           <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </head>
      <body>
        <AnimationProvider>  
          <Header/> 
              <main>
                    {children}
              </main> 
          <Footer/> 
       </AnimationProvider> 

         <BootstrapClient/>
      </body>
    </html>
    
  );
}

