import ProfilePage from "@/src/components/pages/ProfilePage/ProfilePage";
import AuthProvider from "@/src/components/providers/AuthProvider/AuthProvider";



const Profile = () => {
    return (
        <AuthProvider>
            <ProfilePage/>
        </AuthProvider>
    );
}

export default Profile;