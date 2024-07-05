import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Nav from "@/components/Nav";
import { createClient } from "@/utils/supabase/server";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <main className="min-h-screen flex flex-col items-center">
            {user && <Nav />}
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}


