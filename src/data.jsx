import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
    FaGithub,
    FaLink,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/Calculator.png";
import Work2 from "./assets/Calculator_2.png";
import Work3 from "./assets/QuoteGenerator.png";
import Work4 from "./assets/QR_Code_Gen.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
    {
        id: 1,
        name: "Home",
        icon: <FaHome className="nav__icon" />,
        path: "/",
    },

    {
        id: 2,
        name: "About",
        icon: <FaUser className="nav__icon" />,
        path: "/about",
    },

    {
        id: 3,
        name: "Portfolio",
        icon: <FaFolderOpen className="nav__icon" />,
        path: "/portfolio",
    },

    {
        id: 4,
        name: "Contact",
        icon: <FaEnvelopeOpen className="nav__icon" />,
        path: "/contact",
    },
];

export const personalInfo = [
    {
        id: 1,
        title: "First Name : ",
        description: "Md Faizan",
    },

    {
        id: 2,
        title: "Last Name : ",
        description: "Khan",
    },

    {
        id: 3,
        title: "Age : ",
        description: "19 Years",
    },

    {
        id: 4,
        title: "Nationality : ",
        description: "Indian",
    },
    {
        id: 5,
        title: "Address : ",
        description: "New Delhi",
    },

    {
        id: 6,
        title: "Freelance : ",
        description: "Available",
    },

    {
        id: 7,
        title: "Email : ",
        description: "FKHAN20040@GMAIL.COM",
    },

    {
        id: 8,
        title: "Languages : ",
        description: "English, Hindi",
    },
];

export const stats = [
    {
        id: 1,
        no: "1+",
        title: "Years of <br /> Experience",
    },

    {
        id: 2,
        no: "10+",
        title: "Complete <br /> Projects",
    },
];

export const skills = [
    {
        id: 1,
        title: "HTML",
        percentage: "60",
    },

    {
        id: 2,
        title: "CSS",
        percentage: "60",
    },

    {
        id: 3,
        title: "JavaScript",
        percentage: "75",
    },

    {
        id: 4,
        title: "React",
        percentage: "70",
    },

    {
        id: 5,
        title: "NodeJS",
        percentage: "65",
    },

    {
        id: 6,
        title: "ExpressJS",
        percentage: "60",
    },

    {
        id: 8,
        title: "MongoDb",
        percentage: "70",
    },

    {
        id: 9,
        title: "MySQL",
        percentage: "70",
    },

    {
        id: 10,
        title: "Java",
        percentage: "85",
    },

    {
        id: 11,
        title: "C",
        percentage: "70",
    },

    {
        id: 12,
        title: "C++",
        percentage: "70",
    },

    {
        id: 11,
        title: "Git",
        percentage: "80",
    },

    {
        id: 12,
        title: "DevOps",
        percentage: "60",
    },

    {
        id: 13,
        title: "Docker",
        percentage: "65",
    },

    {
        id: 14,
        title: "Kubernetes",
        percentage: "60",
    },

    {
        id: 15,
        title: "Shell Scripting",
        percentage: "60",
    },

    {
        id: 16,
        title: "Ubuntu",
        percentage: "70",
    },
];

export const resume = [
    {
        id: 1,
        category: "experience",
        icon: <FaBriefcase />,
        year: "2023 - PRESENT",
        title: "Web Developer",
        desc: "Full Stack Web Developing using MERN Stack",
    },

    {
        id: 2,
        category: "experience",
        icon: <FaBriefcase />,
        year: "2023 - PRESENT",
        title: "Java Programmer",
        desc: "Java Programming using Data Structure & Algorithm",
    },

    {
        id: 3,
        category: "education",
        icon: <FaGraduationCap />,
        year: "2022 - 2026",
        title: "BTech in CSE <span> Galgotias University  </span>",
        desc: "Bachelor of Technology in Computer Science Engineering",
    },
];

export const portfolio = [
    {
        id: 1,
        img: Work1,
        title: "Web Calculator",
        details: [
            {
                icon: <FiFileText />,
                title: "Project : ",
                desc: "Website",
            },
            {
                icon: <FaGithub />,
                title: "Github Repository : ",
                desc: "https://github.com/THEFZNKHAN/Web_Calculator",
            },
            {
                icon: <FaCode />,
                title: "Language : ",
                desc: "HTML, CSS and JavaScript",
            },
            {
                icon: <FaLink />,
                title: "Preview : ",
                desc: "https://thefznkhan.github.io/Web_Calculator/",
            },
        ],
    },
    {
        id: 2,
        img: Work2,
        title: "Web Calculator 2.0",
        details: [
            {
                icon: <FiFileText />,
                title: "Project : ",
                desc: "Website",
            },
            {
                icon: <FaGithub />,
                title: "Github Repository : ",
                desc: "https://github.com/THEFZNKHAN/Calculator",
            },
            {
                icon: <FaCode />,
                title: "Language : ",
                desc: "HTML, CSS and JavaScript",
            },
            {
                icon: <FaLink />,
                title: "Preview : ",
                desc: "https://thefznkhan.github.io/Calculator/",
            },
        ],
    },
    {
        id: 3,
        img: Work3,
        title: "Quote Generator",
        details: [
            {
                icon: <FiFileText />,
                title: "Project : ",
                desc: "Website",
            },
            {
                icon: <FaGithub />,
                title: "Github Repository : ",
                desc: "https://github.com/THEFZNKHAN/QuoteGenerator",
            },
            {
                icon: <FaCode />,
                title: "Language : ",
                desc: "HTML, Css and JavaScript",
            },
            {
                icon: <FaLink />,
                title: "Preview : ",
                desc: "https://thefznkhan.github.io/QuoteGenerator/",
            },
        ],
    },
    {
        id: 4,
        img: Work4,
        title: "QR-Code Generator",
        details: [
            {
                icon: <FiFileText />,
                title: "Project : ",
                desc: "Website",
            },
            {
                icon: <FaGithub />,
                title: "Github Repository : ",
                desc: "https://github.com/THEFZNKHAN/QR_Code_Generator",
            },
            {
                icon: <FaCode />,
                title: "Language : ",
                desc: "HTML, CSS and JavaScript",
            },
            {
                icon: <FaLink />,
                title: "Preview : ",
                desc: "https://thefznkhan.github.io/QR_Code_Generator/",
            },
        ],
    },
];

export const themes = [
    {
        id: 1,
        img: Theme1,
        color: "hsl(252, 35%, 51%)",
    },

    {
        id: 2,
        img: Theme2,
        color: "hsl(4, 93%, 54%)",
    },

    {
        id: 3,
        img: Theme3,
        color: "hsl(271, 76%, 53%)",
    },

    {
        id: 4,
        img: Theme4,
        color: "hsl(225, 73%, 57%)",
    },

    {
        id: 5,
        img: Theme5,
        color: "hsl(43, 74%, 49%)",
    },
    {
        id: 6,
        img: Theme6,
        color: "hsl(339, 81%, 66%)",
    },

    {
        id: 7,
        img: Theme7,
        color: "hsl(80, 61%, 50%)",
    },

    {
        id: 8,
        img: Theme8,
        color: "hsl(19, 96%, 52%)",
    },

    {
        id: 9,
        img: Theme9,
        color: "hsl(88, 65%, 43%)",
    },

    {
        id: 10,
        img: Theme10,
        color: "hsl(42, 100%, 50%)",
    },
];
