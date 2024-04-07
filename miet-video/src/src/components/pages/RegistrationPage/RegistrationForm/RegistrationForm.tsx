'use client';

import { useForm, SubmitHandler } from "react-hook-form";

import FormWrapper from "@/src/components/ui/FormComponents/FormWrapper/FormWrapper";
import SubmitButton from "@/src/components/ui/FormComponents/SubmitButton/SubmitButton";
import TextField from "@/src/components/ui/FormComponents/TextField/TextField";

import { UserRegistrationFormData } from "@/src/types/user/User";
import { FormEventHandler, useState } from "react";
import { ValidateLogin, ValidatePassword, ValidateRepassword, ValidateUsername } from "@/src/scripts/validations/FormValidations";

import "@/src/components/pages/RegistrationPage/RegistrationForm/RegistrationForm.css";
import ErrorWindow from "@/src/components/ui/FormComponents/ErrorWindow/ErrorWindow";
import Checkbox from "@/src/components/ui/FormComponents/Checkbox/Checkbox";
import { UsersService } from "@/src/services/UsersService";
import useAuth from "@/src/hooks/UseAuth";
import { useRouter } from "next/navigation";



const RegistrationForm = () => {

    const [ loaded, setLoaded ] = useState(false);
    const [ checkboxState, setCheckboxState ] = useState(true);
    const { Auntificate } = useAuth();
    const { push } = useRouter();

    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        watch,
        formState: { errors },
      } = useForm<UserRegistrationFormData>();
    
    const onSubmit: SubmitHandler<UserRegistrationFormData> = async (data) => {
        data.checkbox = !checkboxState;
        if (!handleInput(data)) {
            return;
        }
        setLoaded(true);
        let result = await UsersService.RegistrateUser(data);
        setLoaded(false);
        if (!result.HasValue()) {
            alert(result.Error());
        } else {
            Auntificate(result.Value() || "");
            push("/");
        }
    }

    const handleInput = (data: UserRegistrationFormData): boolean => {
        let maybeError = ValidateUsername(data.username);
        if (maybeError.HasError()) {
            setError("username", { type: "custom", message: maybeError.GetErrorMessage() });
            clearErrors("password");    
            clearErrors("repassword");
            clearErrors("login");
            clearErrors("checkbox");
            return false;
        }
        clearErrors("username");
        
        maybeError = ValidateLogin(data.login);
        if (maybeError.HasError()) {
            setError("login", { type: "custom", message: maybeError.GetErrorMessage() });
            clearErrors("password");    
            clearErrors("repassword");
            clearErrors("username");
            clearErrors("checkbox");
            return false;
        }
        clearErrors("login");

        let result = ValidatePassword(data.password, watch("repassword"));
        if (result.error.HasError()) {
            setError("password", { type: "custom", message: result.error.GetErrorMessage() });
            clearErrors("login");   
            clearErrors("repassword");
            clearErrors("username");
            clearErrors("checkbox");
            return false;
        }
        if (result.isEquals) {
            clearErrors("repassword");
        }
        clearErrors("password");

        maybeError = ValidateRepassword(data.repassword, data.password);
        if (maybeError.HasError()) {
            setError("repassword", { type: "custom", message: maybeError.GetErrorMessage() });
            clearErrors("login");    
            clearErrors("password");
            clearErrors("username");
            clearErrors("checkbox");
            return false;
        }
        clearErrors("repassword");

        if (!data.checkbox) {
            setError("checkbox", { type: "custom", message: "Please select checkbox" });
            clearErrors("login");    
            clearErrors("password");
            clearErrors("username");
            clearErrors("repassword");
            return false;
        }
        clearErrors("checkbox");

        return true;
    }

    const onChange: FormEventHandler<HTMLFormElement> = (data) => {
        handleInput({ login: watch("login"), password: watch("password"),
                      repassword: watch("repassword"), username: watch("username"), checkbox: true });
    }

    return (
        <FormWrapper formTitle="Registration">
            <form onSubmit={handleSubmit(onSubmit)} onChange={onChange}>
                <ErrorWindow message={errors.username?.message}>
                    <TextField label="Input username:"
                            type="text" name="username"
                            placeholder="example : dmitry2004"
                            hasError={errors.username ? true : false}
                            args={ register("username") }/>    
                </ErrorWindow>
                <ErrorWindow message={errors.login?.message}>
                    <TextField label="Input login:"
                            type="text" name="login"
                            placeholder="example : 1234567"
                            hasError={errors.login ? true : false}
                            args={ register("login") }/>    
                </ErrorWindow>
                <ErrorWindow message={errors.password?.message}>
                    <TextField label="Input password:"
                            type="password" name="pass"
                            placeholder="input password..."
                            hasError={errors.password ? true : false}
                            args={ register("password") }/>
                </ErrorWindow>
                <ErrorWindow message={errors.repassword?.message}>
                    <TextField label="Repeat password:"
                            type="password" name="repass"
                            placeholder="input password..."
                            hasError={errors.repassword ? true : false}
                            args={ register("repassword") }/>
                </ErrorWindow>
                <ErrorWindow message={errors.checkbox?.message}>
                    <Checkbox text="accept user agreements" onClickHandler={() => {
                        setCheckboxState(!checkboxState);
                        console.log(checkboxState);
                    }}/>
                </ErrorWindow>
                <div className="button-to-right">
                    <SubmitButton type="submit">Submit</SubmitButton>
                </div>
            </form> 
        </FormWrapper>
    );
}

export default RegistrationForm;