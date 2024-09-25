import React, { useEffect } from 'react'
import Aos from "aos";

import 'aos/dist/aos.css'
import classes from './services.module.css'
import {AiFillGithub,AiFillApi } from 'react-icons/ai'
import { FaLinkedinIn,FaCode,FaCubes,FaPenNib,FaRobot,FaGoogle } from 'react-icons/fa'
import { SiSpringsecurity,SiOpenai,SiFirebase,SiDialogflow ,SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from 'react-icons/tb'


const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  })
  const { servicesSection, mainIconDiv, iconDiv, servicesCenterDiv, myService, logo, name, discription } = classes
  return (
    <>
      <section id='services' className={servicesSection}>
        <div className={mainIconDiv}>
          <div className={iconDiv}> <a rel="noreferrer" href="https://www.fiverr.com/mzain42401?up_rollout=true" target='_blank'><span><TbBrandFiverr /></span>Fiverr</a></div>
          <div className={iconDiv}> <a rel="noreferrer" href="https://www.linkedin.com/in/mzainali-frontend-developer/" target='_blank'><span><FaLinkedinIn /></span>LinkedIn</a></div>
          <div className={iconDiv}> <a rel="noreferrer" href="https://www.upwork.com/freelancers/~01be2974fad9af6487" target='_blank'><span> <SiUpwork /></span> Upwork</a></div>
          <div className={iconDiv}><a rel="noreferrer" href="https://github.com/mzain42401" target='_blank'><span><AiFillGithub /></span> Github</a></div>



        </div>

        <h1>My Services</h1>

        <div className={servicesCenterDiv}>

        <div className={myService} data-aos="flip-right">
            <div className={logo}>

              <FaRobot />
            </div>
            <div className={name}>
              Chatbot Solution
            </div>
            <div className={discription}>
            I created a chatbot designed to interact with users through natural language. It can answer questions, provide information, and assist with various tasks. The chatbot leverages AI to understand and respond to user inputs effectively.
            </div>

          </div>
          <div className={myService} data-aos="flip-right">
            <div className={logo}>

              <FaGoogle />
            </div>
            <div className={name}>
              Google Gemini
            </div>
            <div className={discription}>
            Google's AI technology for natural language understanding and response generation. It interacts with users, processes their inputs, and provides relevant answers or performs tasks based on their requests.
            </div>

          </div>
          <div className={myService} data-aos="flip-right">
            <div className={logo}>

              <SiOpenai/>
            </div>
            <div className={name}>
              OpenAI ChatGPT
            </div>
            <div className={discription}>
          Leveraging OpenAI's ChatGPT advanced language processing capabilities. This bot can understand and generate human-like text responses and is designed to assist with a wide range of tasks, from answering questions to engaging in conversations.
            </div>

          </div>
          <div className={myService} data-aos="flip-up" >
            <div className={logo}>

              <SiDialogflow />
            </div>
            <div className={name}>
              Dialogflow
            </div>
            <div className={discription}>
            Dialogflow is Google Cloud platform for building conversational AI applications. The bot can understand natural language input, process it, and respond appropriately. It leverages machine learning to improve its interactions over time.
            </div>

          </div>
          
          <div className={myService} data-aos="flip-right">
            <div className={logo}>

              <FaCode />
            </div>
            <div className={name}>
              Web Design
            </div>
            <div className={discription}>
              Creating visually appealing layouts, colors, and typography for websites to engage users effectively. Effective web design is crucial for capturing and retaining the attention of online audiences.
            </div>

          </div>
          <div className={myService} data-aos="flip-down">
            <div className={logo} >

              <FaCubes />
            </div>
            <div className={name}>
              Responsive Design
            </div>
            <div className={discription}>
              Ensuring websites adapt seamlessly to various screen sizes and devices.This practice enhances accessibility and usability, as users can interact with the same content regardless of their device, improving overall user satisfaction .
            </div>

          </div>
          <div className={myService} data-aos="flip-right">
            <div className={logo}>

              <FaPenNib />
            </div>
            <div className={name}>
              Testing and Debugging
            </div>
            <div className={discription}>
              Identifying and fixing bugs and issues in frontend code and layout also identifying, and resolving issues or errors that prevent it from functioning as intended.
            </div>

          </div>
          <div className={myService} data-aos="flip-up">
            <div className={logo}>

              <AiFillApi />
            </div>
            <div className={name}>
              API Integration
            </div>
            <div className={discription}>
              Connecting the frontend to external APIs (Application Programming Interfaces) to fetch and display data.Linking frontend with external data sources through APIs for dynamic content.
            </div>

          </div>
          <div className={myService} data-aos="flip-up">
            <div className={logo}>

              <SiFirebase />
            </div>
            <div className={name}>
           Firebase
            </div>
            <div className={discription}>
            Offering a suite of services including real-time database, authentication, hosting, cloud functions, and more, simplifying the development process and enabling features like real-time updates and seamless user authentication.
            </div>

          </div>
          


        </div>
      </section>
    </>
  )
}

export default Services
