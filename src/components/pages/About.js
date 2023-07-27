import React from 'react';
let authorPic = "/assets/images/mmee.jpg";
<link rel="stylesheet" type="text/css" href="../assets/style.css"/>
export default function About() {
  return (
    <div>
      <h1>About</h1>
      <img height="200px" src={process.env.PUBLIC_URL + authorPic} className=" float-left myPic" alt="Anthony" />
      <p>
      Anthony is a full stack web developer with a background in sales and
        customer service. He recently earned a certificate in full stack web
        development from the University of Utah. He is a creative problem
        solver, who is passionate about developing apps, with a focus on mobile
        first design and development. He is excited to leverage his skills as
        part of a fast-paced, quality-driven team to build better experiences on
        the web.
      </p>
    </div>
  );
}
