import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-14">
        I am Raghvendra Verma a final year student at JSSATE, Noida. I am a Mern Full Stack Web Developer having specialization in Backend & Front end development. I have very keen interest in solving real world problems through my development skills. I have 1 years experience in Web Development having strong ReactJs and NodeJs Skills. I have worked on Backend technologies which includes Node.JS, ExpressJs and Database technologies such as MongoDB and MySQL. I also possess Frontend Skills in HTML, CSS, JavaScript, ReactJs, Bootstrap, TailwindCSS and NextJS .
        </p>

        <br />

        <p className="text-xl">
        I am actively exploring new technologies to bring optimized solutions with minimal efforts for the user. I can learn and work on any technology if it's interesting.
        </p>
      </div>
    </div>
  );
};

export default About;
