import React from "react";
import { Link } from 'react-router-dom';

const ProjectFour = (props) => {
    return (
        <>
            <div id="copyheader">
                <div id="copylabel"><h2>ClassifiedAds Forum</h2></div>
                <div style={{ display: 'flex', }}>
                    <a href="https://github.com/landenwilliams/classifiedads" target="_blank">
                        <div className={`homebutton ${props.theme}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className={`bi bi-git headericon ${props.theme}`} viewBox="0 0 16 16">
                                <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457" />
                            </svg>
                        </div>
                    </a>

                    <a href="http://classifiedads.netlify.app/" target="_blank" >
                        <div className={`homebutton ${props.theme}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`bi bi-box-arrow-up-right headericon ${props.theme}`} viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                            </svg>
                        </div>
                    </a>
                    <Link id="home" to="/">
                        <div className={`homebutton ${props.theme}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" className={`bi bi-house-door headericon ${props.theme}`} viewBox="0 0 16 16">
                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="line"></div>
            <div className="copy">
                <p>
                    <strong>Summary:</strong> This project involved the development of a Classified Ads Forum, which serves as an online platform for users to post and browse classified advertisements. The primary goal was to create an intuitive and user-friendly interface that allows users to easily interact with the website and find relevant classified ads. The project focused solely on front-end development and utilized a pre-existing API and database for data retrieval and storage.


                    <br /><br />

                    <strong>Key Features:</strong> User Registration and Authentication,
                    Ad Posting and Searching,
                    Ad Management,
                    Messaging System.

                    <br /><br />

                    <strong>Tech Stack:</strong> React.js, Node.js, Webpack, Axios, Bootstrap, and JSON Web Token (JWT).


                    <br /><br />

                </p>            </div>
        </>
    )
}

export default ProjectFour;