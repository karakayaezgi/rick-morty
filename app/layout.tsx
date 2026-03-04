import type { Metadata } from "next";
import "./globals.css";
import Provider from "./components/provider/Provider";
import { ReactNode } from "react";
import { Roboto } from "next/font/google"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300","400","500","700"],
})

export const metadata: Metadata = {
  title: "Rick & Morty",
  description: "Rick & Morty explorer",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
