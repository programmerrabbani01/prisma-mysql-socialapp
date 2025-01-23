import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Define Exo2 font family
const Exo2 = localFont({
  src: [
    {
      path: "./fonts/Exo2-VariableFont_wght.ttf",
      weight: "100",
      style: "Thin",
    },
    {
      path: "./fonts/Exo2-VariableFont_wght.ttf",
      weight: "200",
      style: "ExtraLight",
    },
    {
      path: "./fonts/Exo2-VariableFont_wght.ttf",
      weight: "300",
      style: "Light",
    },
    {
      path: "./fonts/Exo2-VariableFont_wght.ttf",
      weight: "400",
      style: "Regular",
    },
    {
      path: "./fonts/Exo2-VariableFont_wght.ttf",
      weight: "500",
      style: "Medium",
    },
    {
      path: "./fonts/Exo2-VariableFont_wght.ttf",
      weight: "600",
      style: "SemiBold",
    },
    {
      path: "./fonts/Exo2-VariableFont_wght.ttf",
      weight: "700",
      style: "Bold",
    },
    {
      path: "./fonts/Exo2-VariableFont_wght.ttf",
      weight: "800",
      style: "ExtraBold",
    },
    {
      path: "./fonts/Exo2-VariableFont_wght.ttf",
      weight: "900",
      style: "Black",
    },
  ],
  variable: "--font-exo2",
});

// Define Fira Code font family
const FiraCode = localFont({
  src: [
    {
      path: "./fonts/FiraCode-VariableFont_wght.ttf",
      weight: "300",
      style: "Light",
    },
    {
      path: "./fonts/FiraCode-VariableFont_wght.ttf",
      weight: "400",
      style: "Regular",
    },
    {
      path: "./fonts/FiraCode-VariableFont_wght.ttf",
      weight: "500",
      style: "Medium",
    },
    {
      path: "./fonts/FiraCode-VariableFont_wght.ttf",
      weight: "600",
      style: "SemiBold",
    },
    {
      path: "./fonts/FiraCode-VariableFont_wght.ttf",
      weight: "700",
      style: "Bold",
    },
  ],
  variable: "--font-firaCode",
});

export const metadata: Metadata = {
  title: "Social Media App",
  description: "This Social Media App Created By Using Next.Js, Prisma & MySQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Exo2.variable} ${FiraCode.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
