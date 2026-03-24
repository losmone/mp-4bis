import { Inter } from "next/font/google";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import StyledComponentsRegistry from "../lib/Registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'IP-Tracker | MP4',
  description: 'Localisation d\'adresse IP moderne',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ 
          margin: 0, 
          padding: 0, 
          backgroundColor: '#0F172A', /* Fond bleu nuit très sombre */
          color: '#F8FAFC', /* Texte blanc cassé global */
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh' 
      }}>
        <StyledComponentsRegistry>
          <NavBar />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

