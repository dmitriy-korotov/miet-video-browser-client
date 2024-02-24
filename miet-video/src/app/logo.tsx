const Logo = () => {

    const redirectToHomePage = () => {
        window.location.href = "/";
    }

    return (
        <button id="logo" className="hide-button" type="button" onClick={redirectToHomePage}>
            <div className="main-color main-color-hover main-transition main-logo-font" style={{"fontSize": "2em"}}>
                <h1>MIET Video</h1>
            </div>
        </button>
    );
}

export default Logo;