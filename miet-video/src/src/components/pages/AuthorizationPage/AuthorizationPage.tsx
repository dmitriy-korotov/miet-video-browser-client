import AlertProvider from "../../providers/AlertProvider/AlertProvider";
import OnlyLogoHeaderProvider from "../../providers/OnlyLogoHeaderProvider/OnlyLogoHeaderProvider";
import AuthorizationForm from "./AuthoruzationForm/AuthorizationForm";

import "@/src/assets/css/globals.css";
import "@/src/components/pages/AuthorizationPage/AuthorizationPage.css";



const RegistrationPage = () => {
    return (
        <AlertProvider>
            <OnlyLogoHeaderProvider>
                <div id="form-wrapper">
                    <AuthorizationForm/>
                </div>
            </OnlyLogoHeaderProvider>
        </AlertProvider>
    );
}

export default RegistrationPage;