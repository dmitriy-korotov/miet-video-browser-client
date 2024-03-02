import FormWrapper from "@/src/components/ui/FormComponents/FormWrapper/FormWrapper";
import SubmitButton from "@/src/components/ui/FormComponents/SubmitButton/SubmitButton";
import TextField from "@/src/components/ui/FormComponents/TextField/TextField";

import "@/src/components/pages/RegistrationPage/RegistrationForm/RegistrationForm.css";



const RegistrationForm = () => {
    return (
        <FormWrapper formTitle="Registration">
            <TextField label="Input login:" type="text" name="login" placeholder="input login..."/>
            <TextField label="Input password:" type="pass" name="pass" placeholder="input password..."/>
            <TextField label="Repeat password:" type="pass" name="repass" placeholder="input password..."/>
            <div className="button-to-right">
                <SubmitButton>Submit</SubmitButton>
            </div>
        </FormWrapper>
    );
}

export default RegistrationForm;