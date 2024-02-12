const Logo = () => {

    const redirectToHomePage = () => {
        window.location.href = "/";
    }

    return (
        <button className="hide-button" type="button" onClick={redirectToHomePage}>
            <div className="main-color main-color-hover main-transition main-logo-font-size">
                <h1>MIET Video</h1>
            </div>
        </button>
    );
}

export default Logo;