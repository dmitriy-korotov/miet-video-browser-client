import HomePage from "@/src/components/pages/HomePage/HomePage";
import { AuthProvider } from "@/src/components/providers/AuthProvider/AuthProvider";



const Home = () => {
    return (
        <AuthProvider>
            <HomePage/>
        </AuthProvider>
    );
}

export default Home;