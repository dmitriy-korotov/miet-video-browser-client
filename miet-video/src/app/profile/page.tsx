import ProfilePage from "@/src/components/pages/ProfilePage/ProfilePage";
import AuthProvider from "@/src/components/providers/AuthProvider/AuthProvider";
import NotAuthorizatedPageProvider from "@/src/components/providers/NotAuthorizatedPageProvider/NotAuthorizatedPageProvider";



const Profile = () => {
    return (
        <NotAuthorizatedPageProvider>
            <ProfilePage/>
        </NotAuthorizatedPageProvider>
    );
}

export default Profile;