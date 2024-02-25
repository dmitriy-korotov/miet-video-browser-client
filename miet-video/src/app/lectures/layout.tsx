import { Inter } from "next/font/google";

import "./lectures.css";
import "./subjects-list.css";
import "./lectures-table.css";
import "./lectures-table-item.css";



const inter = Inter({ subsets: ["latin"] });



export default function LecturesLayout({
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