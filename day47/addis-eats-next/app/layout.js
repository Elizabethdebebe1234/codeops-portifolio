
import { Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from "./CartContext";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Addis Eats | Ethiopian Restaurant",
  description: "Discover delicious Ethiopian food at Addis Eats.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
