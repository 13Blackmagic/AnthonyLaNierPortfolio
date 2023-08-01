import React from 'react';
let authorPic = "/assets/images/code quiz.jpeg";
let authorpic2 = "/assets/images/SQL.jpeg";
let authorpic3 = "/assets/images/take notes.jpg";
let authorpic4 = "/assets/images/node.jpeg";
let authorpic5 = "/assets/images/shapes.jpeg";
let authorpic6 = "/assets/images/NoSQL.png";

<link rel="stylesheet" type="text/css" href="../assets/style.css"/>
export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
      This page is some of the work that I have done that I am most proud of.
      </p>

      <p>
        This is one of my favorite projects. It was really fun to make and I
        learned a lot about .<br/>
        PWA (Progressive Web Applications)  Project: <a href="https://github.com/13Blackmagic/Tom-did-nothing-wrong">Tom did nothing wrong</a>
      </p>
      <img height="200px" src={process.env.PUBLIC_URL + authorpic6} className=" float-left myPic" alt="pwa" />
      <p>
        This is one of my favorite projects. It was really fun to make and I learned a lot about Nosql.<br/>
        Nosql Project: <a href="https://github.com/13Blackmagic/Employees">Employees</a>
      </p>
      <img height="200px" src={process.env.PUBLIC_URL + authorpic2} className=" float-left myPic" alt="nosql" />
      <p>
        This was a challenge on Express.js and it was on taking notes.<br/>
        Express.js Project: <a href="https://github.com/13Blackmagic/take-notes">Take Notes</a>
      </p>
      <img height="200px" src={process.env.PUBLIC_URL + authorpic3} className=" float-left myPic" alt="express" />
      <p>
        This was one of my favorite projects. It was creating a Readme.md file using node.js.<br/>
        Node.js Project: <a href="https://github.com/13Blackmagic/README">Readme.md</a>
      </p>
      <img height="200px" src={process.env.PUBLIC_URL + authorpic4} className=" float-left myPic" alt="readme" />
      <p>
        This challenge uses OOP (Object Oriented Programming) and it was really fun to make.<br/>
        OOP Project: <a href="https://github.com/13Blackmagic/Shapes">Shapes</a>
      </p>
      <img height="200px" src={process.env.PUBLIC_URL + authorpic5} className=" float-left myPic" alt="shapes" />
      <p>
        This was an early project that I did It is a code quiz using javascript.<br/>
        Javascript Project: <a href="https://github.com/13Blackmagic/code-quiz ">Code Quiz</a>
      </p>
        <img height="200px" src={process.env.PUBLIC_URL + authorPic} className=" float-left myPic" alt="codequiz" />
        </div>
  );
}
