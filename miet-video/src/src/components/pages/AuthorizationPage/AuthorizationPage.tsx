import OnlyLogoHeaderProvider from "../../providers/OnlyLogoHeaderProvider/OnlyLogoHeaderProvider";
import AuthorizationForm from "./AuthoruzationForm/AuthorizationForm";

import "@/src/assets/css/globals.css";
import "@/src/components/pages/AuthorizationPage/AuthorizationPage.css";



const RegistrationPage = () => {
    return (
        <OnlyLogoHeaderProvider>
            <div id="form-wrapper">
                <AuthorizationForm/>
            </div>
        </OnlyLogoHeaderProvider>
    );
}

export default RegistrationPage;