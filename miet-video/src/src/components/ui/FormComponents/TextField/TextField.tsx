import { NextPage } from "next";

import "@/src/components/ui/FormComponents/TextField/TextField.css";



interface Props {
    label: string
    type: string,
    name: string,
    placeholder?: string
}



const TextField: NextPage<Props> = ({ label, type, name, placeholder = ""}) => {
    return (
        <>
            <label htmlFor={name} className="form-label-wrapper">
                <span className="form-label">{label}</span>
            </label>
            <input className="form-text-field-style main-transition"
                   id={name} name={name} type={type}
                   placeholder={placeholder}></input>
        
        </>
    );
}

export default TextField;