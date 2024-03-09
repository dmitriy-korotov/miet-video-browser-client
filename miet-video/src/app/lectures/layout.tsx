import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });



export default function LecturesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}