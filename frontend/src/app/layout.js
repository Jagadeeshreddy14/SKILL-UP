"use client";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './globals.css'; // Import global styles if any
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <ClerkProvider>
    <html lang="en">
      <title>skillUp</title>
      <body>
        <Header  />
        {children}  {/* This will render the content of the current page */}
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
