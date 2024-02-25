import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";



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
            <Link href={videoRef}>
                <div className="lectures-table-item">
                    <Image className="video-preview" src={previewRef}
                           width={360} height={270} alt={title}
                           style={{ "alignSelf": "center" }} />
                    <div>
                        <span className="title">{title}</span>
                        <span className="date">{date}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default LecturesTableItem;