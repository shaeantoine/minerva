import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "H4 — Design Explorer",
  description:
    "Three explorations of how H4 might present itself to the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
