import React from "react";
import overtime from "../assets/overtime.jpg";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300"
    >
       <div className="flex flex-col items-center w-full py-20">
        <div className="py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-start w-5/6">
          
          {/* Title */}
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-left pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                Current Projects
              </p>
            </div>
            <div></div>
          </div>

          {/* Content */}
          <div className="w-full px-4 flex flex-col gap-10">
            
            

            {/* Right side */}
            {/*sumary*/}
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="text-2xl font-bold mb-3 text-white">Summary</h2>
                <p className="mb-4">
                  I am currently working on a number of small projects to ensure I keep up to date with technologies. These range from game development
                  to looking a facial reading and LLM's. I am also frequently on many coding platforms such as HackerRank, LeetCode and CodeWars. 
                </p>

                
              </div>
              {/* OverTime */}
              <div>
                <h2 className="text-2xl font-bold mb-3 text-white">OverTime</h2>
                <p className="mb-4">
                  OverTime is a psychological horror game built in Unreal Engine, set within a distorted 
                  workspace that exists beyond normal hours. What begins as a routine late shift slowly 
                  unravels into an unsettling experience where environments shift, loop, and break logic.

                  Focused on tension over jump scares, the game uses environmental storytelling, dynamic 
                  space manipulation, and reactive systems to create unease. The project explores 
                  Blueprint-driven development and state-based world logic, where the environment responds 
                  to player behaviour in real time.

                  The goal is simple: nothing attacks you, yet everything feels wrong.
                </p>

                <img
                  src={overtime}
                  alt="OverTime horror game"
                  className="rounded-md w-full max-w-md"
                />
              </div>

              {/* Face Recognition */}
              <div>
                <h2 className="text-2xl font-bold mb-3 text-white">
                  Face Recognition
                </h2>
                <p>
                  I am currently experimenting with face recognition and computer vision using tools 
                  like OpenFace. This project explores how facial features, expressions, and patterns 
                  can be analysed and interpreted using machine learning, with the long-term goal of 
                  applying this data to creative and interactive systems. It combines my interests in 
                  AI, software engineering, and experimental digital art.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;