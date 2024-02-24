import { NextPage } from "next";



interface Props {
    text: string;
}

const HeaderButton: NextPage<Props> = (props) => {

    const { text } = props;

    return (
        <button className="main-logo-font header-button main-color main-color-hover main-transition" style={{"fontSize": "1.4em"}}>
            <span>{text}</span>
        </button>
    );
}

export default HeaderButton;