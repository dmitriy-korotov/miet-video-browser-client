import { NextPage } from "next";



interface Props
{
    is_closed: boolean;
}



const Sidebar: NextPage<Props> = (props) => {

    const { is_closed } = props;

    /*
       <div className="sidebar" style={{
            "left": ((is_closed) ? "-500px" : "0px")
        }}>

        </div>
     */

    return (
        <div className="sidebar-body">
            <div>
            <input type="checkbox" id="check" />
            <label for="check">
              <i className="fas fa-bars" id="btn"></i>
              <i className="fas fa-times" id="cancel"></i>
            </label>
            <div className="sidebar">
              <a href="#" className="active">
                <i className="fas fa-qrcode"></i>
                <span>Menu</span>
              </a>
              <a href="#">
                <i className="fas fa-link"></i>
                <span>Shortcuts</span>
              </a>
              <a href="#">
                <i className="fas fa-stream"></i>
                <span>Overview</span>
              </a>
              <a href="#">
                 <i className="fas fa-calendar"></i>
                <span>Events</span>
              </a>
              <a href="#">
                <i className="far fa-question-circle"></i>
                <span>About</span>
              </a>
              <a href="#">
                <i className="fas fa-sliders-h"></i>
                <span>Services</span>
              </a>
              <a href="#">
                <i className="far fa-envelope"></i>
                <span>Contact</span>
              </a>
            </div>
        </div>  
        </div>
    );
}

export default Sidebar;