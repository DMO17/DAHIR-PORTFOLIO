import { useMediaQuery } from "react-responsive";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Fragment } from "react";

const links = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/dahir-m-765a45218/",
    style: "rounded-tr-md",
    logo: <FaLinkedin size={50} />,
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/",
    logo: <FaGithub size={50} />,
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: "dmoha0123@gmail.com",
    logo: <HiOutlineMail size={50} />,
  },
  {
    id: 4,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: "/resume.pdf",
    style: "rounded-br-md",
    download: true,
    logo: <BsFillPersonLinesFill size={50} />,
  },
];

const SideBar = () => {
  return (
    <div className=" lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <div
      name="socials"
      className="flex justify-center items-center w-full h-40 px-4 text-white bg-black "
    >
      {links.map(({ id, href, style, logo }) => (
        <div
          key={id}
          className=" px-4  hover:mb-[30px] hover:rounded-md duration-300"
        >
          <a
            className="flex justify-between items-center w-full text-white"
            target="_blank"
            rel="noreferrer"
            href={href}
          >
            {logo}
          </a>
        </div>
      ))}
    </div>
  );
};

export const SocialLinks = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1160px)",
  });
  return (
    <Fragment>
      {isDesktopOrLaptop && <SideBar />}
      <Footer />
    </Fragment>
  );
};
