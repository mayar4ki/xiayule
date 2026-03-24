import { Figtree, Inter } from "next/font/google";
import type { Metadata } from "next/types";
import { JotaiProvider } from "~/providers/jotai-provider";
import { QueryClientProvider } from "~/providers/query-client-provider";
import { ThemeProvider } from "~/providers/theme-provider";
import { AppToaster } from "~/providers/toaster-provider";
import { TooltipProvider } from "~/providers/tooltip-provider";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "PropWise CRM",
  description: "PropWise CRM Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${figtree.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <QueryClientProvider>
            <JotaiProvider>
              <TooltipProvider>{children}</TooltipProvider>
              <AppToaster />
            </JotaiProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
