'use client';

import { useState, FormEvent } from 'react';

import LoginField from "./login-field";
import PasswordField from "./password-field";
import Button from './button';



const AuthForm = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const SubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true) // Set loading to true when the request starts
    
        try {
            const formData = new FormData(event.currentTarget);
            const response = await fetch('127.0.0.1/api/v1/users', {
                method: 'POST',
                body: formData,
        })
    
        // Handle response if necessary
        const data = await response.json()
        // ...
        } catch (error) {
            // Handle error if necessary
            console.error(error)
        } finally {
            setIsLoading(false) // Set loading to false when the request completes
        }
    }

    const RedirectToRegistration = () => {
        window.location.href="/registration";
    }

    return (
        <form method="POST" onSubmit={SubmitHandler}>
            <div className="form-wrapper">
                <div className='total-centralize-content auth-registration-font'>
                    <span>Authorization</span>
                </div>
                <br/>
                <LoginField />
                <br/>
                <PasswordField placeholder="Input your password..."/>
                <br/>
                <div className='content-from-right-to-left'>
                    <Button text="Submit"/>
                </div>
                <br/>
                <div onClick={RedirectToRegistration}
                     className='total-centralize-content ref-to-registrate-color'
                     style={{"fontSize": "0.9em"}}>
                    <span>Is not registrated yet?</span>
                </div>
            </div>
        </form>
    );
} 

export default AuthForm;