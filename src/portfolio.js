/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Your Summary And Greeting Section

const greeting = {
  username: "Nicolas Brunet	",
  title: "Bonjour, je suis Nicolas !",
  subTitle: emoji(
    "Développeur .NET/C# 👨‍💻, compétences en développement web 🌐, développement d'applications mobiles 📱, Docker 🐳, SQL 🗄️ et Git 📂"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Kqs4-NE8US-qOxSKPNvVq4lsGJ5Dc_rq/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/wwwnic",
  linkedin: "https://www.linkedin.com/in/brunet-nicolas/",
  //facebook: "https://www.facebook.com/nicolasbrunet.qc",
  outlook: "brunet.nicolas@outlook.com",
};

// Your Skills Section

const skillsSection = {
  title: "Mes compétences",
  subTitle:
    "DÉVELOPPEUR POLYVALENT, ENGAGÉ ET TOUJOURS EN QUÊTE DE CONNAISSANCE",
  skills: [
    emoji("💻  Conception d'applications Web avec Java, Angular et C#/.NET"),
    emoji("📱  Conception d'application mobile intuitive avec Kotlin"),
    emoji("🗃️  Conception et maniment de bases de données SQL à des fins applicatives"),
    emoji("🧩  Utilisation de patrons de conception modernes et réputés dans le domaine"),
    emoji("⚡  Développement de tests unitaires automatisés avec JUnit ou équivalent"),
    emoji("🚀  Déploiement de services avec Docker ou des machines virtuelles"),
    emoji("🎧  Calme, patient et à l'écoute des besoins, capacité à vulgariser les concepts"),
    emoji("🌱  En constante évolution et toujours avide d'apprendre de nouvelles technologies"),
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
      classname: "heroicons:plus-20-solid",
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
      role: "Programmeur-Analyste",
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
      role: "Technique en informatique",
	  company: "Collège de Rosemont",
	  companylogo: require("./assets/images/crosemont.png"),
	  date: "août 2020 – juin 2023",
	  desc: "Développement web et mobile",
	  descBullets: [
		"Développement web et microservice",
		"Développement mobile",
		"Méthodologie Agile",
		"Test unitaire",
		"Jeux vidéo",
		"Docker",
		"Git",
		"SQL",
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
      title: "LinkedIn Learning (2023)",
      subtitle: "L'essentiel de .NET 7",
      logo_path: "linkedInLearning.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/801d2f6b3348b5c23030bcf616f69d032e56d8dfe25898a0937b89764cee5cf4",
      alt_name: "L'essentiel de .NET 7",
      color_code: "#e6e6e6 ",
    },
	{
      title: "LinkedIn Learning (2023)",
      subtitle: "Tests unitaires et développement dirigé par les tests",
      logo_path: "linkedInLearning.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/9f4a1ee294dbf32144832e1cabfdbec237d6b54920fe6117ffc78fb20baa7f23",
      alt_name: "Tests unitaires et développement dirigé par les tests",
      color_code: "#e6e6e6 ",
    },
  	{
      title: "LinkedIn Learning (2023)",
      subtitle: "MySQL : Les procédures stockées et les triggers",
      logo_path: "linkedInLearning.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/379871d5fc7b924e212e13b26763273f8996a5e8829d48965d8d2d1dfd347544",
      alt_name: "MySQL : Les procédures stockées et les triggers",
      color_code: "#e6e6e6 ",
    },
	{
      title: "LinkedIn Learning (2023)",
      subtitle: "L'essentiel de Docker",
      logo_path: "linkedInLearning.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/8830c6ec23398005c1f86f27906ea0a3b3d27b6550bf68ac96caab0d625e0fbe",
      alt_name: "L'essentiel de Docker",
      color_code: "#e6e6e6 ",
    },
    {
      title: "Cisco Networking Academy (2021)",
      subtitle: "Introduction à la cybersécurité",
      logo_path: "cisco.png",
      certificate_link:
        "https://drive.google.com/file/d/1ZpRMSjHx4a7l3YDEzt4UDJcRZt-fc26_/view?usp=sharing",
      alt_name: "Introduction à la cybersécurité",
      color_code: "#e6e6e6 ",
    },
	{
      title: "LinkedIn Learning (2023)",
      subtitle: "Sécuriser son site avec un certificat SSL",
      logo_path: "linkedInLearning.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/29c79d50dfaf51d3cccbc13de583edb245c7bfe8a608cea9da787a38ad5d8629",
      alt_name: "Sécuriser son site avec un certificat SSL",
      color_code: "#e6e6e6 ",
    },
	{
      title: "LinkedIn Learning (2023)",
      subtitle: "Sécuriser avec JSON Web Token (JWT)",
      logo_path: "linkedInLearning.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/8c3b1c81eca5e6e32f983d8c46287793dd8688d9072ab297b01ef0d18dffdfbe",
      alt_name: "Sécuriser avec JSON Web Token (JWT)",
      color_code: "#e6e6e6 ",
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Avec l'amour de développer et déployer des choses cool, j'aime écrire et enseigner aux autres ce que j'ai appris.",

  blogs: [
    {
      url: "https://syslog.dti.crosemont.quebec/node/325",
      title: "AUTOMATISEZ LE DÉPLOIEMENT DE VOS CONTENEURS AVEC AMAZON ECS",
      description:
        "Orchestration automatisée de conteneurs, déploiement et de la gestion d'applications conteneurisées, tout y est !",
    },
    {
      url: "https://syslog.dti.crosemont.quebec/node/260",
      title: "STOCKAGE DE DONNÉES AVEC AMAZON S3",
      description:
        "Qu'est ce qu'Amazon S3, Amazon S3 Standard, Amazon Glacier (Archive)? Qu'elles sont les autres possibilités ?",
    },
    {
      url: "https://syslog.dti.crosemont.quebec/node/235",
      title: "LES AVANTAGES D'UTILISER AMAZON EC2",
      description:
        "Comment l'informatique dématérialisée permet-elle d'économiser de l'argent ? !",
    },
  ],
};

const contactInfo = {
  title: emoji("Me contacter ❤️"),
  subtitle: "ma boîte de réception est un espace accueillant ouvert à tous !",
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
