import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";

//Import the header and footer to be at the top and bottom of every page
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const inter = Exo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "aConfusedWebsite",
  description: "Created by aConfusedAmpwavez",
};

//Set the header and footer at the top and bottom of every page
export default function RootLayout({children}: {children: React.ReactNode;}) {
  return (
    <html lang="en" className = {inter.className}>
      <body>
        <header>
          <Header/>
        </header>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
