import React, { useEffect } from 'react'
import classes from './about.module.css'
// import MyImage from "../../images/zain.png"
import MyImage from "../../images/mylogo.png"

import Btn from '../Btn/Btn';
import Aos from "aos";
import 'aos/dist/aos.css'

const About = () => {
  const { aboutPageContainer, aboutCenterDiv, myImageDiv, myPersonalImage, aboutMeDiv, aboutContent, btnDiv, picContentDiv } = classes
  useEffect(() => {
    Aos.init({ duration: 1500 })
  })
  return (
    <>
      <section id='about' className={aboutPageContainer}>
        <div className={aboutCenterDiv}>

          <div className={picContentDiv}>
            <div className={myImageDiv} data-aos="fade-right">
              <div className={myPersonalImage}>
                <img src={MyImage} alt="" />
              </div>
            </div>
            <div className={aboutMeDiv} data-aos="fade-up">
              <h1>Let's Get Digital!</h1>
              <p className={aboutContent}>
              Elevate your digital presence with a seamless blend of web development and AI-driven innovation. I specialize in crafting dynamic, responsive websites using technologies like React, Next.js, and Tailwind CSS, ensuring an exceptional user experience across all devices. Alongside this, I integrate advanced AI solutions, including chatbots and generative models, to create smarter, more interactive platforms. By merging cutting-edge technology with top-tier web design, I deliver solutions that not only look great but also enhance engagement and efficiency. Let’s collaborate to build a digital experience that truly stands out!</p>
              <div className={btnDiv}>
                <a href="#contact">   <Btn btnValue="Contact Me" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
