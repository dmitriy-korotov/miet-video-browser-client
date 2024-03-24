import HeaderProvider from "../../providers/MainHeaderProvider/MainHeaderProvider";
import SideBarProvider from "../../providers/SideBarProvider/SideBarProvider";

import "@/src/components/pages/NotFoundPage/NotFoundPage.css";



const NotFoundPage = () => {
    return (
        <HeaderProvider>
            <SideBarProvider pageName="Not found">
                <div className="not-found-wrapper">
                    <div className="not-found-image">

                    </div>
                </div>
            </SideBarProvider>
        </HeaderProvider>
    );
}

export default NotFoundPage;