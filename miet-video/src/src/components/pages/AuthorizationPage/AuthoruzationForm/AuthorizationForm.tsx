'use client';

import Link from "next/link";

import { useForm, SubmitHandler } from "react-hook-form";
import { FormEventHandler } from "react";

import FormWrapper from "@/src/components/ui/FormComponents/FormWrapper/FormWrapper";
import SubmitButton from "@/src/components/ui/FormComponents/SubmitButton/SubmitButton";
import TextField from "@/src/components/ui/FormComponents/TextField/TextField";

import { UserAuthorizationFormData } from "@/src/types/user/User";
import { ValidateLogin, ValidatePassword } from "@/src/scripts/validations/FormValidations";

import "@/src/components/pages/AuthorizationPage/AuthoruzationForm/AuthorizationForm.css";
import ErrorWindow from "@/src/components/ui/FormComponents/ErrorWindow/ErrorWindow";



const AuthorizationForm = () => {

    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        watch,
        formState: { errors },
      } = useForm<UserAuthorizationFormData>();

      const onSubmit: SubmitHandler<UserAuthorizationFormData> = (data) => {
        if (!handleInput(data)) {
            return;
        }
        console.log(data);
    }

    const handleInput = (data: UserAuthorizationFormData): boolean => {
        let maybeError = ValidateLogin(data.login);
        if (maybeError.HasError()) {
            setError("login", { type: "custom", message: maybeError.GetErrorMessage() });
            clearErrors("password");
            return false;
        }
        clearErrors("login");

        let result = ValidatePassword(data.password);
        if (result.error.HasError()) {
            setError("password", { type: "custom", message: result.error.GetErrorMessage() });
            clearErrors("login");
            return false;
        }
        clearErrors("password");

        return true;
    }

    const onChange: FormEventHandler<HTMLFormElement> = (data) => {
        handleInput({ login: watch("login"), password: watch("password")});
    }

    return (
        <FormWrapper formTitle="Authorization">
            <form onSubmit={handleSubmit(onSubmit)} onChange={onChange}>
                <ErrorWindow message={errors.login?.message}>
                    <TextField label="Input login:"
                                type="text" name="login"
                                placeholder="input login..."
                                hasError={errors.login ? true : false}
                                args={ register("login") }/>
                </ErrorWindow>
                <ErrorWindow message={errors.password?.message}>
                    <TextField label="Input password:"
                            type="password" name="password"
                            placeholder="input password..."
                            hasError={errors.password ? true : false}
                            args={ register("password") }/>
                </ErrorWindow>
                <div className="button-to-right">
                    <SubmitButton type="submit">Submit</SubmitButton>
                </div>
                <Link href="/registration" className="ref-to-registrate">
                    <span>Is not registrated yet?</span>
                </Link>
            </form>
        </FormWrapper>
    );
}

export default AuthorizationForm;