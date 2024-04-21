import Navbar from "@/components/navbar";
import { Providers } from "@/components/providers";
import Wrapper from "@/components/wrapper";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhikr Counter - A simple counter to keep track of your dhikr",
  description: "A simple counter to keep track of your dhikr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-zinc-900">
        <Navbar />
        <Providers>
          <Wrapper>{children}</Wrapper>
        </Providers>
      </body>
    </html>
  );
}
