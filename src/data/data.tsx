type Header = {
    title: string
    link: string
    icon?: React.ReactNode;
}

type Skill = {
    tech_img: string;
    name: string;
};

export type AboutProps = {
    top_title: string
    bottom_title: string
}

type history = {
    title: string;
    company?: string;
    date: string;
    name?: string;
    description?: string;
}

export type PortfolioItem = {
    img: string;
    name: string;
    github?: string;
    demo: string;
    demoTxt?: string;
    githubTxt?: JSX.Element;
    category: string;
}

export const headerData: Header[] = [
    {
        title: "Home",
        link: "#home",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"></path></svg>
    },
    {
        title: 'About',
        link: '#about',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
    },
    {
        title: "Skills",
        link: "#skills",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"></path><path d="M9.293 9.293 5.586 13l3.707 3.707 1.414-1.414L8.414 13l2.293-2.293zm5.414 0-1.414 1.414L15.586 13l-2.293 2.293 1.414 1.414L18.414 13z"></path></svg>
    },
    {
        title: "Experience",
        link: "#experience",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zM4 19v-6h6v2h4v-2h6l.001 6H4z"></path></svg>
    },
    {
        title: "Portfolio",
        link: '#portfolio',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z"></path><path d="M7 9h10v2H7zm0 4h7v2H7z"></path></svg>
    },
    {
        title: "Activities",
        link: '#activities',
        icon:                          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 494.441 494.441">
                            <g id="XMLID_240_">
                                <path id="XMLID_241_" d="M324.419,283.629h1.788c9.108,0,16.481-7.38,16.481-16.482c0-9.102-7.373-16.48-16.481-16.48H168.249
                                    c-9.109,0-16.481,7.379-16.481,16.48c0,9.102,7.372,16.482,16.481,16.482h1.787c4.522,21.293,17.704,39.247,35.602,50.402
                                    l14.808,160.41h53.564l14.808-160.41C306.716,322.876,319.898,304.922,324.419,283.629z"/>
                                <path id="XMLID_242_" d="M239.518,223.812c33.382,0,57.234-21.246,69.708-52.205c21.631-53.726-17.511-159.662-63.477-159.662
                                    c18.154,25.752,25.783,69.015-9.657,105.068c-6.438-12.023-3.51-29.639-4.121-44.832c-28.327,12.899-52.889,45.701-52.889,91.195
                                    C179.081,196.756,206.138,223.812,239.518,223.812z"/>
                                <path id="XMLID_243_" d="M222.458,47.498c7.886,1.175,18.043-1.706,18.269-10.316c0.208-8.241-5.457-11.782-9.399-20.617
                                    c-3.172-7.116-3.444-10.237,0.352-16.362c-8.24-2.47-22.82,18.179-22.531,29.253C209.341,38.051,213.686,46.195,222.458,47.498z"/>
                                <path id="XMLID_244_" d="M52.398,169.321c6.855,1.416,14.036-5.037,16.867-14.452c2.286-9.304,7.469-35.989,1.658-39.191
                                    c-6.583-3.333-23.192,21.18-25.864,31.916C41.84,158.104,45.574,167.906,52.398,169.321z"/>
                                <path id="XMLID_245_" d="M53.589,216.174c4.764,7.114,12.781,6.856,17.865,0.628c4.844-6.566,16.046-26.332,12.684-33.155
                                    c-3.59-7.339-22.598,0.901-28.406,7.501C49.791,197.376,48.794,209.108,53.589,216.174z"/>
                                <path id="XMLID_246_" d="M200.987,399.336c-6.983-3.975-22.758,7.404-26.847,13.085c-3.992,5.731-0.676,14.905,8.031,19.878
                                    c8.676,4.941,18.526,3.252,21.424-3.107C206.396,422.77,207.941,403.344,200.987,399.336z"/>
                                <path id="XMLID_247_" d="M60.574,260.58c-3.942,7.389-1.688,18.542,4.797,23.806c6.519,5.295,14.131,2.784,17.351-4.395
                                    c2.494-7.807,12.457-38.274,7.919-43.392C85.232,230.467,64.083,252.501,60.574,260.58z"/>
                                <path id="XMLID_248_" d="M96.289,349.103c8.95,3.558,16.497-1.818,17.688-10.75c0.05-9.448,1.98-45.276-4.458-49.17
                                    c-7.87-4.974-24.962,25.332-26.219,35.489C81.209,334.023,87.356,345.595,96.289,349.103z"/>
                                <path id="XMLID_249_" d="M147.134,407.496c11.17,0.693,17.223-7.983,15.192-18.075c-3.766-10.382-13.614-49.589-21.599-51.568
                                    c-10.219-2.833-19.139,35.715-16.738,47.367C124.954,396.198,136.028,406.867,147.134,407.496z"/>
                                <path id="XMLID_250_" d="M39.281,215.692c5.134-7.146,6.101-18.494,2.287-26.508c-4.057-7.646-17.819-25.141-24.191-18.252
                                    c-6.89,7.356-1.129,36.488,4.039,44.132C26.163,223.064,34.177,222.774,39.281,215.692z"/>
                                <path id="XMLID_251_" d="M166.98,459.016c3.168-0.387,6.211-1.948,8.352-4.636c4.377-5.472,3.51-13.406-1.964-17.768
                                    c0,0-3.731-3.026-10.268-8.24c-23.853-19.178-14.164-10.108-41.492-37.839c-15.902-14.316-36.005-48.623-46-65.104
                                    c-29.519-59.214-28.312-145.258-28.312-145.258s-8.771,78.657,16.885,150.682c8.191,16.489,26.847,55.255,42.651,72.267
                                    c26.912,32.31,18.332,22.734,49.541,52.205c-5.859-0.999-11.059-0.059-13.584,3.581c-4.057,5.648-6.005,26.572,5.31,33.042
                                    c11.364,6.47,28.684-5.712,31.466-12.135C182.479,473.476,176.538,464.504,166.98,459.016z"/>
                                <path id="XMLID_252_" d="M42.87,290.067c2.898-8.306,0.676-19.46-5.248-26.057c-6.308-5.73-30.532-30.388-34.859-22.438
                                    c-5.314,9.255,15.287,47.448,22.756,52.888C32.313,300.883,39.956,298.371,42.87,290.067z"/>
                                <path id="XMLID_253_" d="M70.456,364.827c0.339-10.301-5.891-22.082-14.613-27.539c-8.917-4.28-43.683-24.786-46.033-14.485
                                    c-3.202,12.249,32.561,49.284,42.975,52.824C62.587,380.568,70.135,375.161,70.456,364.827z"/>
                                <path id="XMLID_254_" d="M100.7,406.354c-11.301-1.513-56.398-13.086-55.464-0.966c0.467,14.904,53.435,44.245,66.488,44.26
                                    c12.778,1.996,18.831-6.678,15.192-18.059C123.248,420.13,112.177,409.461,100.7,406.354z"/>
                                <path id="XMLID_255_" d="M387.61,403.118c15.773-16.989,34.442-55.77,42.652-72.267c25.637-72.025,16.882-150.682,16.882-150.682
                                    s1.191,86.044-28.311,145.258c-9.994,16.481-30.386,51.07-46.016,65.104c-28.133,28.552-13.891,15.146-51.729,46.08
                                    c-5.472,4.362-6.374,12.297-1.996,17.768c2.141,2.689,5.183,4.249,8.371,4.636c-9.578,5.496-15.502,14.468-12.587,20.794
                                    c2.799,6.423,20.085,18.605,31.448,12.135c11.332-6.469,9.4-27.394,5.327-33.042c-2.525-3.64-7.74-4.58-13.6-3.581
                                    c0.016-0.017,26.878-25.431,26.895-25.439C367.232,427.598,385.533,405.606,387.61,403.118z"/>
                                <path id="XMLID_256_" d="M442.025,169.321c6.825-1.416,10.561-11.217,7.34-21.727c-2.672-10.736-19.281-35.249-25.848-31.916
                                    c-5.825,3.202-0.645,29.887,1.643,39.191C428.006,164.285,435.17,170.738,442.025,169.321z"/>
                                <path id="XMLID_257_" d="M440.851,216.174c4.781-7.066,3.782-18.799-2.14-25.027c-5.811-6.599-24.819-14.84-28.427-7.501
                                    c-3.346,6.823,7.857,26.589,12.702,33.155C428.087,223.031,436.087,223.289,440.851,216.174z"/>
                                <path id="XMLID_258_" d="M320.283,412.42c-4.055-5.681-19.861-17.06-26.83-13.085c-6.969,4.009-5.423,23.435-2.622,29.855
                                    c2.897,6.359,12.745,8.048,21.439,3.107C320.96,427.325,324.275,418.151,320.283,412.42z"/>
                                <path id="XMLID_259_" d="M429.054,284.386c6.504-5.265,8.756-16.417,4.795-23.806c-3.492-8.079-24.641-30.113-30.049-23.98
                                    c-4.555,5.118,5.425,35.585,7.904,43.392C414.921,287.17,422.551,289.681,429.054,284.386z"/>
                                <path id="XMLID_260_" d="M411.14,324.671c-1.27-10.157-18.365-40.463-26.218-35.489c-6.438,3.894-4.509,39.723-4.476,49.17
                                    C383.554,361.665,416.161,346.946,411.14,324.671z"/>
                                <path id="XMLID_261_" d="M370.452,385.219c2.398-11.652-6.521-50.2-16.754-47.367c-7.952,1.979-17.837,41.186-21.602,51.568
                                    C326.689,416.308,368.15,411.311,370.452,385.219z"/>
                                <path id="XMLID_262_" d="M473.025,215.063c5.15-7.644,10.93-36.776,4.023-44.132c-6.373-6.889-20.119,10.606-24.175,18.252
                                    c-3.829,8.015-2.864,19.362,2.286,26.508C460.263,222.774,468.277,223.064,473.025,215.063z"/>
                                <path id="XMLID_263_" d="M451.57,290.067c2.914,8.304,10.543,10.816,17.335,4.394c7.484-5.44,28.086-43.633,22.774-52.888
                                    c-4.33-7.951-28.552,16.707-34.861,22.438C450.878,270.607,448.658,281.761,451.57,290.067z"/>
                                <path id="XMLID_264_" d="M438.581,337.289c-21.086,13.19-18.492,49.211,3.076,38.339c10.412-3.54,46.175-40.576,42.972-52.824
                                    C482.28,312.503,447.514,333.009,438.581,337.289z"/>
                                <path id="XMLID_265_" d="M393.74,406.354c-11.49,3.107-22.565,13.776-26.234,25.236c-3.637,11.38,2.431,20.055,15.211,18.059
                                    c13.053-0.015,66.006-29.356,66.488-44.26C450.138,393.268,405.04,404.841,393.74,406.354z"/>
                            </g>
                        </svg>
    },
    {
        title: "Contact",
        link: "#contact",
        icon: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M384 48c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H384zM96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H208zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z" /></svg>
    }

];

