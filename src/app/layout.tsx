import type { Metadata } from "next";
import { Inter, Sora, Orbitron } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParticleBackground from "@/components/ui/ParticleBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "Sigma Scripts | Premium Game Scripts",
  description: "Sigma Scripts provides premium undetected game scripts with lightning-fast delivery, advanced protection, and instant access for serious players.",
  icons: {
    icon: "/logos/logo.png",
    shortcut: "/logos/logo.png",
    apple: "/logos/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preload" as="video" href="/visuals/animation.mp4" type="video/mp4" />
      </head>
      <body className={`${inter.variable} ${sora.variable} ${orbitron.variable} font-sans antialiased bg-background text-white min-h-screen flex flex-col relative`}>
        <ParticleBackground />
        {/* Background Effects */}
        <div className="fixed inset-0 z-[-1] bg-noise"></div>
        <div className="fixed inset-0 z-[-3] bg-gradient-dark"></div>
        
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
