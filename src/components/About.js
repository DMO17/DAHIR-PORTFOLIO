export const About = () => {
  return (
    <div
      name="about"
      className="w-full sm:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="sm:pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Recent graduate in full stack development from the University of
          Birmingham. I am eager to learn new skills at every opportunity and
          enjoy challenging environments; allowing me to grow in knowledge as a
          coder and as an employee.
        </p>

        <br />

        <p className="text-xl">
          I am an Innovative problem-solver who is passionate about developing
          full stack applications with a focus on backend operations involving
          data structure and creating Restful Api's. Strengths in creativity,
          teamwork, and building projects from ideation to execution.
        </p>
      </div>
    </div>
  );
};
