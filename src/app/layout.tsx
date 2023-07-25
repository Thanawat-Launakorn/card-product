import "./globals.css";
import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import Layout from "@/components/layout";
import AppProduct from "@/providers/provider-product";
import AppCart from "@/providers/provider-cart";

const prompt = Prompt({
  weight: "300",
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Shop",
  description: "For test to get job",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={{ backgroundColor: "#FFFFFF" }}
      className={prompt.className}
    >
      <body>
        <AppProduct>
          <AppCart>
            <Layout>{children}</Layout>
          </AppCart>
        </AppProduct>
      </body>
    </html>
  );
}
