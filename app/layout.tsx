import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const grotesk = localFont({
  src: "./fonts/SpaceGrotesk-Variable.ttf",
  variable: "--font-grotesk",
  weight: "300 700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diamond Manufacturing Industry — PVC Pipes, Jammu",
  description:
    "Diamond Manufacturing Industry supplies PVC pipes and pipe fittings from our unit in Sidco, Bari Brahmana, Jammu. Multi-product range, genuine pricing, 18+ five-star reviews.",
  keywords: [
    "PVC pipe manufacturer Jammu",
    "PVC pipes Bari Brahmana",
    "pipe fittings Jammu",
    "Sidco Jammu pipes",
    "Diamond Manufacturing Industry",
  ],
  openGraph: {
    title: "Diamond Manufacturing Industry — PVC Pipes",
    description:
      "Multi-product PVC pipe manufacturing in Sidco, Bari Brahmana. Genuine pricing, wide range, trusted across Jammu.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={grotesk.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
