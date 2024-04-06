import AuthProvider from "@/src/components/providers/AuthProvider/AuthProvider";
import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });



export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
