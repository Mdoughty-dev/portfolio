import React from "react";


const About = () => {
  return (
    // Main container with full width/height and background
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      {/*Content container with cyan background*/}
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/*Title section using grid */}
        <div className="py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
            {/*Content section with responsive grid*/}
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Matt Doughty, nice to meet you. Please take a
                look around at some of the work I have done. 
              </p>
            </div>
            <div>
              <p>
                Software Developer with a strong creative technology background and a fast-learning, experimental approach to problem-solving. 
                Experienced in building educational software, games, and interactive systems using C, C++, JavaScript, Python, and SQL. 
                Skilled in full-stack development, working across both backend and frontend technologies.
                Originally trained as an artist working with large-scale digital installations and audio-visual systems, 
                which led to a focused transition into software development through postgraduate research, alongside formal computer science training 
                at 42 London, with a primary focus on low-level programming in C. Currently completing a Level 4 Diploma in Software Development at Northcoders, 
                supplemented by extensive self-study. Brings strong problem-solving ability, adaptability, and a well-rounded skill set across frontend 
                and backend development, alongside clear technical communication skills developed through software projects, technical mentoring, and 
                collaborative environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;
