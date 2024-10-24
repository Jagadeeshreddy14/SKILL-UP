import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './globals.css'; // Import global styles if any

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}  {/* This will render the content of the current page */}
        <Footer />
      </body>
    </html>
  );
}
