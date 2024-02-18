import { NextPage } from "next";
import Image from "next/image";



interface ItemProps
{
    videoRef: string,
    previewRef: string,
    title: string,
    date: string
}



const LecturesTableItem: NextPage<ItemProps> = (props) => {

    const { videoRef, previewRef, title, date } = props;

    return (
        <div className="lectures-table-item-wrapper">
            <a href={videoRef}>
                <div className="lectures-table-item">
                    <Image src={previewRef} width={240} height={180} alt={title} style={{ "alignSelf": "center" }} />
                    <div>
                        <span>{title}</span>
                        <span>{date}</span>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default LecturesTableItem;