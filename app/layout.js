// // app/layout.js
// import { SessionProvider } from 'next-auth/react';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import './globals.css';
// import ClientSessionProvider from './components/ClientSessionProvider';
// export const metadata = {
//   title: 'Real Estate App',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-100">
//         <Header  />
//         <ClientSessionProvider>
//         {children}
//         </ClientSessionProvider>
//         <Footer  />
//       </body>
//     </html>
//   );
// }










// app/layout.js
import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';
import ClientSessionProvider from './components/ClientSessionProvider';

export const metadata = {
  title: 'Real Estate App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <ClientSessionProvider> {/* Wrapping the entire app */}
          <Header />
          {children}
          <Footer />
        </ClientSessionProvider>
      </body>
    </html>
  );
}
