import LecturesPage from "@/src/components/pages/LecturesPage/LecturesPage";
import AuthProvider from "@/src/components/providers/AuthProvider/AuthProvider";
import NotAuthorizatedPageProvider from "@/src/components/providers/NotAuthorizatedPageProvider/NotAuthorizatedPageProvider";



const Lectures = () => {   
    return (
        <NotAuthorizatedPageProvider>
            <LecturesPage/>
        </NotAuthorizatedPageProvider>
    );
}

export default Lectures;