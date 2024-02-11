'use client';

import { redirect } from "next/navigation";

export default function Home() {

    function redirectToHomePage() {
        redirect('/');
    }

    return <h1 onClick={redirectToHomePage}>Move back!</h1>;
}