import AlertProvider from "@/src/components/providers/AlertProvider/AlertProvider";
import AuthProvider from "@/src/components/providers/AuthProvider/AuthProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "MIET Video",
  description: "MIET Video service",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
        <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet" />
        <link rel="icon" href="/miet.svg"/>
      </head>
      <AlertProvider>
        <AuthProvider>
          <body className={inter.className}>
            {children}
          </body>
        </AuthProvider>
      </AlertProvider>
    </html>
  );
}
