/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Your Summary And Greeting Section

const greeting = {
  username: "Nicolas Brunet	",
  title: "Salut, je suis Nicolas !",
  subTitle: emoji(
    "Développeur .NET/C# Junior 👨‍💻 | Compétences en développement Web 🌐, développement d'applications mobiles 📱, Docker 🐳, SQL 🗄️ et Git 📂"
  ),
  resumeLink:
    "https://drive.google.com/file/d/13kLjcPa_BXeRU4lUYt03VoD02KOlxssK/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/wwwnic",
  linkedin: "https://www.linkedin.com/in/brunet-nicolas/",
  gmail: "brunet.nicolas@outlook.com",
  facebook: "https://www.facebook.com/nicolasbrunet.qc",
};

// Your Skills Section

const skillsSection = {
  title: "Mes compétences",
  subTitle: "DÉVELOPPEMENT WEB, DÉVELOPPEMENT MOBILE ET LES TECHNOLOGIES CONNEXES",
  skills: [
    emoji(
      "⚡ Conception d'application Web et Android avec Java, Angular et C#/.NET"
    ),
    emoji("⚡ Développement de tests unitaires automatisés avec JUnit ou équivalent"),
    emoji(
      "⚡ Déploiement des services avec Docker ou des machines virtuelles"
    )
  ],

softwareSkills: [
    {
      skillName: "Java",
      classname: "logos:java",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Angular",
      classname: "vscode-icons:file-type-angular",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "C#",
      classname: "vscode-icons:file-type-csharp",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "JUnit",
      classname: "devicon:junit",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Git",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "MySQL",
      classname: "vscode-icons:file-type-mysql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Visual Studio",
      classname: "logos:visual-studio",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Android studio",
      classname: "devicon:androidstudio",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Docker",
      classname: "vscode-icons:file-type-docker",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Maven",
      classname: "vscode-icons:file-type-maven",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "et plus",
      classname: "heroicons:plus-20-solid" ,
      style: {
        color: "#080",
        backgroundColor: "transparent",
      },
    },
  ],
};





// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true,
  experience: [
    {
      role: "Développeur JavaScript",
      company: "AzurDev",
      companylogo: require("./assets/images/azurdev.png"),
      date: "mars 2023 – mai 2023",
      desc: "Création d'un jeu Candy Crush pour smart TV de A à Z.",
      descBullets: [
        "Visual Studio Code",
        "Apache",
        "Modèle-vue-présentation (MVP)",
        "Télévision",
        "JS ES5",
        "Canvas",
        "JavaScript",
        "HTML",
      ],
    },
    {
      role: "Préposé aux travaux",
      company: "Habitations communautaires Loggia",
      companylogo: require("./assets/images/loggia.png"),
      date: "mai 2018 – déc. 2022",
	  desc: "Entretien des propriétés, services aux résidents, peinture",
      descBullets: [
	    "Préparation des logements pour les nouveaux locataires",
        "Organisation des lieux pour des événements spéciaux",
        "Fournir un excellent service aux résidents",
        "Réparations diverses dans les logements",
	    "Peinture intérieure et extérieure",
		"Soutien technique occasionnel",
        "Entretien des lieux",
      ],
    },
  ],
};



/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to false
  display: false, // Set false to hide this section, defaults to true
};

// Your certifications

const certifications = {
  certifications: [
    {
		
      title: "Selenium",
      subtitle: "- Vskills",
      logo_path: "vskills-logo.png",
      certificate_link:
        "https://www.vskills.in/certification/40215-certified-selenium-professional-bharat-babu-kammakatla",
      alt_name: "Vskills",
      color_code: "#F6EAEA",
    },

  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.bharatkammakatla.com/selenium-python-automation-framework-how-to-build-cke5vij9p012h9ds1fsaocyax",
      title: "How to build a Selenium Python Automation Framework",
      description:
        "Interested in building a test automation framework with selenium and python? If so, check out here !",
    },
    {
      url:
        "https://blog.bharatkammakatla.com/steps-to-build-a-selenium-java-framework-ckdsi73xg005ga9s1defhemfz",
      title: "Steps to build a Selenium Java Automation Framework",
      description:
        "Interested in building a test automation framework with selenium and java? If so, check out here !",
    },
    {
      url:
        "https://blog.bharatkammakatla.com/face-expression-recognition-using-keras-and-cnns-ckbevmufo0195dis1dfs10kt1",
      title: "Building a Machine Learning model to detect human emotions",
      description:
        "Are you interested to know how machines detect human emotions? If so, check out here !",
    },
    {
      url:
        "https://medium.com/@bharatkammakatla/basic-end-to-end-scikit-learn-workflow-cd9e9a50491b?source=friends_link&sk=b828ac262c172abd7508efcbd00e5bd3",
      title: "Basic End-to-End Scikit-Learn workflow",
      description:
        "Do you want to know how a basic end-to-end scikit-learn workflow is implemented ? If so, check out here !",
    },
  ],
};

const contactInfo = {
  title: emoji("Me contacter ❤️"),
  subtitle:
    "ma boîte de réception est un espace accueillant ouvert à tous !",
  number: "+1 (514) 572-4393",
  email_address: "brunet.nicolas@outlook.com",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  openSource,
  blogSection,
  contactInfo,
  certifications,
};
