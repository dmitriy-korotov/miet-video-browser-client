'use client';

import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

import "./upload.css";
import "./upload-form.scss";
import "./upload-preview-input.scss";
import "./upload-video-input.scss";
import "../lectures/subjects-list.css";
import "./title-input.scss";
import "./submit-button.css";



const inter = Inter({ subsets: ["latin"] });



export default function UploadLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Head>
            <Script type="text/javascript" src="/js/upload.js"></Script>
        </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}