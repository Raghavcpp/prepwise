import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-Mona_Sans-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI-Powered platform for preparing for Mock Interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-lt-installed="true>
      <body className={`${monaSans.className} antialiased pattern`}>
        {children}
      </body>
    </html>
  );
}
