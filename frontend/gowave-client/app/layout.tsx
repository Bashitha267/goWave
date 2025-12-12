// app/layout.tsx
import { HomeIcon, MenuIcon, User2Icon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoWave",
  description: "Mobile ride app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen  py-4 justify-center flex">
        <div className="w-full max-w-md  flex flex-col">
          <div className="flex-1 overflow-y-hidden">{children}</div>
          <nav className="mb-4 bg-white flex items-center justify-between h-16 px-4">
            <Link href="/">
              <div className="flex flex-col items-center">
                <HomeIcon size={34} color="black" className=""></HomeIcon>

                <div className="text-black ">Home</div>
              </div>
            </Link>

            <div>
              <Link href="/ongoing">
              <div className="flex justify-center flex-col items-center">
                <MenuIcon size={34} color="black" className=""></MenuIcon>
                <div className="text-black ">Ongoing</div>
               </div>
              </Link>
            </div>
            <div>
              <Link href="/profile">
              <div className="flex flex-col items-center">
                <User2Icon size={34} color="black" className=""></User2Icon>
                <div className="text-black ">Profile</div>
                </div>
              </Link>
            </div>
          </nav>
        </div>
      </body>
    </html>
  );
}
