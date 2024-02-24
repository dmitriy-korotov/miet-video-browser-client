import { Inter } from "next/font/google";

import "./auth-form.css";
import "./auth.css";



const inter = Inter({ subsets: ["latin"] });



export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
