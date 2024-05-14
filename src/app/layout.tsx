import Navbar from "@/components/navbar";
import { Providers } from "@/components/providers";
import Wrapper from "@/components/wrapper";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Online Tasbeeh - Dhikr Counter - A simple counter to keep track of your dhikr online for free",
  description:
    "A simple counter to keep track of your dhikr online for free | Dhikr Counter | Tasbih Counter | Online Zikr Counter | Online Tasbeeh Counter | Tasbeeh Counter",
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
    "tasbih counter",
    "tasbih counter online",
    "tasbih counter app",
    "tasbih counter online free",
    "zikr counter",
    "zikr counter online",
    "zikr counter app",
    "zikr counter online free",
    "tasbeeh counter online",
    "tasbeeh counter app",
    "tasbeeh counter online free",
    "zikir counter",
    "online tasbeeh counter",
    "online tasbih",
    "online tasbeeh",
    "online counter tasbeeh | english",
    "counter tasbeeh online | english",
    "tasbeih online | english",
    "online tasbeh",
    "online tasbi",
    "counter online tasbeeh",
    "virtual tasbeeh",
    "digital tasbeeh",
    "digital tasbih",
    "tasbih online",
    "tasbih counter website",
  ],
  applicationName: "Online Tasbeeh - Dhikr Counter",
  other: {
    "google-site-verification": "IQBeldYJNpP7j8KEWOuYiHyndRJ1wTHs8-595lTCAvU",
    google: "notranslate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta http-equiv="Content-Language" content="en" />
      <body className="bg-white dark:bg-zinc-900">
        <Navbar />
        <Providers>
          <Wrapper>{children}</Wrapper>
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-3RBDN6VQGM" />
    </html>
  );
}