export const skillsData: Skill[] = [
    {
        tech_img: "../images/skill_1-min.png",
        name: "HTML 5"
    },
    {
        tech_img: "../images/skill_2-min.png",
        name: "CSS 3"
    },
    {
        tech_img: "../images/skill_4-min.png",
        name: "JavaScript ES6+"
    },
    {
        tech_img: "../images/skill_10-min.png",
        name: "TypeScript"
    },
    {
        tech_img: "../images/skill_22-min.png",
        name: "Python"
    },
    {
        tech_img: "../images/skill_23-min.png",
        name: "R Programming"
    },
    {
        tech_img: "../images/skill_24-min.png",
        name: "jQuery"
    },
    {
        tech_img: "../images/skill_3-min.png",
        name: "SASS"
    },
    {
        tech_img: "../images/skill_20-min.png",
        name: "LESS"
    },
    
    {
        tech_img: "../images/skill_5-min.png",
        name: "Bootstrap 5"
    },
    {
        tech_img: "../images/skill_6-min.png",
        name: "Material UI"
    },
    {
        tech_img: "../images/skill_7-min.png",
        name: "Tailwind CSS"
    },
    {
        tech_img: "../images/skill_8-min.png",
        name: "React JS"
    },
    {
        tech_img: "../images/skill_21-min.png",
        name: "Vue JS"
    },
    {
        tech_img: "../images/skill_25-min.png",
        name: "Angular.js"
    }, 
    {
        tech_img: "../images/skill_26-min.png",
        name: "Node JS"
    },
    {
        tech_img: "../images/skill_27-min.png",
        name: "Express JS"
    },
    {
        tech_img: "../images/skill_28-min.png",
        name: "Jest"
    },
    {
        tech_img: "../images/skill_31-min.png",
        name: "Firebase"
    },
    {
        tech_img: "../images/skill_32-min.png",
        name: "MongoDB"
    },
    {
        tech_img: "../images/skill_33-min.png",
        name: "XML"
    },
    {
        tech_img: "../images/skill_12-min.png",
        name: "Rest API "
    },
    {
        tech_img: "../images/skill_13-min.png",
        name: "Git"
    },
    {
        tech_img: "../images/skill_16-min.png",
        name: "Npm"
    },
    {
        tech_img: "../images/skill_17-min.png",
        name: "Yarn"
    },
    {
        tech_img: "../images/skill_15-min.png",
        name: "Github"
    },
    {
        tech_img: "../images/skill_18-min.png",
        name: "Figma"
    },
    {
        tech_img: "../images/skill_19-min.png",
        name: "Adobe XD"
    },
    {
        tech_img: "../images/skill_29-min.png",
        name: "AutoCAD"
    },
    {
        tech_img: "../images/skill_30-min.png",
        name: "Excel"
    },
]

