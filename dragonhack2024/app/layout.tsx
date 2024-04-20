import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tutorstvo",
  description: "Platforma za povezovanje Studentov in tutorjev!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
        <Navbar></Navbar>
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer></Footer>
        </body>
      </UserProvider>
    </html>
  );
}
