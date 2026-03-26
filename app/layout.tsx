import type { Metadata } from "next";
import { Geist, Geist_Mono, Carattere, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const carattere = Carattere({
  variable: "--font-carattere",
  subsets: ["latin"],
  weight: "400",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: "OceanOfPDF — Your One Stop",
  description: "One doorway. A universe of books.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${carattere.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
