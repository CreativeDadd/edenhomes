// app/layout.js
import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css'
export const metadata = {
  title: 'Real Estate App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header  />
        {children}
        <Footer  />
      </body>
    </html>
  );
}