export const jobHistory: history[] = [
    {
        title: "Web Developer",
        company: "InvoUp | Full-time | Remote",
        date: "Apr 2023 - Present"
    },
    {
        title: "Web Developer Mentor",
        company: "DigiEduHack | Part-time | Hybrid",
        date: "Jul 2023 - Dec 2023"
    },
    {
        title: "Software Engineer Internship",
        company: "EY | Full-time | Remote",
        date: "Jan 2023 - Apr 2023"
    },
    {
        title: "Web Developer Internship",
        company: "ABB | Part-time | Hybrid",
        date: "Sep 2022 - Dec 2022"
    },
    {
        title: "IT Specialist",
        company: "bp (British Petroleum) | Part-time | On-site",
        date: "Sep 2021 - Aug 2022"
    }
];

export const educationHistory: history[] = [
    {
        title: "Czech University of Life Sciences Prague",
        name: "Bachelor of Science - Data Science",
        date: "Sep 2023 - Oct 2026"
    },
    {
        title: "Azerbaijan Technical University",
        name: "Bachelor of Engineering - Computer Engineering",
        date: "Jan 2021 - Jan 2024"
    },
    {
        title: "Istanbul Gedik University",
        name: "Technical Degree - Software engineering",
        date: "Sep 2021 - Jun 2022"
    }
];

