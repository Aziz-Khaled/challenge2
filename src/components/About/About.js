import React from "react";
import ProfilePhoto from '../About/Photo.jpg' ;
import '../About/About.css'


const About =(props)=> {
    return (
        <div className="About-css">
                    <h2 className="font ">
                    Hi , this is <span className="color" >{props.name}</span>, 20 years old and youngest <br/> freelancer you've ever seen with brilliant websites ideas, <br/>check <a href ="#pro">them here</a>
                    </h2>
                    <img className="Photo"  src={ProfilePhoto} alt="@"   />
        </div>
    )
}



export default About