import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import "./dashboard.css";

const NavBar: React.FC = () => {
    const location = useLocation();
    const routes: {name:String, path:String}[] = [
        {name: "All", path:"/"},
        {name: "Answered Questions", path: "/answered"},
        {name: "Unanswered Questions", path:"/unanswered"}
    ];
    const [pathName,setPathName] = useState(location.pathname);
    useEffect(()=>{
        setPathName(location.pathname);
    },[location])
    return (
    <nav className='navbar'>
        {routes.map((route)=>{
            return (
                <>
                <Link to = {`${route.path}`} className={`location-${pathName == `${route.path}` ? "active": ""}`}> {route.name} </Link>
                </>
            )
        })}
    </nav>
  )
}

export default NavBar