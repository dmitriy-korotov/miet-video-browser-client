import HeaderProvider from "../../providers/MainHeaderProvider/MainHeaderProvider";

import "@/src/components/pages/NotAuthorizatedPage/NotAuthorizatedPage.css";



const NotAuthorizatedPage = () => {
    return (
        <HeaderProvider>
            <div className="unautorizate-wrapper">
                <span>You are not authorizated</span>
            </div>
        </HeaderProvider>
    );
}

export default NotAuthorizatedPage;