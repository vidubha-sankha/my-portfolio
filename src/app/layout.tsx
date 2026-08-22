import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundSystem from "@/components/BackgroundSystem";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vidubha Sankha | Aspiring Data Analyst",
  description: "Portfolio of Vidubha Sankha, an aspiring Data Analyst specializing in data analysis, machine learning, data visualization, Python, SQL, Power BI, and technology solutions.",
  keywords: ["Data Analyst", "Data Analysis", "Python", "SQL", "Power BI", "Machine Learning", "Data Visualization", "Sri Lanka", "Data Science", "Vidubha Sankha"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen bg-background text-foreground flex flex-col relative">
        <ScrollProgress />
        <BackgroundSystem />
        <div className="relative z-0 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
