import HomePage from "@/src/components/pages/HomePage/HomePage";
import AuthProvider from "@/src/components/providers/AuthProvider/AuthProvider";
import NotAuthorizatedPageProvider from "@/src/components/providers/NotAuthorizatedPageProvider/NotAuthorizatedPageProvider";



const Home = () => {
    return (
        <AuthProvider>
            <NotAuthorizatedPageProvider>
                <HomePage/>
            </NotAuthorizatedPageProvider>
        </AuthProvider>
    );
}

export default Home;