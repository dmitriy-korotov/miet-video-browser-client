import { NextPage } from "next";



interface Props {
    text: string;
}

const Button: NextPage<Props> = (props) => {

    const { text } = props;

    return (
        <button type="submit" className="button main-transition">{text}</button>
    );
}

export default Button;