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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export const viewport = {
  themeColor: '#F4F8FC',
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
