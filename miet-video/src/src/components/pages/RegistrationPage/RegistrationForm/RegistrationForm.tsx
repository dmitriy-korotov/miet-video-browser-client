'use client';

import { useForm, SubmitHandler } from "react-hook-form";

import FormWrapper from "@/src/components/ui/FormComponents/FormWrapper/FormWrapper";
import SubmitButton from "@/src/components/ui/FormComponents/SubmitButton/SubmitButton";
import TextField from "@/src/components/ui/FormComponents/TextField/TextField";

import { UserRegistrationFormData } from "@/src/types/user/User";
import { FormEventHandler } from "react";
import { ValidateLogin, ValidatePassword, ValidateRepassword } from "@/src/scripts/validations/FormValidations";

import "@/src/components/pages/RegistrationPage/RegistrationForm/RegistrationForm.css";
import ErrorWindow from "@/src/components/ui/FormComponents/ErrorWindow/ErrorWindow";



const RegistrationForm = () => {

    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        watch,
        formState: { errors },
      } = useForm<UserRegistrationFormData>();
    
    const onSubmit: SubmitHandler<UserRegistrationFormData> = (data) => {
        if (!handleInput(data)) {
            return;
        }
        console.log(data);
    }

    const handleInput = (data: UserRegistrationFormData): boolean => {
        let maybeError = ValidateLogin(data.login);
        if (maybeError.HasError()) {
            setError("login", { type: "custom", message: maybeError.GetErrorMessage() });
            return false;
        }
        clearErrors("login");

        let result = ValidatePassword(data.password, watch("repassword"));
        if (result.error.HasError()) {
            setError("password", { type: "custom", message: result.error.GetErrorMessage() });
            return false;
        }
        if (result.isEquals) {
            clearErrors("repassword");
        }
        clearErrors("password");

        maybeError = ValidateRepassword(data.repassword, data.password);
        if (maybeError.HasError()) {
            setError("repassword", { type: "custom", message: maybeError.GetErrorMessage() });
            return false;
        }
        clearErrors("repassword");

        return true;
    }

    const onChange: FormEventHandler<HTMLFormElement> = (data) => {
        handleInput({ login: watch("login"), password: watch("password"), repassword: watch("repassword") });
    }

    return (
        <FormWrapper formTitle="Registration">
            <form onSubmit={handleSubmit(onSubmit)} onChange={onChange}>
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
                {errors.repassword && (
                    <span role='alert' className='input-error'>
                        {errors.repassword?.message}
                    </span>
                )}
                <div className="button-to-right">
                    <SubmitButton type="submit">Submit</SubmitButton>
                </div>
            </form> 
        </FormWrapper>
    );
}

export default RegistrationForm;