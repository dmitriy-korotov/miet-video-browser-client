import UnregistratedBlockBlock from "./UnregistatedBlock/UnregistatedBlock";
import UserProfileBlock from "./UserProfileBlock/UserProfileBlock";



const AuthorizationBlock = () => {

    const isAuntificated = true;

    return (
        isAuntificated ? <UserProfileBlock username="Dima"/> : <UnregistratedBlockBlock/>
    );
}

export default AuthorizationBlock;