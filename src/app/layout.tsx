"use client";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import Sidebar from "@/partials/Sidebar";
import Providers from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased `}>
        <SessionProvider>
          <Providers>
            <div className="flex h-[100dvh] overflow-hidden">
              <Sidebar />
              <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {children}
              </div>
            </div>
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
