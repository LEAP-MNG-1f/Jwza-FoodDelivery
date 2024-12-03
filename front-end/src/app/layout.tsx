"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FoodProvider } from "@/components/context/DataContext";
import { CategorizedFoodsProvider } from "@/components/context/CategorizedFoodsContext";
import { OrderProvider } from "@/components/context/OrderContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { push } = useRouter();
  const isAdmin = false;
  useEffect(() => {
    if (isAdmin) {
      push("/admin");
    } else {
      push("/");
    }
  }, [isAdmin]);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FoodProvider>
          <CategorizedFoodsProvider>
            <OrderProvider>{children}</OrderProvider>
          </CategorizedFoodsProvider>
        </FoodProvider>
      </body>
    </html>
  );
}
