import type { Metadata } from "next";
import { Inter, Playfair_Display, Carattere, Instrument_Serif } from "next/font/google";
import "./globals.css";

// We need specific weights, especially '900' (Black) for the huge title
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "900"]
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ['normal', 'italic']
});

const carattere = Carattere({
  subsets: ["latin"],
  variable: "--font-carattere",
  weight: "400"
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "OceanOfPDF",
  description: "Pixel perfect replication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${carattere.variable} ${instrumentSerif.variable} antialiased bg-[#fefefe]`}>
        {children}
      </body>
    </html>
  );
}
