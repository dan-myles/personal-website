import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--fira-code",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Dan Myles",
  description: "My personal website :)",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
