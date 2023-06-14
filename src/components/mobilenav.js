import React from "react";
import { Link } from 'react-router-dom';

const MobileNav = (props) => {
    return (
        <div className={`mobilenavcontainer ${props.theme}`}>
            <div id="mobilenav">
                <Link to='/project-one'>
                    <div className="traybutton" >
                        <div id={`buttonone ${props.theme}`} className={`buttons ${props.theme}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className={`bi bi-brush-fill dumbell ${props.theme}`} viewBox="0 0 16 16">
                                <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z" />
                            </svg>

                        </div>

                        <h3 className={`${props.theme}`}>Portfolio</h3>
                    </div>
                </Link>
                <Link to='/project-two'>
                    <div className="traybutton" >
                        <div id="buttontwo" className={`buttons ${props.theme}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className={`bi bi-bag-fill ${props.theme}`} viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                            </svg>
                        </div>
                        <h3 className={`${props.theme}`}>
                            Shop
                        </h3>
                    </div>
                </Link>
                <Link to='/project-three'>
                    <div className="traybutton">
                        <div id="buttonthree" className={`buttons ${props.theme}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="white" className={`dumbell ${props.theme}`} viewBox="0 0 640 512"><path d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z" /></svg>
                        </div>
                        <h3 className={`${props.theme}`}>
                            Fitness
                        </h3>
                    </div>
                </Link>
                <Link to='/project-four'>
                    <div className="traybutton">
                        <div id="buttonfour" className={`buttons ${props.theme}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 512 512" fill="white" className={`newspaper ${props.theme}`}><path d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" /></svg>
                        </div>
                        <h3 className={`${props.theme}`}>
                            Ads
                        </h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MobileNav;