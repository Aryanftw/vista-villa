import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Urbanist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Navigation from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Choose required weights
  variable: "--font-urbanist",  // Optional for CSS variables
});

export const metadata = {
  title: "VistaVilla",
  description: "Get your dream property",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation/>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
