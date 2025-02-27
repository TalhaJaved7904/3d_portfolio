import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },

];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "",
        icon: reactjs,
        iconBg: "#383E56",
        date: "",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "",
        icon: mongodb,
        iconBg: "#E6DEDD",
        date: "",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "",
        icon: nodejs,
        iconBg: "#383E56",
        date: "",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "",
        icon: reactjs,
        iconBg: "#E6DEDD",
        date: "",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    //     {
    //         testimonial:
    //             "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //         name: "Sara Lee",
    //         designation: "CFO",
    //         company: "Acme Co",
    //         image: "https://randomuser.me/api/portraits/women/4.jpg",
    //     },
    //     {
    //         testimonial:
    //             "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //         name: "Chris Brown",
    //         designation: "COO",
    //         company: "DEF Corp",
    //         image: "https://randomuser.me/api/portraits/men/5.jpg",
    //     },
    //     {
    //         testimonial:
    //             "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //         name: "Lisa Wang",
    //         designation: "CTO",
    //         company: "456 Enterprises",
    //         image: "https://randomuser.me/api/portraits/women/6.jpg",
    //     },
];

const projects = [
    {
        name: "LMS",
        description:
            "Web-based platform that allows users to students,teacher,subjects access it and edit it to maintain the school data, providing a convenient and efficient solution for school needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/TalhaJaved7904/Software-Project",
    },
    {
        name: "Job IT",
        description:
            "i made a backend for Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "nodejs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/TalhaJaved7904/backend",
    },
    
];

export { services, technologies, experiences, testimonials, projects };