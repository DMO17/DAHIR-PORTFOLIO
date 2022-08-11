import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Typewriter from "typewriter-effect";
import myPDF from "../assets/DAHIR-MOHAMED-CV.pdf";

export const Home = () => {
  const HeroImage =
    "https://c4.wallpaperflare.com/wallpaper/632/34/549/technology-monitor-alpha-coders-binary-wallpaper-preview.jpg";
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-4/6">
          <h1 className="text-5xl sm:text-7xl font-bold text-white">
            Hi, I'M Dahir Mohamed
          </h1>
          <p className="text-gray-500 py-4  max-w-md ">
            I have experience building and designing softwares and applications.
            Currently, I love to work on web application using technologies like
            React, Tailwind, NodeJs and GraphQL.
          </p>
          <h2 className="text-slate-50 py-4 max-w-md text-2xl sm:text-4xl font-bold">
            <Typewriter
              options={{
                strings: [
                  "Web Developer 💻",
                  "Full Stack Developer 🌐",
                  "MERN STACK 😎",
                  "Enthusiastic Developer 🔴",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <a className="contact-info-item" href={myPDF} download="cv">
            <div className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </div>
          </a>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};
