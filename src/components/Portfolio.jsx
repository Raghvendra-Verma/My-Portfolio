import React from "react";
import socialMediaApp from "../assets/portfolio/socialMediaApp.PNG";
import onlineFood from "../assets/portfolio/onlineFood.PNG";
import miClone from "../assets/portfolio/miClone.PNG";
import SpotifyClone from "../assets/portfolio/SpotifyClone.PNG";
import flipCartClone from "../assets/portfolio/flipCartClone.PNG";
import toDoList from "../assets/portfolio/toDoList.PNG";

const Project = () => {
  const projects = [
    {
      id: 1,
      src: socialMediaApp,
      name:"Social-Media-App"
    },
    {
      id: 2,
      src: SpotifyClone,
      name:"Spotify-Clone"
    },
    {
      id: 3,
      src: miClone,
      name:"MiClone-Clone"
    },
    {
      id: 4,
      src: flipCartClone,
      name:"FlipCart-Clone"
    },
    {
      id: 5,
      src: onlineFood,
      name:"Online-Food_Delivery"
    },
    {
      id: 6,
      src: toDoList,
      name:"To-Do-List"
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My-Projects
          </p>
          <p className="py-6">Check out some of my-projects right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-20">
          {projects.map(({ id, src, name}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="mt-4 flex items-center justify-center">{name}</p>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
