import "@/src/components/ui/SideBar/SideBar.css";



const SideBarButton = () => {
    return (
        <>
            <input type="checkbox" id="check" />
            <label htmlFor="check">
                <i className="fas fa-bars" id="btn"></i>
                <i className="fas fa-times" id="cancel"></i>
            </label>
        </>
    );
}

export default SideBarButton;