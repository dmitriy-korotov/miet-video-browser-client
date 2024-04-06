import AuthProvider from "@/src/components/providers/AuthProvider/AuthProvider";
import RegistrationPage from "@/src/components/pages/RegistrationPage/RegistrationPage";



const Registration = () => {
    return <AuthProvider><RegistrationPage/></AuthProvider>;
}

export default Registration;