export const portfolio: PortfolioItem[] = [
    {
        img: "../images/port67.png",
        name: "Chameleon AI (My Startup)",
        demo: "https://chameleonai.tech/",
        demoTxt: 'Preview',
        category: "web"
    },
    {
        img: "../images/port65.png",
        name: "Job Hub Center",
        demo: "https://jobhubcenter.com/en",
        demoTxt: 'Preview',
        category: "web"
    },
    {
        img: "../images/port12.png",
        name: "Medresetuzehra (Blog App)",
        github: "https://github.com/Elchin-Novruzov/Medrese-WebSite",
        demo: "https://www.medresetuzzehra.com/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "web"
    },
    {
        img: "../images/port70.gif",
        name: "2D Pokemon Go with JavaScript",
        github: "https://github.com/Elchin-Novruzov/Advanture-Story-game-2d-With-JavaScript",
        demo: "https://elchin-novruzov.github.io/Advanture-Story-game-2d-With-JavaScript/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "js"
    },
    {
        img: "../images/port68.gif",
        name: "Multiplayer Fight game with JavaScript",
        github: "https://github.com/Elchin-Novruzov/Fight-game-With-JS",
        demo: "https://elchin-novruzov.github.io/Fight-game-With-JS/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "js"
    },
    {
        img: "../images/port71.gif",
        name: "Defense Tower Game with JavaScript",
        github: "https://github.com/Elchin-Novruzov/Tower-Game-with-JS",
        demo: "https://elchin-novruzov.github.io/Tower-Game-with-JS/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "js"
    },
    {
        img: "../images/port29.png",
        name: "Viona Mebel",
        github: "https://github.com/Elchin-Novruzov/Viona-Mebel",
        demo: "https://viona-mebel.vercel.app/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "web"
    },
    
    {
        img: "../images/port46.png",
        name: "Youtube Clone",
        github: "https://github.com/Elchin-Novruzov/Youtube-Clone-StarTube",
        demo: "https://youtube-clone-app-nextjs.vercel.app/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "web"
    },
    {
        img: "../images/port78.png",
        name: "Car Dealer Website Web Scraping",
        github: "https://github.com/Elchin-Novruzov/Car-Dealer-Website-Web-Scraping",
        demo: "",
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "data"
    },
    
    // {
    //     img: "../images/port41.png",
    //     name: "Restaurant Menu",
    //     github: "https://github.com/AzarAhmadov/nextjs-restaurant-menyu",
    //     demo: "https://menuaz.vercel.app/",
    //     githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
    //     demoTxt: 'Preview',
    //     category: "nextJs"
    // },
    {
        img: "../images/port64.png",
        name: "Google Clone",
        github: "https://github.com/Elchin-Novruzov/Google-Clone",
        demo: "https://google-clone-app-nextjs.vercel.app/",
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        demoTxt: 'Preview',
        category: "web"
    },
    {
        img: "../images/port2.png",
        name: "Makonu (Interior Design)",
        github: "https://github.com/Elchin-Novruzov/MakonuNitroTema-WebSite",
        demo: "https://makonu.vercel.app/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "web"
    },
     {
        img: "../images/port73.png",
        name: "Netflix Exploratory Data Analysis",
        github: "https://github.com/Elchin-Novruzov/Netflix-EDA",
        demo: "",
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "data"
    },
     {
        img: "../images/port74.png",
        name: "YouTube Data Scraping",
        github: "https://github.com/Elchin-Novruzov/YouTube-Data-Scraping",
        demo: "",
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "data"
    },
    // {
    //     img: "../images/port62.png",
    //     name: "Link App",
    //     github: "https://github.com/Elchin-Novruzov/Link-App",
    //     demo: "https://elvinnovruzov.com/",
    //     githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
    //     demoTxt: 'Preview',
    //     category: "nextJs "
    // },
    {
        img: "../images/port38.png",
        name: "Park Events",
        github: "https://github.com/Elchin-Novruzov/Park-Events-WebSite",
        demo: "https://parkevents.vercel.app/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "web"
    },
    {
        img: "../images/port80.gif",
        name: "Valentine Day project",
        github: "https://github.com/Elchin-Novruzov/Valentie",
        demo: "https://elchin-novruzov.github.io/Valentie/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "js"
    },
     {
        img: "../images/port77.png",
        name: "Bulldozers Saleprice Regression Project",
        github: "https://github.com/Elchin-Novruzov/Bulldozers-Saleprice-Regression-Project",
        demo: "",
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "data"
    },
    {
        img: "../images/port83.png",
        name: "Python Web Scraping to Excel",
        github: "https://github.com/Elchin-Novruzov/Python-Web-Scraping",
        demo: "",
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "python"
    },
     {
        img: "../images/port76.png",
        name: "Heart Disease Classification Project",
        github: "https://github.com/Elchin-Novruzov/Heart-Disease-Classification-Project",
        demo: "",
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "data"
    },
    {
        img: "../images/port81.png",
        name: "2048 Game with Python",
        github: "https://github.com/Elchin-Novruzov/2048-Python-Game",
        demo: "",
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "python"
    },
    {
        img: "../images/port48.png",
        name: "Crypto App",
        github: "https://github.com/Elchin-Novruzov/Crypto-App",
        demo: "https://crypto-app-rtk.vercel.app/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "web"
    },
    {
        img: "../images/port50.png",
        name: "Imagify",
        github: "https://github.com/Elchin-Novruzov/imagify",
        demo: "https://imagify0.vercel.app/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "web"
    },
    {
        img: "../images/port45.png",
        name: "QR Code Generator",
        github: "https://github.com/Elchin-Novruzov/QR-Code-Generator",
        demo: "https://qr-code-generator0.netlify.app/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "web"
    },
    {
        img: "../images/port36.png",
        name: "Weather App",
        github: "https://github.com/Elchin-Novruzov/React-WeatherApp",
        demo: "https://react-weather-app-liard.vercel.app/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "web",
    },
    {
        img: "../images/port18.png",
        name: "Recipe App",
        github: "https://github.com/Elchin-Novruzov/React-Food-Recipe-App",
        demo: "https://react-food-recipe-app.vercel.app/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "web"
    },
];

