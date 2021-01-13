import React from 'react';
import headshot from "../assets/Headshot.png";


function BioCard () {
    return (
        <section className="container-fluid">
            <div id="maintitle" className="row">
                <div className="col-sm-12">
                    <h3>- about me -</h3>
                </div>
            </div>
            <hr/>
            <div className="row">
            <div id="aboutme" className="col-sm-12">
                <img id="headshot" src={headshot} alt="headshot"/>
                <h3>Hello </h3>
                <p> My name is Raul Fernandez.</p>
                <p>I am currently residing in NY.</p>
                <p>I am an Electrician by trade and an aspiring full stack web developer currently enrolled in Columbia University.</p>
                
                <p>I enjoy styling my work - giving the page color and LIFE....</p>          
            </div>
            </div>  
        </section>
    )
};

export default BioCard;




