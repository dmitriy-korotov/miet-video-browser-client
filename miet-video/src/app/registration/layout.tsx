import { Inter } from "next/font/google";

import "./registration-form.css";
import "./registration.css";



const inter = Inter({ subsets: ["latin"] });



export default function RegistrationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
