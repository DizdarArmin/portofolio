import Typescript from "../images/ts.png";
import Firebase from "../images/firebase.png";
import Azure from "../images/azure.png";
import Csharp from "../images/csharp.png";
import React from "../images/react.png";
import Javascript from "../images/javascript.png";
import DotNet from "../images/dotnet.png";
import Bootstrap from "../images/bootstrap.png";
import Figma from "../images/figma.png";
import Java from "../images/java.png";
import CSS from "../images/css.png";

// space between elements and again this can be a json.
// Regarding the images, remind explain how to that on JSON while keeping the project structure...
export function getTechStack() {
  return [
    {
      name: "React.js",
      image: React,
    },
    {
      name: "Javascript",
      image: Javascript,
    },
    {
      name: "Typescript",
      image: Typescript,
    },
    {
      name: "Firebase",
      image: Firebase,
    },
    {
      name: "Azure",
      image: Azure,
    },
    {
      name: " Java",
      image: Java,
    },

    {
      name: "C#",
      image: Csharp,
    },
    {
      name: ".Net",
      image: DotNet,
    },
    {
      name: "CSS",
      image: CSS,
    },
    {
      name: "Bootstrap",
      image: Bootstrap,
    },
    {
      name: "Figma",
      image: Figma,
    },
  ];
}
