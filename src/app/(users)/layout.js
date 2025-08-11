
import { AnimationProvider } from '@/context/AnimationContext';
import { Archivo, Roboto, Roboto_Condensed} from 'next/font/google';
import Script from "next/script";
// import "./globals.css";
import "@/styles/globals.css"
import 'bootstrap/dist/css/bootstrap.min.css';
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




export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${roboto.variable} ${roboto_condensed.variable}`}> 
      <body>
        <AnimationProvider>  
          <Header/> 
              <main>
                    {children}
              </main> 
          <Footer/> 
       </AnimationProvider> 
        <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q"
            crossOrigin="anonymous"
            strategy="afterInteractive"/>
      </body>
    </html>
    
  );
}

