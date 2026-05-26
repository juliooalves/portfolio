import type { Metadata } from "next";
import { LoadProvider } from "@/contexts/load-context";
import { ThemeProvider } from "@/contexts/theme-context";
import { profile } from "@/lib/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: profile.metadataTitle,
  description: profile.metadataDescription,
  generator: profile.generator,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <LoadProvider>{children}</LoadProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
