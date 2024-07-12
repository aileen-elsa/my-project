import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import Image from "next/image"; 
import brooks from "../public/brooks.png";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brooks Cafe",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className='flex bg-emerald-400 text-white py-4'>
            <div className="mx-6">
              <Image
                src={brooks}
                alt="Brooks"
                width={80}
                height={80}
              />
            </div>
            <div className="ml-4 py-6">
              <Link href='/home' className="hover:bg-slate-100 hover:rounded hover:text-black py-4 px-10 ease-in duration-300 mt-12" >
              Home</Link>
              <Link href='/menu' className='hover:bg-slate-100 hover:rounded hover:text-black py-4 px-10 mr-1 ease-in duration-300 mt-24'>Menu</Link>
              <Link href='/branches' className='hover:bg-slate-100 hover:rounded hover:text-black py-4 px-7 mr-3 ease-in duration-300 mt-24'>Branches</Link>
              <Link href='/contact' className='hover:bg-slate-100 hover:rounded hover:text-black py-4 px-6 ease-in duration-300'>Contact Us</Link>
            </div>
          
          </div>
          <div className="flex">
            <div className="flex h-screen">
                <nav className="w-[8rem] h-full bg-emerald-300 p-4">
                </nav>
              
              
            </div>
          
            <div>{children}</div>
          </div>
      </body>
    </html>
  );
}