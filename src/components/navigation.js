import React from "react";
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div id="navcontainer">
            <div id="navigation">
                <h2 id="navlabel" className={`${props.theme}`}>Projects</h2><br />

                <div className={`navtable ${props.theme}`}>
                    <div id="navlinktable" className={`${props.theme}`}>
                        <Link id='projectOne' to='/project-one'><h3 className={`${props.theme}`}>Portfolio Website</h3></Link>
                        <Link id='projectTwo' to='/project-two'><h3 className={`${props.theme}`}>E Commerce Shop</h3></Link>
                        <Link id='projectThree' to='/project-three'><h3 className={`${props.theme}`}>Fitness Routine Builder</h3></Link>
                        <Link id='projectFour' to='/project-four'><h3 className={`${props.theme}`}>ClassifiedAds Forum</h3></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;