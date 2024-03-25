import { NextPage } from "next";

import "@/src/components/ui/FormComponents/Checkbox/Checkbox.scss";



const Checkbox: NextPage<{ text: string, onClickHandler: () => void }> = ({ text, onClickHandler }) => {
    return (
        <label htmlFor="checkbox">
            <input type="checkbox" id="checkbox" name="checkbox-1" onChange={event => onClickHandler()}/>
            <span>{text}</span>
        </label>
    );
}

export default Checkbox;