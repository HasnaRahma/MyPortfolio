import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';
import {motion} from "framer-motion";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <Projects />

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
        <div className="Credits">
          <a href="https://www.flaticon.com/" title=" Flaticon icons"> icons created by Freepik - Flaticon</a> &nbsp;&nbsp;&nbsp;
          <a href="https://github.com/shaqdeff/Portfolio-Template/tree/90213d4887074d1d29434f706afad3d12fa33f5f" title="template license">Template created by Shaquille Ndunda</a>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
