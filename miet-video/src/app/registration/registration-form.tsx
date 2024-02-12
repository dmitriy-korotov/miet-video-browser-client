import { useState, FormEvent } from 'react';

import LoginField from "./login-field";
import PasswordField from "./password-field";
import Button from './button';



const RegistrationForm = () => {

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

    return (
        <form method="POST" onSubmit={SubmitHandler}>
            <div className="form-wrapper">
                <div className='total-centralize-content main-color'>
                    <span>Registration</span>
                </div>
                <br/>
                <LoginField />
                <br/>
                <PasswordField placeholder="Input your password..."/>
                <br/>
                <PasswordField placeholder="Repeat your password..."/>
                <br/>
                <div className='content-from-right-to-left'>
                    <Button text="Submit"/>
                </div>
            </div>
        </form>
    );
} 

export default RegistrationForm;