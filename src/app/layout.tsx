import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans'; // Corrected import for GeistSans
import { GeistMono } from 'geist/font/mono'; // Corrected import for GeistMono
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';

const geistSans = GeistSans; // Use the imported object directly
const geistMono = GeistMono; // Use the imported object directly

export const metadata: Metadata = {
  title: 'AI Chat Companion',
  description: 'Your intelligent AI assistant for chat, image generation, and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
