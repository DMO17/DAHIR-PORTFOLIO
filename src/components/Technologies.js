import javascript from "../assets/1-javascript.png";
import react from "../assets/2-react.png";
import handlebars from "../assets/3-hbs.png";
import html from "../assets/4-html.png";
import css from "../assets/5-css.png";
import bootstrap from "../assets/6-bootstrap.png";
import materialUi from "../assets/7-material-ui.png";
import tailwind from "../assets/8-tailwind.png";
import nodeJs from "../assets/9-node.png";
import expressJs from "../assets/10-expressjs.png";
import graphQl from "../assets/11-graphql.png";
import mongodb from "../assets/12-mongodb.png";
import MySQL from "../assets/12-MySQL.png";
import github from "../assets/13-github.png";
import heroku from "../assets/14-heroku.png";
import netlify from "../assets/15-netlify.png";
import postman from "../assets/16-postman.png";

export const Technologies = () => {
  const techs = [
    {
      id: 1,
      src: javascript,
      title: "Javascript",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: react,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: handlebars,
      title: "Handlebars",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: html,
      title: "HTML",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: css,
      title: "CSS",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-white",
    },
    {
      id: 7,
      src: materialUi,
      title: "Material-Ui",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-gray-400",
    },
    {
      id: 19,
      src: nodeJs,
      title: "NodeJs",
      style: "shadow-orange-500",
    },
    {
      id: 12,
      src: expressJs,
      title: "Express",
      style: "shadow-blue-500",
    },
    {
      id: 13,
      src: graphQl,
      title: "Graphql",
      style: "shadow-yellow-500",
    },
    {
      id: 14,
      src: mongodb,
      title: "Mongodb",
      style: "shadow-blue-600",
    },
    {
      id: 15,
      src: MySQL,
      title: "MYSQL",
      style: "shadow-sky-400",
    },
    {
      id: 16,
      src: github,
      title: "Github",
      style: "shadow-white",
    },
    {
      id: 17,
      src: heroku,
      title: "heroku",
      style: "shadow-pink-400",
    },
    {
      id: 18,
      src: netlify,
      title: "Netlify",
      style: "shadow-gray-400",
    },
    {
      id: 19,
      src: postman,
      title: "Postman",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
