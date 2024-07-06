import { Inter } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Nav from "@/components/Nav";
import { createClient } from "@/utils/supabase/server";
import { Analytics } from '@vercel/analytics/react';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Trip Tracker",
  description: "Track your trips",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter  = Inter({subsets: ['latin']})

export default async function RootLayout({ children }: RootLayoutProps) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en" className={inter.className}>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <main className="min-h-screen flex flex-col items-center">
            {user && <Nav />}
            {children}
            <Analytics />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
