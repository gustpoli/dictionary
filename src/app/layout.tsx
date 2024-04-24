import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import words from "@/data/words.json"
import LetterButton from "@/components/LetterButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dictionary - Gustavo Policarpo R Schuaste",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const letters: string[] = []

  words.forEach(word => {
    if(!letters.includes(word.english.split('')[0].toUpperCase()))
      letters.push(word.english.split('')[0].toUpperCase())
  })
  letters.sort(function (a, b) {
    if(a > b) return 1
    if(b > a) return -1 
    return 0
  })


  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} flex flex-col items-center min-h-screen bg-body`}>
        <section className="container flex flex-col flex-1 max-w-screen-lg bg-background ">
          <header className="flex flex-col justify-center items-center py-10 px-2 gap-5 w-full text-3xl">
            <h1 className=" font-medium underline underline-offset-[3px] decoration-primary">Dictionary</h1>
            <nav className="flex justify-center items-center gap-1">
              {letters.map(letter => 
                <LetterButton key={letter} letter={letter}></LetterButton>
              )}
            </nav>
          </header>
          {children}
          <footer className=" mt-auto p-4 pt-10 w-full text-center text-muted">
            <span className=" text-sm text-pretty">
              Developed by <a href="" className=" hover:underline">Gustavo Policarpo R Schuaste</a>
            </span>
          </footer>
        </section>
      </body>
    </html>
  );
}
