import HeaderProvider from "@/src/components/providers/MainHeaderProvider/MainHeaderProvider";
import SideBarProvider from "@/src/components/providers/SideBarProvider/SideBarProvider";



const HomePage = () => {
    return (
        <HeaderProvider>
            <SideBarProvider pageName="Home">
                <div>Content</div>
            </SideBarProvider>
        </HeaderProvider>
    );
}

export default HomePage;