import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import "./dashboard.css";

const NavBar: React.FC = () => {
    const location = useLocation();
    const [pathName,setPathName] = useState(location.pathname);
    useEffect(()=>{
        setPathName(location.pathname);
    },[location])
    return (
    <nav className='navbar'>
        <Link to="/" className={`location-${pathName == "/" ? "active": ""}`}> All  </Link>
        <span> / </span>
        <Link to ="/answered" className={`location-${pathName == "/answered" ? "active": ""}`}> Answered Questions </Link>
        <span> / </span>
        <Link to ="/unanswered" className={`location-${pathName == "/unanswered" ? "active": ""}`}> Unanswered Questions </Link>
    </nav>
  )
}

export default NavBar