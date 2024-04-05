import { NextPage } from "next";

import "@/src/components/pages/ProfilePage/Info/StudentInfo/InfoElementBlock/InfoElementBlock.css";



const InfoElementBlock: NextPage<{ title: string, value: string | number }> = ({ title, value }) => {
    return (
        <div className="info-block">
            <div className="title-info-block">{title}:</div>
            <div className="value-info-block">{value}</div>
        </div>
    );
}

export default InfoElementBlock;