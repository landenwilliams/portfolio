import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./navigation.js";
import SocialLinks from "./links.js";
import Welcome from "./welcome.js";
import ProjectOne from "./projectOne.js";
import ProjectTwo from "./projectTwo.js";
import ProjectThree from "./projectThree.js";
import ProjectFour from "./projectFour.js";
import MobileNav from "./mobilenav.js";

// import "./style.css";



const App = () => {
    const [theme, setTheme] = useState('light');
    const [iconTheme, setIconTheme]= useState(true);
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            setIconTheme(false);
        } else {
            setTheme('light');
            setIconTheme(true);
        }
    };
    useEffect(() => {
        document.body.className = theme;
      }, [theme]);
    return (
        <div className={`appbody ${theme}`}>
            <div id="stripe" className={`${theme}`}></div>
            <div id="stripetwo" className={`${theme}`}></div>
            <div className={`box ${theme}`}></div>
            <div className={`boxtwo ${theme}`}></div>
            <div id="container">
                <div id="content">

                    <SocialLinks theme={theme} toggleTheme={toggleTheme} iconTheme={iconTheme}/>
                    <div className={`imagecontainer`}>
                        <div className={`profileimage ${theme}`}></div>
                    </div>
                    <div className={`bodycontainer ${theme}`}>
                        <div className={`copycontainer ${theme}`}>

                            <Routes>
                                <Route path='/' element={<Welcome />} ></Route>
                                <Route path='/project-one' element={<ProjectOne theme={theme}/>}></Route>
                                <Route path='/project-two' element={<ProjectTwo theme={theme}/>}></Route>
                                <Route path='/project-three' element={<ProjectThree theme={theme}/>}></Route>
                                <Route path='/project-four' element={<ProjectFour theme={theme}/>}></Route>
                            </Routes>
                        </div>
                        <Nav theme={theme} />
                        
                    </div>
                    
                    
                </div>
                <MobileNav theme={theme} />
            </div>
        </div>

    )
}


export default App;