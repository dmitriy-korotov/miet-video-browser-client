import { NextPage } from "next";



interface Props {
    placeholder: string;
}

const PasswordField: NextPage<Props> = (props) => {

    const { placeholder } = props;

    return (
        <label form="pass">
            <input className="form-text-field-style main-transition" name="pass" type="password" placeholder={placeholder}></input>
        </label>
    );
}

export default PasswordField;