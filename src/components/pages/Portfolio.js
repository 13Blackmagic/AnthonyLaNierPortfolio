import React from 'react';
let authorPic = "/assets/images/code quiz.jpg";
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
      <p>
        This is one of my favorite projects. It was really fun to make and I learned a lot about Nosql.<br/>
        Nosql Project: <a href="https://github.com/13Blackmagic/Employees">Employees</a>
      </p>
      <p>
        This was a challenge on Express.js and it was on taking notes.<br/>
        Express.js Project: <a href="https://github.com/13Blackmagic/take-notes">Take Notes</a>
      </p>
      <p>
        This was one of my favorite projects. It was creating a Readme.md file using node.js.<br/>
        Node.js Project: <a href="https://github.com/13Blackmagic/README">Readme.md</a>
      </p>
      <p>
        This challenge uses OOP (Object Oriented Programming) and it was really fun to make.<br/>
        OOP Project: <a href="https://github.com/13Blackmagic/Shapes">Shapes</a>
      </p>
      <p>
        This was an early project that I did It is a code quiz using javascript.<br/>
        Javascript Project: <a href="https://github.com/13Blackmagic/code-quiz ">Code Quiz</a>
      </p>
        <img height="400px" src={process.env.PUBLIC_URL + authorPic} className=" float-left myPic" alt="Anthony" />
        </div>
  );
}
