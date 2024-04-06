import LecturesPage from "@/src/components/pages/LecturesPage/LecturesPage";
import AuthProvider from "@/src/components/providers/AuthProvider/AuthProvider";



const Lectures = () => {   
    return <AuthProvider><LecturesPage/></AuthProvider>;
}

export default Lectures;