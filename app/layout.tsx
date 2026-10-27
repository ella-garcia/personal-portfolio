import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ella Garcia — Forward Deployed Engineer & Strategist",
  description:
    "Ex-Google. Technical product and deployment lead. Building AI and data products from discovery to live deployment. Currently completing a dual MS CS and MBA at IE University in Madrid.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <div id="main-content">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
