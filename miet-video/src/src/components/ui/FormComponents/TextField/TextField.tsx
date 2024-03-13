import { NextPage } from "next";

import "@/src/assets/css/globals.css";
import "@/src/components/ui/FormComponents/TextField/TextField.css";



interface Props {
    label: string
    type: string,
    name: string,
    placeholder?: string,
    hasError?: boolean
    args?: any
}



const TextField: NextPage<Props> = ({ label, type, name, placeholder = "", hasError = false, args}) => {
    return (
        <>
            <label htmlFor={name} className="form-label-wrapper">
                <span className={hasError ? "form-label has-error" : "form-label no-error"}>{label}</span>
            </label>
            <input className={hasError ? "form-text-field-style main-transition has-error" :
                                         "form-text-field-style main-transition no-error"}
                   id={name} name={name} type={type}
                   placeholder={placeholder} { ...args }
                   autoComplete="off"></input>
        
        </>
    );
}

export default TextField;