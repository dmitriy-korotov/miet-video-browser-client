import { NextPage } from "next";

import Header from "@/src/components/ui/Header/Header";



const HeaderProvider: NextPage<{children?: Readonly<React.ReactNode>}> = ({ children }) => {
    return (
        <>
            <Header isOnlyLogo={true}/>
            {children}
        </>
    );
}

export default HeaderProvider;