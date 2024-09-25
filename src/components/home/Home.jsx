import React, { useEffect } from "react";
import classes from './home.module.css'
import Aos from "aos";
import 'aos/dist/aos.css'
import Typewriter from "typewriter-effect";
import   { ScrollToTopButton } from "../Btn/Btn";
import myCV from '../../cv/myCV.pdf'


const Home = () => {
  const { homeContainer, homeCenterDiv, homeContentDiv, wave, typewriter, content,  btnDiv,cvBtn } = classes

  useEffect(() => {
    Aos.init({ duration: 1500 })
  })
  return (
    <>
      <section id="home" className={homeContainer}>
    <ScrollToTopButton/>
        <div className={homeCenterDiv}>
          <div className={homeContentDiv}>
            <h1 data-aos="fade-right">
              Hi, I'm Zain
              <span className={wave} role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <div className={typewriter} data-aos="fade-up">
              <Typewriter
                options={{
                  strings: [
                    "MERN Stack Developer",
                    "Freelancer",
                    "Chatbot Developer",
                    "Generative AI "
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 20,
                  
                }}
              />
            </div>
            <div className={content} data-aos="fade-up">
              <p>
              {/* 🚀 */}
              I'm a versatile developer🚀 proficient in  MERN stack technologies and Generative AI chatbot🤖 development. With a passion for crafting intuitive user experiences,✨ I specialize in leveraging cutting-edge technologies to build innovative solutions that enhance interaction and productivity.
              
              </p>
            
              <div className={btnDiv}>
              <a href={myCV} download="CV" className={cvBtn} > Download CV </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
