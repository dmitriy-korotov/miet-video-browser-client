import { Inter } from "next/font/google";

import "../player.css";
import "./video-information-part.css";
import "./video-list.css";
import "./lectures.css";

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