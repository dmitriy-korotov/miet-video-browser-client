import { NextPage } from "next";



interface Props {
    text: string;
}

const HeaderButton: NextPage<Props> = (props) => {

    const { text } = props;

    return (
        <button className="header-button main-color main-color-hover main-transition">
            <span>{text}</span>
        </button>
    );
}

export default HeaderButton;