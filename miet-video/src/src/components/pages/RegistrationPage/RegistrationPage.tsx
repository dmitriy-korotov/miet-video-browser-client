import AlertProvider from "../../providers/AlertProvider/AlertProvider";
import OnlyLogoHeaderProvider from "../../providers/OnlyLogoHeaderProvider/OnlyLogoHeaderProvider";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

import "@/src/assets/css/globals.css";
import "@/src/components/pages/RegistrationPage/RegistrationPage.css";



const RegistrationPage = () => {
    return (
        <OnlyLogoHeaderProvider>
            <div id="form-wrapper">
                <RegistrationForm/>
            </div>
        </OnlyLogoHeaderProvider>
    );
}

export default RegistrationPage;