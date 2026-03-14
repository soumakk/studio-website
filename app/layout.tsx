import type { Metadata } from "next";
import { Outfit, Bebas_Neue } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebasNeue",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Soumak — 3D Product Visualization Artist",
  description:
    "World-class 3D product visualization for brands that demand extraordinary. Modeling, lighting, animation & art direction.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${bebasNeue.variable} ${outfit.variable}`}
    >
      <body className="bg-ink text-stone overflow-x-hidden font-body">
        {children}
      </body>
    </html>
  );
}
