import textEditor from "../assets/text-editor.PNG";
import travelLog from "../assets/travel log.PNG";
import bookSearchEngine from "../assets/book search engine.PNG";
import noteTaker from "../assets/note Taker.PNG";
import pockemon from "../assets/pokedeck.PNG";
import shopFun from "../assets/s1.PNG";
import { ProjectCard } from "./ProjectCard";

const portfolios = [
  {
    id: 1,
    title: "Shop-Fun E-commerce app",
    projectImg: shopFun,
    githubLink: "https://github.com/DMO17/e-commerce-app-client",
    liveDemoLink: "https://shop-fun.herokuapp.com/",
    techs: "REACT|NODEJS|EXPRESS|MONGODB|STRIPE",
  },
  {
    id: 2,
    title: "Schoolify",
    projectImg:
      "https://github.com/DMO17/schoolify-client/raw/main/src/assets/img/homeImg.png",
    githubLink: "https://github.com/DMO17/schoolify-client",
    liveDemoLink: "https://schoolify2022.herokuapp.com/",
    techs: "REACT|NODEJS|GRAPHQL|MONGODB|JWT",
  },
  {
    id: 3,
    title: "Travel Log",
    projectImg: travelLog,
    githubLink: "https://github.com/DMO17/travel-log-map-client",
    liveDemoLink: "https://neon-hotteok-86fa70.netlify.app/",
    techs: "REACT|NODEJS|EXPRESS|MONGODB|mapbox-gl",
  },
  {
    id: 4,
    title: "Book Search Engine",
    projectImg: bookSearchEngine,
    githubLink: "https://github.com/DMO17/book-search-engine-client/tree/dev",
    liveDemoLink: "https://ancient-plains-83258.herokuapp.com/",
    techs: "REACT|NODEJS|GRAPHQL|MONGODB|JWT",
  },
  {
    id: 6,
    title: "TEXT EDITOR",
    projectImg: textEditor,
    githubLink: "https://github.com/DMO17/text-editor",
    liveDemoLink: "https://agile-plains-97304.herokuapp.com/",
    techs: "JS|CSS|HTML|NODEJS|EXPRESS|MONGODB",
  },
  {
    id: 5,
    title: "Model-View-Controller-Tech-Blog",
    projectImg:
      "https://github.com/DMO17/portfolio/blob/main/assets/screenshots/tech-blog.png?raw=true",
    githubLink: "https://github.com/DMO17/Model-View-Controller-Tech-Blog",
    liveDemoLink: "https://tech-blogs-m-v-c.herokuapp.com/",
    techs: "HBS|NODEJS|EXPRESS|SQL",
  },
  {
    id: 7,
    title: "NOTE-TAKER",
    projectImg: noteTaker,
    liveDemoLink: "https://murmuring-basin-33128.herokuapp.com/notes",
    techs: "JS|CSS|HTML|NODEJS|EXPRESS",
  },
  {
    id: 8,
    title: "E-commerce-back-end-orm",
    projectImg:
      "https://github.com/DMO17/portfolio/blob/main/assets/screenshots/e-commerce.png?raw=true",
    githubLink:
      "https://github.com/DMO17/e-commerce-back-end-orm/blob/main/README.md",
    liveDemoLink:
      "https://drive.google.com/file/d/1olYhwqL7l6MGR6DnwRq9S2GOkhSUsGPe/view",
    techs: "NODEJS|EXPRESS|SQL",
  },
  {
    id: 9,
    title: "Pokedecks",
    projectImg: pockemon,
    githubLink: "https://github.com/DMO17/pokemon-deck",
    liveDemoLink: "https://dmo17.github.io/pokemon-deck/",
    techs: "REACT|WEB-API",
  },
  {
    id: 10,
    title: "NoSQL-Social-Network-API",
    projectImg:
      "https://media.istockphoto.com/photos/working-picture-id172175546?s=612x612",
    githubLink: "https://github.com/DMO17/NoSQL-Social-Network-API/tree/dev",
    liveDemoLink:
      "https://drive.google.com/file/d/1BTWENeaGzrTyUB1rPJmjQ-JwOfu77WFQ/view",
    techs: "NODEJS|EXPRESS|MONGODB",
  },
  {
    id: 11,
    title: "Employee-Tracker",
    projectImg:
      "https://github.com/DMO17/employee-tracker/raw/main/screenshots/app-preview-2.PNG",
    githubLink: "https://github.com/DMO17/employee-tracker",
    liveDemoLink:
      "https://drive.google.com/file/d/1T8juFqB1MvFMToUagMeRDp75ay46f5Pt/view",
    techs: "NODEJS|EXPRESS|MYSQL",
  },
  {
    id: 12,
    title: "Team-Profile-Generator",
    projectImg:
      "https://github.com/DMO17/team-profile-generator/raw/dev/dist/assets/images/code-preview.PNG",
    githubLink: "https://github.com/DMO17/team-profile-generator",
    liveDemoLink:
      "https://drive.google.com/file/d/1wB6xwaIL2Ra1J6YIZxavdqfMgsExmtCN/view",
    techs: "NODEJS|EXPRESS|MYSQL|",
  },
  {
    id: 13,
    title: "ReadMe-generator",
    projectImg:
      "https://github.com/DMO17/readme-generator/blob/main/assets/screenshots/code-preview.PNG?raw=true",
    githubLink: "https://github.com/DMO17/readme-generator",
    liveDemoLink:
      "https://drive.google.com/file/d/1_Y32uh2hKJETCJzRm4CNQ0r33kZ36Y9M/view?usp=sharing",
    techs: "NODEJS|INQUIRER|JS|JQUERY",
  },
  {
    id: 14,
    title: "Sound Art Smart",
    projectImg:
      "https://github.com/DMO17/portfolio/blob/main/assets/screenshots/sound-art-smart.PNG?raw=true",
    githubLink: "https://github.com/DMO17/sound-art-smart/tree/main",
    liveDemoLink: "https://gingus55.github.io/sound-art-smart/",
    techs: "JS|JQUERY|HTML|CSS|WEB-API",
  },
  {
    id: 15,
    title: "Weather Dashboard",
    projectImg:
      "https://github.com/DMO17/weather-dashboard/raw/main/assets/screenshots/web-preview-2.PNG",
    githubLink: "https://github.com/DMO17/weather-dashboard",
    liveDemoLink: "https://dmo17.github.io/weather-dashboard/",
    techs: "JS|JQUERY|HTML|CSS|WEB-API",
  },
  {
    id: 16,
    title: "Coding Quiz Challenge",
    projectImg:
      "https://github.com/DMO17/portfolio/blob/main/assets/screenshots/code-quiz.PNG?raw=true",
    githubLink: "https://github.com/DMO17/coding-quiz-challenge",
    liveDemoLink: "https://dmo17.github.io/coding-quiz-challenge//",
    techs: "JS|JQUERY|HTML|CSS",
  },
  {
    id: 17,
    title: "Random Password Generator Js",
    projectImg:
      "https://github.com/DMO17/portfolio/blob/main/assets/screenshots/password-generator.PNG?raw=true",
    githubLink: "https://github.com/DMO17/random-password-generator-javascript",
    liveDemoLink:
      "https://dmo17.github.io/random-password-generator-javascript/",
    techs: "JS",
  },
  {
    id: 18,
    title: "Semantic Html and Css",
    projectImg:
      "https://github.com/DMO17/portfolio/blob/main/assets/images/web-page-preview.png?raw=true",
    githubLink: "https://github.com/DMO17/semantic-html-refactor",
    liveDemoLink: "https://dmo17.github.io/semantic-html-refactor/",
    techs: "HTML|CSS",
  },
];

export const Project = () => {
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-4 sm:px-0">
          {portfolios.map((project) => (
            <ProjectCard {...project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
