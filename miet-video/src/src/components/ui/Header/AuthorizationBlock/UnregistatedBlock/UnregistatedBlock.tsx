import Link from "next/link";

import HeaderButton from "./HeaderButton/HeaderButton";

import "@/src/components/ui/Header/AuthorizationBlock/UnregistatedBlock/UnregistatedBlock.css";



const UnregistratedBlockBlock = () => {
    return (
        <div id="registration-auth-block" className="content-in-line space-bettwen-content">
            <Link href={"/auth"}>
                <HeaderButton>Auth</HeaderButton>
            </Link>
            <Link href={"/registration"}>
                <HeaderButton>Registration</HeaderButton>
            </Link>
        </div>
    );
}

export default UnregistratedBlockBlock;