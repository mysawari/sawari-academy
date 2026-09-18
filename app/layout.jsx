import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Build a Self-Drive Car Rental Business — Live Masterclass | MySawari",
  description:
    "A live 90-minute masterclass on how MySawari scaled a self-drive car rental business to ₹20 lakh+ in monthly revenue. Fleet economics, customer acquisition, operations and fraud prevention. ₹199.",
  openGraph: {
    title: "Build a Self-Drive Car Rental Business — Live Masterclass",
    description:
      "Real systems from scaling MySawari to ₹20L+/month. 90 minutes, live, ₹199.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
