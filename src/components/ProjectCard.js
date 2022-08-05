export const ProjectCard = ({
  id,
  title,
  projectImg,
  githubLink,
  liveDemoLink,
  techs,
}) => {
  return (
    <div
      key={id}
      className="shadow-md shadow-gray-600 rounded-lg sm:duration-200 sm:hover:scale-105"
    >
      <img src={projectImg} alt={title} className="rounded-md" />
      <h1 className="text-center text-3xl sm:text-4xl font-bold text-white">
        {title}
      </h1>
      <h3 className="text-slate-50 py-4 font-bold text-center">{techs}</h3>

      <div className="flex items-center justify-center">
        <a
          className="underline text-blue-600
                   hover:text-rose-900
                   visited:text-rose-700"
          href={liveDemoLink}
          target="_blank"
          rel="noreferrer"
        >
          <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
            Demo
          </button>
        </a>

        <a
          className="underline text-blue-600
                   hover:text-rose-900
                   visited:text-rose-700"
          href={githubLink}
          target="_blank"
          rel="noreferrer"
        >
          <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
            Code
          </button>
        </a>
      </div>
    </div>
  );
};
