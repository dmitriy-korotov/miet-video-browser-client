'use client';

import MainHeader from "./main-header";
import Sidebar from "./sidebar";
import PageFooter from "./page-footer";
import HomePageContent from "./home-page-content";



export default function Home() {
    return (
        <div style={{"height": "100%"}}>
          <MainHeader/>
          <Sidebar/>
          <HomePageContent/>
          <PageFooter/>
        </div>  
    );
}