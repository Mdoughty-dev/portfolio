import React from 'react';
import code from '../assets/code2.png';
import qwen from '../assets/qwen.png'
import forbiddenKnowledge from "../assets/forbiddenKnowledge.png";
import project2 from '../assets/Hellraiser.png';
import nc from '../assets/nc_news.png'
import minitalk from '../assets/minitalk.jpg'
import deadman from '../assets/deadmans.png'

const Works = () => {
  return (
    <div name='work' className='w-full md:min-h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        {/* Header */}
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>Work</p>
          <p className='py-6 text-2xl'>Check out some of my most recent projects</p>
        </div>

        {/* Grid of Projects */}
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8'>

          {/* Project 1 */}
          <div
            style={{ backgroundImage: `url(${forbiddenKnowledge})` }}
            className='h-80 w-full bg-cover bg-center bg-no-repeat shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto'
          >
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col bg-black/70 w-full h-full rounded-md'>
              <span className='text-lg font-bold text-white tracking-wider'>Forbidden Knowledge</span>
              <p className='text-center px-4'>Forbidden Knowledge is a browser-based multiplayer horror quiz RPG, built as part of a collaborative 
                full-stack projectn.</p>
              <div className='pt-4 text-center'>
                <a href='https://eldritch-game.netlify.app/' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-sm'>Demo</button>
                </a>
                <a href='https://github.com/Mdoughty-dev/Eldritch_Game' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-sm'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div
            style={{ backgroundImage: `url(${project2})` }}
            className='h-80 w-full bg-cover bg-center bg-no-repeat shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto'
          >
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col bg-black/70 w-full h-full rounded-md'>
              <span className='text-lg font-bold text-white tracking-wider'>Hellraiser</span>
              <p className='text-center px-4'>Game build from scratch using C and Minlibx based on the film and book 'Hellraiser' by Clive Barker</p>
              <div className='pt-4 text-center'>
                <a href='https://your-weather-demo.com' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-sm'>Demo</button>
                </a>
                <a href='https://github.com/Mdoughty-dev/Code-Examples/tree/main/Common_Core/So_long' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-sm'>Code</button>
                </a>
              </div>
            </div>
          </div>

	   {/* Project 3 */}
          <div
            style={{ backgroundImage: `url(${minitalk})` }}
            className='h-80 w-full bg-cover bg-center bg-no-repeat shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto'
          >
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col bg-black/70 w-full h-full rounded-md'>
              <span className='text-lg font-bold text-white tracking-wider'>MiniTalk</span>
              <p className='text-center px-4'>Designed and implemented a client/server communication system using UNIX signals,
                 focusing on low-level inter-process communication, bitwise data encoding/decoding, signal handling, and error management. 
                Emphasised reliability, synchronisation, and understanding how data is transmitted at a systems level.</p>
              <div className='pt-4 text-center'>
                <a href='https://github.com/Mdoughty-dev/my_minitalk' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-sm'>Demo</button>
                </a>
                <a href='https://github.com/Mdoughty-dev/my_minitalk' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-sm'>Code</button>
                </a>
              </div>
            </div>
          </div>

 {/* Project 4 */}
          <div
            style={{ backgroundImage: `url(${qwen})` }}
            className='h-80 w-full bg-cover bg-center bg-no-repeat shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto'
          >
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col bg-black/70 w-full h-full rounded-md'>
              <span className='text-lg font-bold text-white tracking-wider'>Grid Combat</span>
              <p className='text-center px-4'>Designed and implemented a grid-based combat system featuring state management, turn logic, 
                and core gameplay algorithms, with a focus on clean structure and extensibility. 
                Created as part of a challenge to produce a Level 2 coding task that could not be solved by AI models such as Qwen.</p>
              <div className='pt-4 text-center'>
                <a href='https://github.com/Mdoughty-dev/grid_combat' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-sm'>Demo</button>
                </a>
                <a href='https://github.com/Mdoughty-dev/grid_combat' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-sm'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${nc})` }}
            className='h-80 w-full bg-cover bg-center bg-no-repeat shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto'
          >
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col bg-black/70 w-full h-full rounded-md'>
              <span className='text-lg font-bold text-white tracking-wider'>NC News</span>
              <p className='text-center px-4'>The NC News API is a RESTful backend service built with Node.js, Express, and PostgreSQL.
                 It provides structured access to news platform data including topics, users, articles, and comments.
                 This project demonstrates:MVC-style separation of concerns, PostgreSQL querying using pg, Query validation and error handling ,Environment-based configuration</p>
              <div className='pt-4 text-center'>
                <a href='https://nc-news-md.netlify.app/' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-sm'>Demo</button>
                </a>
                <a href='https://github.com/Mdoughty-dev/databases' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-sm'>Code</button>
                </a>
              </div>
            </div>
          </div>
         
         <div
            style={{ backgroundImage: `url(${deadman})` }}
            className='h-80 w-full bg-cover bg-center bg-no-repeat shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto'
          >
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col bg-black/70 w-full h-full rounded-md'>
              <span className='text-lg font-bold text-white tracking-wider'>Deadman's Wrath</span>
              <p className='text-center px-4'>A small rpg build using pycharm and python reminiscent of ff7 feels, combining surealism, horror and good old
                fashioned rpg stroy telling.
              </p>
              <div className='pt-4 text-center'>
                <a href='https://nc-news-md.netlify.app/' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-sm'>Demo</button>
                </a>
                <a href='https://github.com/Mdoughty-dev/databases' target="_blank" rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-sm'>Code</button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Works;

