import React from "react";
import "../Projects/Projects.css" ;
import PhotoProjectOne from "../img/Proj1.jpg" ;
import PhotoProjectTwo from "../img/Proj2.jpg";
import PhotoProjectThree from "../img/Proj3.jpg";
import PhotoProjectFour from "../img/Proj4.jpg";

const Projects =(props)=> {
    return (
        <div className="pro">
            <div className="Project-1">
            <img className="p1" src={PhotoProjectOne} alt ='proj'/>
            <p className="text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
            <a href ={props.link1} >Github.link</a>
            </div >
            <div className="Project-2">
                <img className="p1" src={PhotoProjectTwo} alt ='proj-2' />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
            <a href ={props.link2} >Github.link</a>

            </div>
            <div className="Project-3">
                <img className="p1" src={ PhotoProjectThree} alt ='proj-3'  />
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
                <a href ={props.link3} >Github.link</a>
            </div>

            <div className="Project-4"> 
                <img className="p1" src={PhotoProjectFour} alt ="proj-4"/>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
                <a href ={props.link4} >Github.link</a>
            </div>

        </div>

    )
}



export default Projects