import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });



export default function UploadLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}