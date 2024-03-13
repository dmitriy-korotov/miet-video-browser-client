import { NextPage } from "next";
import SideBarItem from "./SideBarItem/SideBarItem";
import SideBarButton from "./SideBarButton/SideBarButton";

import "@/src/components/ui/SideBar/SideBar.css";



interface Props {
    pageName: string
}



const SideBar: NextPage<Props> = ({ pageName }) => {
    return (
        <div className="sidebar-body">
            <div>
                <SideBarButton />
                <div className="sidebar">
                    <SideBarItem text={pageName} href="#" isActive={false}/>
                    <SideBarItem text="Lectures" href="/lectures"/>
                    <SideBarItem text="Upload" href="/upload"/>
                    <SideBarItem text="About" href="/about"/>
                    <SideBarItem text="Contacts" href="/contacts"/>
                </div>
            </div>  
        </div>
    );
}

export default SideBar;