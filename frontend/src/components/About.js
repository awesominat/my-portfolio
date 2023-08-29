import React from "react";
import Footer from './common/Footer'
import Navbar from './common/Navbar'
import './sheets/about.css'

function About() {
    document.body.style.overflow = "auto";
    var startDate = new Date("2015-05-31"); // Replace with your start date
    var endDate = new Date();

    var yearDiff = endDate.getFullYear() - startDate.getFullYear();

    if (endDate.getMonth() < startDate.getMonth() || 
        (endDate.getMonth() === startDate.getMonth() && endDate.getDate() < startDate.getDate())) {
      yearDiff--;
    }
    return (
        <>
            <Navbar
                selected={'about'}
            />

            <div className="aboutcontainer">
                <h1 className="title">Hey, I'm Zain!
                    <div className="aurora">
                        <div className="aurora__item"></div>
                        <div className="aurora__item"></div>
                        <div className="aurora__item"></div>
                        <div className="aurora__item"></div>
                    </div>
                </h1>

                <div className="profile-container">

                    <img src="https://media.licdn.com/dms/image/D5603AQEpdCNpw2LAXg/profile-displayphoto-shrink_400_400/0/1676872565081?e=1698278400&v=beta&t=3kkkIRL6HCPwMVa8ASscPj2SckgoBHOB0R4f2mq0nmM" alt="my face!" className="pfp" />
                    <div className="profile-textcontainer">

                        <p>
                            I'm a second-year student at the University of Toronto, pursuing a Computer Science Specialist with minors in Math and Statistics. My passion lies in Software Engineering and Machine Learning, fields that I've dedicated significant time to practicing and learning.
                        </p> <br /><p>
                            With 8+ years of game development experience, I've contributed to crafting top 50 Roblox games with an average of 1.5 million daily active users. Collaborating with YouTubers, I've supported the creation of 72 videos totaling a remarkable 902 million views. This journey has honed my skills in Git, Lua, SCRUM, SQL, JS, Web hosting, Rust, C#, and Python. </p> <br /> <p>

                            Looking ahead, I'm excited about the prospects of research and innovation. My ultimate goal is to leave a mark in the Machine Learning field by publishing a significant research paper and create software that makes peoples' lives easier.
                        </p>
                    </div>
                </div>


                <div className="career">
                    <h1>
                        Career
                    </h1> <br /> <br />

                    <div className="entry">
                        <p className="position">
                            Project Assistant
                        </p> <br />
                        <p className="company-location">
                            <span className="company">Pardee Lab</span> • Toronto, ON, Canada
                        </p> <br />
                        <p className="date">
                            June 2023 – August 2023 • 3 months
                        </p>
                    </div>

                    <div className="entry">
                        <p className="position">
                            Roblox Freelance
                        </p> <br />
                        <p className="date">
                            June 2015 – Present • {yearDiff} years
                        </p>
                    </div>
                </div>
            </div>



            <Footer />
        </>
    )
}

export default About;