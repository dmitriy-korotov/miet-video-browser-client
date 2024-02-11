import { redirect } from "next/navigation";

const Logo = () => {

    const redirectToHomePage = () => {
        redirect("/");
    }

    return (
        <div className="main-color main-color-hover main-transition" onClick={redirectToHomePage}>
            <h1>MIET Video</h1>
        </div>
    );
}

export default Logo;