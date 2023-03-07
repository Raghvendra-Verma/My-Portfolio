import React from "react";
import HeroImage from "../assets/my-photo.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full px-1">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a MERN Stack Developer
          </h2>
          <p className="text-white py-4 max-w-md">
            I have 1 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React JS, Tailwind CSS, JavaScript, Next JS , Node JS , Express JS and MongoDb or MYSQl.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 cursor-pointer"
            >
              My-Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
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

export default Home;
