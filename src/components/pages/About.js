import React from 'react';
// import "/assets/style.css";
import "./about.css";

let authorPic = "/assets/images/mmee.jpg";
<link rel="stylesheet" type="text/css" href="../assets/style.css"/>
export default function About() {
  return (
    <div>
      <h1>About</h1>
      <img height="400px" src={process.env.PUBLIC_URL + authorPic} className=" float-left myPic" alt="Anthony" />
      <p>
      Anthony is a full stack web developer with a background in sales and <br/>
        customer service. He recently earned a certificate in full stack web <br/>
        development from the University of Utah. He is a creative problem <br/>
        solver, who is passionate about developing apps, with a focus on mobile <br/>
        first design and development. He is excited to leverage his skills as <br/>
        part of a fast-paced, quality-driven team to build better experiences on
        the web.
      </p>
    </div>
  );
}
