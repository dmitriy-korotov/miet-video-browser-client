import { NextPage } from "next";

import Header from "@/src/components/ui/Header/Header";



const OnlyLogoHeaderProvider: NextPage<{children?: Readonly<React.ReactNode>}> = ({ children }) => {
    return (
        <>
            <Header isOnlyLogo={true}/>
            {children}
        </>
    );
}

export default OnlyLogoHeaderProvider;