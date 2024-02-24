import { NextPage } from "next";



interface Props {
    text: string;
}

const Button: NextPage<Props> = (props) => {

    const { text } = props;

    return (
        <button type="submit" className="auth-registrate-submit-btn main-transition">{text}</button>
    );
}

export default Button;