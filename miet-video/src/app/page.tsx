'use client';

import { useState } from "react";
import MainHeader from "./main-header";
import Sidebar from "./sidebar";



export default function Home() {

    const [ sidebarIsClosed, handleClick ] = useState({ is_closed: true });

    return (
        <div>
          <MainHeader onSidebarButtonClick={e => {
          console.log("sdasfds");
          handleClick({is_closed: !sidebarIsClosed.is_closed})
          //sidebarIsClosed.is_closed = !sidebarIsClosed.is_closed;
        }}/>
          <Sidebar is_closed={sidebarIsClosed.is_closed} />
        </div>  
    );
}