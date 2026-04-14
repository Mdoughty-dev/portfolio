import React from "react";
import overtime from "../assets/overtime.jpg";
import open from "../assets/openface.jpeg";
import video from "../assets/video/teaser.mp4";
import openVid from "../assets/video/patris_out.mp4";
import overtimeVid from "../assets/video/overtime_demo.mp4";

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
            {/* Summary */}
            <div>
              <h2 className="text-2xl font-bold mb-3 text-white">Summary</h2>
              <p className="mb-4">
                I am currently working on a number of small projects to ensure I
                keep up to date with technologies. These range from game
                development to facial reading and LLMs. I am also frequently on
                many coding platforms such as HackerRank, LeetCode and
                CodeWars.
              </p>
            </div>

            {/* OverTime */}
            <div>
              <h2 className="text-2xl font-bold mb-3 text-white">OverTime</h2>
              <p className="mb-4">
                OverTime is a psychological horror game built in Unreal Engine,
                set within a distorted workspace that exists beyond normal
                hours. What begins as a routine late shift slowly unravels into
                an unsettling experience where environments shift, loop, and
                break logic.
                <br />
                <br />
                Focused on tension over jump scares, the game uses
                environmental storytelling, dynamic space manipulation, and
                reactive systems to create unease. The project explores
                Blueprint-driven development and state-based world logic, where
                the environment responds to player behaviour in real time.
                <br />
                <br />
                The goal is simple: nothing attacks you, yet everything feels
                wrong.
              </p>

              <img
                src={overtime}
                alt="OverTime horror game"
                className="rounded-md w-full max-w-md mb-4"
              />

              <video className="w-full max-w-[750px] h-auto" controls>
                <source src={overtimeVid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Face Recognition */}
            <div>
              <h2 className="text-2xl font-bold mb-3 text-white">
                Face Recognition
              </h2>
              <p className="mb-4">
                I am currently experimenting with face recognition and computer
                vision using tools like OpenFace. This project explores how
                facial features, expressions, and patterns can be analysed and
                interpreted using machine learning, with the long-term goal of
                applying this data to creative and interactive systems. It
                combines my interests in AI, software engineering, and
                experimental digital art.
              </p>

              <img
                src={open}
                alt="openface"
                className="rounded-md w-full max-w-md mb-4"
              />

              <video className="w-full max-w-[750px] h-auto" controls>
                <source src={openVid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Deadman's Wrath */}
            <div>
              <h2 className="text-2xl font-bold mb-3 text-white">
                Deadman's Wrath
              </h2>
              <p className="mb-4">
                I am currently developing a 2D game project set in a dark,
                narrative-driven world. In this unique setting, divine forces
                have revealed themselves by destroying all religious monuments.
                As a result, worship no longer offers salvation; instead, it
                leads to transformation, turning individuals into dangerous and
                unpredictable threats.
                <br />
                <br />
                This project has provided an opportunity to delve into various
                game systems, including real-time combat, animation state
                management, and scalable rendering. Additionally, I am
                experimenting with world-building and atmosphere. The game is
                being built using Python and PyGame.
              </p>

              <video className="w-full max-w-[750px] h-auto" controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;