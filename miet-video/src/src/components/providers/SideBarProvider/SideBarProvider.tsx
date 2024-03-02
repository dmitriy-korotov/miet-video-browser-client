import { NextPage } from "next";

import SideBar from "@/src/components/ui/SideBar/SideBar";



const SideBarProvider: NextPage<{ children?: Readonly<React.ReactNode>, pageName: string }> = ({ children, pageName }) => {
    return (
        <>
            <SideBar pageName={pageName}/>
            {children}
        </>
    );
}

export default SideBarProvider;