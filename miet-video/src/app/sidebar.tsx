'use client';

import Link from "next/link";



const Sidebar = () => {
    return (
        <div className="sidebar-body">
            <div>
            <input type="checkbox" id="check" />
            <label htmlFor="check">
              <i className="fas fa-bars" id="btn"></i>
              <i className="fas fa-times" id="cancel"></i>
            </label>
            <div className="sidebar">
              <Link href="/" className="active">
                <i className="fas fa-qrcode"></i>
                <span>Nome</span>
              </Link>
              <Link href="#">
                <i className="fas fa-link"></i>
                <span>Shortcuts</span>
              </Link>
              <Link href="/lectures">
                <i className="fas fa-stream"></i>
                <span>Lectures</span>
              </Link>
              <Link href="#">
                 <i className="fas fa-calendar"></i>
                <span>Events</span>
              </Link>
              <Link href="#">
                <i className="far fa-question-circle"></i>
                <span>About</span>
              </Link>
              <Link href="/upload">
                <i className="fas fa-sliders-h"></i>
                <span>Upload</span>
              </Link>
              <Link href="#">
                <i className="far fa-envelope"></i>
                <span>Contact</span>
              </Link>
            </div>
        </div>  
        </div>
    );
}

export default Sidebar;