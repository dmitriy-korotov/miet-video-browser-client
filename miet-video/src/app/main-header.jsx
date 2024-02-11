import Logo from "./logo";
import HeaderButton from "./header_button";



const MainHeader = () => {
    return (
        <nav id="main-navigation">
            <div id="main-logo">
                <Logo/>
            </div>
            <div className="content-in-line space-bettwen-content">
                <HeaderButton text="Auth" />
                <HeaderButton text="Registration" />
            </div>
        </nav>
    );
}

export default MainHeader;