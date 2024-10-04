import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech Talks",
  description: "Tech Talks is a technology based blog website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
