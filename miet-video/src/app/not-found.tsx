import MainHeader from "./main-header";
import Sidebar from "./sidebar";
import PageFooter from "./page-footer";
import Image from "next/image";



const NotFound = () => {
    return (
        <div style={{"height": "100%"}}>
            <MainHeader/>
            <Sidebar/>
            <div style={{"height": "100%"}} className="total-centralize-content">
                <Image src="/not_found.jpg" width={800} height={600} alt="Not found"/>
            </div>
            <PageFooter/>
        </div> 
    );
}

export default NotFound;