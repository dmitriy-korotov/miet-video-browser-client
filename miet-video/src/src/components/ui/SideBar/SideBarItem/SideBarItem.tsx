import { NextPage } from "next";
import Link from "next/link";


import "@/src/components/ui/SideBar/SideBar.css";



interface Props {
    text: string,
    href: string,
    isActive?: boolean
}

const SideBarItem : NextPage<Props> = ({ text, href, isActive = false }) => {
    return (
        <Link href={href} className={isActive ? "active" : ""}>
            <span>{text}</span>
        </Link>
    );
}

export default SideBarItem;