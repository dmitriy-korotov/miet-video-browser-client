'use client';

import HeaderProvider from "@/src/components/providers/MainHeaderProvider/MainHeaderProvider";
import SideBarProvider from "@/src/components/providers/SideBarProvider/SideBarProvider";
import { AuthProvider } from "../../providers/AuthProvider/AuthProvider";
import useAuth from "@/src/hooks/UseAuth";



const HomePage = () => {
    //const { isLoggedIn, setIsLoggedIn } = useAuth();

    return (
        <HeaderProvider>
            <SideBarProvider pageName="Home">
                {/* isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Log out</button>
                : <button onClick={() => setIsLoggedIn(true)}>Log in</button> */}
            </SideBarProvider>
        </HeaderProvider>
    );
}

export default HomePage;