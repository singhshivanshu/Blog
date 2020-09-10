export let skillsets =  [
    {
      type: "Platforms",
      icon: "fa-rocket",
      skills: [
        { skill: "Windows", level: "daily-use", but: "success" },
        { skill: "OSX", level: "moderate", but: "info" },
      ],
    },
    {
      type: "Languages",
      icon: "fa-language",
      skills: [
        { skill: "JavaScript", level: "daily-use", but: "success" },
        { skill: "ES6", level: "daily-use", but: "success" },
        { skill: "Python", level: "moderate", but: "info" },
      ],
    },
    {
      type: "Web",
      icon: "fa-globe",
      skills: [
        { skill: "HTML5", level: "moderate", but: "info" },
        { skill: "CSS3", level: "moderate", but: "info" },
        { skill: "Bootstrap", level: "moderate", but: "info" },
        { skill: "MaterialUI", level: "moderate", but: "info" },
        { skill: "React", level: "daily-use", but: "success" },
        { skill: "GatsbyJS", level: "Beginner", but: "danger" },
      ],
    },
    {
      type: "Frameworks",
      icon: "fa-desktop",
      skills: [{ skill: "Django", level: "beginner", but: "danger" }],
    },
    {
      type: "Databases",
      icon: "fa-database",
      skills: [
        { skill: "MySQL", level: "moderate", but: "info" },
        { skill: "PostgreSQL", level: "beginner", but: "danger" },
      ],
    },
    {
      type: "Tools",
      icon: "fa-cogs",
      skills: [
        { skill: "Git", level: "moderate", but: "info" },
        { skill: "GraphQL", level: "beginner", but: "danger" },
        { skill: "Redux", level: "moderate", but: "info" },
      ],
    },
    {
      type: "Others",
      icon: "fa-plus",
      skills: [
        { skill: "Data structure", level: "moderate", but: "info" },
        { skill: "Operating systems", level: "moderate", but: "info" },
      ],
    },
    {
      type: "Notations",
      icon: "fa-map",
      skills: [
        { skill: "Beginner", but: "danger" },
        { skill: "Moderate", but: "info" },
        { skill: "Expert", but: "success" },
      ],
    },
  ]


  export let projects =  [
    {
      topic: "World.",
      technology: ["ReactJS"],
      breif:
        "A Web-app where you can find all the information about all the countries in the world, It has been made using ReactJS, and Vanilla CSS ",
      date: "Aug - 2020",
      logo: "fas fa-globe-asia",
      pro_link: "https://all-countries.netlify.app",
    },
    {
      topic: "Bank Transaction web-app",
      technology: [
        "ReactJS",
        "MaterialUI",
        "Bootstrap",
        "react-pdf",
        "react-router"
      ],
      breif: "A web-app that allows user to do all kind of transactions, along with keeping track of all the past transactions one can also apply for loans by uploading their documents(that can also be previewed ).",
      date: "July - 2020",
      logo: "fas fa-caret-square-right",
      pro_link: "https://github.com/singhshivanshu/Peach-bank"

    },
    {
      topic: "Online shoe store.",
      technology: [
        "ReactJS",
        "MaterialUI",
        "Axios",
        "react-credit-card",
      ],
      breif:
        "A basic prototype of a online shoe store with the functionality of filtering and payment, session storage is used to store the bought items. It has been made using Reactjs, Material-UI, react-credit-cards, axios",
      date: "June - 2020",
      logo: "fab fa-shopify",
      pro_link:
        "https://github.com/singhshivanshu/Happy-Feet-Online-shoe-store",
    },
    {
      topic: "Handwritten text recognizer.",
      technology: [
        "ReactJS",
        "React Bootstrap",
        "Axios",
        "React file reader",
      ],
      breif:
        "A Web-app which recognize all the texts inside an image. It has been made using Reactjs, react bootstarp, axios and react-file-reader.  Google vision API has been used to get the text out of image.",
      date: "May - 2020",
      logo: "fas fa-caret-square-right",
      pro_link:
        "https://github.com/singhshivanshu/Handwritten-text-generator",
    },
    {
      topic: "CSV File Reader.",
      technology: ["ReactJS"],
      breif:
        "A Web-app which reads csv file and covert it into tabular form. It has been made using Reactjs.",
      date: "May - 2020",
      logo: "fas fa-caret-square-right",
      pro_link: "https://github.com/singhshivanshu/CSV-File-Reader",
    },
    {
      topic: "Built a Movie website using API of TMDB.",
      technology: ["ReactJS"],
      breif:
        "This website has list of movies and Tv shows that are trending, highest rated, latest etc. along with the functionality of searching (everything related to movies)",
      date: "April - 2019",
      logo: "fas fa-caret-square-right",
      pro_link: "https://github.com/singhshivanshu/movieOn",
    },
    {
      topic: "Built a responsive personal website from scratch.",
      technology: ["ReactJS", "Bootstrap", "JavaScript"],
      breif:
        "Using React, some NPM packages(vertical-timeline, react-typed etc.) and font-awesome built a personal blog website ",
      date: "Mar - 2020",
      logo: "fab fa-staylinked",
      pro_link: "https://github.com/singhshivanshu/Blog",
    },
    {
      topic: "Speech Processing using wavelet transform.",
      technology: ["MATLAB"],
      breif:
        "Using wavelet transform in speech enhancement system got the utmost details of the speech signal by maintaining the quality and intelligibility of the speech ",
      date: "Jan - 2019",
      logo: "fab fa-audible",
      pro_link: "#",
    },
  ]