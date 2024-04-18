import Navbar from "./components/Header";
import "./globals.css";
import Footer from "./components/Footer";



export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
     
      </body>
    </html>
  );
}
