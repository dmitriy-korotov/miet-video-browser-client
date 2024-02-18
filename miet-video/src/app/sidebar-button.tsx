import { NextPage } from "next";



interface Props {
    onClick: (e: any) => void
}



const SidebarButton: NextPage<Props> = (props) => {

    const { onClick } = props;

    return (
        <div onClick={onClick} className="sidebar-button">
            
        </div>
    );
}

export default SidebarButton;