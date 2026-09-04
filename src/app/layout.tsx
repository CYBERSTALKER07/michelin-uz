import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";

export const metadata: Metadata = {
  title: "Michelin UZ - Premium Shinalar",
  description: "O'zbekistondagi eng premium Michelin shinalari.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className="antialiased selection:bg-brand-yellow selection:text-black">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
