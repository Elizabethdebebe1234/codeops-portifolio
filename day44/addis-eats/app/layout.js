import { Inter } from "next/font/google";

export const metadata = {
  title: {
    template: "%s · Addis Eats",
    default: "Addis Eats — Ethiopian food delivery in Addis Ababa",
  },

  description: "Discover Ethiopian dishes from kitchens across Addis Ababa.",

  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),

  openGraph: {
    title: "Addis Eats",
    description: "Discover Ethiopian dishes from kitchens across Addis Ababa.",
    siteName: "Addis Eats",
    type: "website",
    locale: "en_US",
  },
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
