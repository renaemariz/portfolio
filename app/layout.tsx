import type { Metadata } from "next";
import "./globals.css";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Renae Mariz Cariño",
  description: "Portfolio",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Renae Mariz Cariño",
    description: "Frontend Developer",
    url: baseUrl,
    siteName: "Portfolio",
    images: [
      {
        url: `${baseUrl}/banner.png`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// app/layout.tsx
import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className=" min-h-full flex flex-col bg-white dark:bg-zinc-950 transition-colors duration-500">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