export const awardsHistory: history[] = [
    {
        title: "Advanced Web Development Bootcamp Certificate",
        description: "",
        company: "Coders Academy",
        date: "Nov 2023"
    },
    {
        title: "Hackathon Mentor Certificate",
        description: "",
        company: "DigiEduHack & Hack4World Baku",
        date: "Dec 2023"
    },
    {
        title: "Web Marketing Certificate",
        description: "",
        company: "edX",
        date: "Feb 2024"
    },
    {
        title: "Azerbaijan Informatics olympiad(RFO) 3rd Place",
        description: "",
        company: "Azerbaijan Ministry of Education",
        date: "Nov 2022"
    },
    {
        title: "Azerbaijan Mathematics olympiad(RFO) 3rd Place",
        description: "",
        company: "Azerbaijan Ministry of Education",
        date: "Oct 2021"
    },
    {
        title: "National logic olympia 3rd Place",
        description: "",
        company: "Prestij Education Center",
        date: "12 May 2023"
    },
    {
        title: "Pasha Bank Hackathon 1st Place",
        description: "",
        company: "PASHA Holding LLC",
        date: "13 Feb 2023"
    },
    {
        title: "Missiya:2030 Hackathon 1st Place",
        description: "",
        company: "Ministry of Youth and Sport of Azerbaijan Republic",
        date: "31 Jul 2023"
    },
    {
        title: "4th ABB Hackathon 1st Place",
        description: "",
        company: "ABB",
        date: "31 May 2023"
    },
    {
        title: "R.U.Hacking Hackathon Sponsor Prize winner",
        description: "",
        company: "R.U.Hacking?",
        date: "21 Jun 2021"
    },
    {
        title: "Bodybuilding International championship 1st place (Hungary)",
        description: "",
        company: "INBA Global (International Natural Bodybuilding Association)",
        date: "23 Dec 2023"
    },
    {
        title: "Bodybuilding Europa championship 1st place (Georgia)",
        description: "",
        company: "INBA Global & PNBA",
        date: "10 Jun 2024"
    },
    {
        title: "Bodybuilding Azerbaijan championship 1st place",
        description: "",
        company: "INBA Global",
        date: "22 Jun 2022"
    },
    {
        title: "Bodybuilding International championship 2rd place (AZE)",
        description: "",
        company: "INBA Global",
        date: "17 Oct 2022"
    },
    {
        title: "Bodybuilding Eurasia championship 4th place (Slovakia)",
        description: "",
        company: "INBA Global & PNBA",
        date: "25 Jun 2023"
    },
    {
        title: "Bodybuilding Azerbaijan championship 2rd place",
        description: "",
        company: "INBA Global",
        date: "19 Aug 2021"
    },
    {
        title: "Bodybuilding Caspian Cup 4th place (AZE)",
        description: "",
        company: "INBA Global & PNBA",
        date: "03 Nov 2021"
    }
];

