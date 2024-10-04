import type { Metadata } from "next";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";

export const metadata: Metadata = {
  title: "Tech Talks",
  description: "Tech Talks is a technology based blog website",
};

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="bg-slate-100">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
