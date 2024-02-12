import { Inter } from "next/font/google";
import "./registration-form.css";

const inter = Inter({ subsets: ["latin"] });



export default function RegistrationLayout({
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
