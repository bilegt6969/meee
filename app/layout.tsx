import type { Metadata } from "next";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import App from '../app/Components/Navbar/App'
import Footer from '../app/Components/Footer'
import { Inter, League_Spartan } from 'next/font/google';
import { cookies } from "next/headers";

const inter = Inter({
  subsets: ['cyrillic'],
  weight: ['400', '700'],
  display: 'swap',
});

const leagueSpartan = League_Spartan({
  subsets: ['latin-ext'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ХАСУ ДАЯН",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const currentLanguage = cookieStore.get("language")?.value ?? "MNG";

  return (
    <html lang={currentLanguage === "MNG" ? "mn" : "en"} className={currentLanguage === "MNG" ? inter.className : leagueSpartan.className}>
      <link rel="icon" href="/LogoKhasu.png" sizes="any" />
      <body>
        <App />
        <NextUIProvider>
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
