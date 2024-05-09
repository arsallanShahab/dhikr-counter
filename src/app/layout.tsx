import Navbar from "@/components/navbar";
import { Providers } from "@/components/providers";
import Wrapper from "@/components/wrapper";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Dhikr / Tasbeeh Counter - A simple counter to keep track of your dhikr online for free",
  description:
    "A simple counter to keep track of your dhikr online for free | Dhikr Counter | Tasbih Counter | Zikr Counter | Tasbeeh Counter",
  keywords: [
    "dhikr",
    "counter",
    "tasbih",
    "zikr",
    "zikir",
    "online dhikr counter",
    "dhikr counter",
    "dhikr counter online",
    "dhikr counter app",
    "dhikr counter online free",
    "dhikr counter online free",
    "tasbih counter",
    "tasbih counter online",
    "tasbih counter app",
    "tasbih counter online free",
    "tasbih counter online free",
    "zikr counter",
    "zikr counter online",
    "zikr counter app",
    "zikr counter online free",
    "zikr counter online free",
    "tasbeeh counter online",
    "tasbeeh counter app",
    "tasbeeh counter online free",
    "tasbeeh counter online free",
    "zikir counter",
    "zikir counter online",
    "zikir counter app",
    "zikir counter online free",
    "zikir counter online free",
    "zikr counter online",
    "zikr counter app",
    "zikr counter online free",
    "zikr counter online free",
    "zikir counter online",
    "zikir counter app",
    "zikir counter online free",
    "zikir counter online free",
    "zikr counter online",
    "zikr counter app",
    "zikr counter online free",
    "zikr counter online free",
    "zikir counter online",
    "zikir counter app",
    "zikir counter online free",
    "zikir counter online free",
    "zikr counter online",
    "zikr counter app",
    "zikr counter online free",
    "online tasbeeh counter",
    "tasbeeh counter online",
    "tasbih counter online",
    "online tasbih",
    "online tasbeeh",
    "online counter tasbeeh",
    "counter tasbeeh online",
    "tasbeih online",
    "online tasbeh",
    "online tasbi",
    "counter online tasbeeh",
    "virtual tasbeeh",
    "digital tasbeeh",
    "digital tasbih",
    "tasbi online",
    "tasbih counter website",
  ],
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
