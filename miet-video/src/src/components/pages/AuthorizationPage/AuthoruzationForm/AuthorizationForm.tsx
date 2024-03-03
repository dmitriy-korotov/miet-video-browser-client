import Link from "next/link";

import FormWrapper from "@/src/components/ui/FormComponents/FormWrapper/FormWrapper";
import SubmitButton from "@/src/components/ui/FormComponents/SubmitButton/SubmitButton";
import TextField from "@/src/components/ui/FormComponents/TextField/TextField";

import "@/src/components/pages/AuthorizationPage/AuthoruzationForm/AuthorizationForm.css";



const AuthorizationForm = () => {
    return (
        <FormWrapper formTitle="Authorization">
            <TextField label="Input login:" type="text" name="login" placeholder="input login..."/>
            <TextField label="Input password:" type="pass" name="pass" placeholder="input password..."/>
            <div className="button-to-right">
                <SubmitButton>Submit</SubmitButton>
            </div>
            <Link href="/registration" className="ref-to-registrate">
                <span>Is not registrated yet?</span>
            </Link>
        </FormWrapper>
    );
}

export default AuthorizationForm;