export const activitiesHistory: history[] = [
    {
        title: "ICPC Programming Olympiad",
        description: "I represented AzTU in Eurasia semi-finalist, In Kazakhstan, Astana ",
        company: "Example organiser",
        date: "12 Dec 2023"
    },
    {
        title: "CruzHacks 2023 Hackathon",
        description: "Participated, In USA, University of California, Santa Cruz",
        company: "Example organiser",
        date: "11 Sep 2023 - 15 Sep 2023"
    },
    {
        title: "Teknofest",
        description: "Participated, Most biggest tech competition in Turkey",
        date: "27 Sep 2023 - 1 Oct 2023"
    },
    {
        title: "Young European Ambassador",
        description: "Part-time role with the European Commission, based in Prague, Czechia, and conducted remotely",
        date: "Oct 2022 - Mar 2024"
    },
    {
        title: "Student Volunteer at AzTU",
        description: "As a volunteer at THIK, I contributed to organizing university events, representing Azerbaijan Technical University",
        date: "Sep 2022 - Jan 2024"
    },
    {
        title: "Volunteer Staff at Formula 1",
        description: "As a volunteer staff member at the F1 event in Baku, contributing to the success of this prestigious international motorsport event",
        date: "Sep 2022 - Jan 2024"
    },
    {
        title: "Honor from INBA & PNBA",
        description: "My outstanding achievements in competitions, including over 7 wins. Proudly named Sportsman of the Year in 2023",
        date: "Sep 2022 - Jan 2024"
    },
    
];
