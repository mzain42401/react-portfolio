import React from 'react'
import classes from './skills.module.css'
import { IoLogoJavascript } from 'react-icons/io'
import { FaHtml5,FaCss3Alt,FaPython,FaReact,FaBootstrap,FaGitAlt } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { IoLogoFirebase } from "react-icons/io5";
import { SiDialogflow,SiTypescript,SiTailwindcss } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { DiNpm } from "react-icons/di";





const skills = () => {
  const { skillsSection, skillCeneterDiv, myskill,nodejs } = classes
  return (
    <>
      <section className={skillsSection}>

        <div className={skillCeneterDiv}>

         
          <div className={myskill} title='HTML'>
            <FaHtml5 />
          </div>
          <div className={myskill} title='CSS'>
            <FaCss3Alt />
          </div>
          <div className={myskill} title='TailwindCSS'>
            <SiTailwindcss title='TailwindCSS' />
          </div>
          <div className={myskill} title='Bootstrap'>
            <FaBootstrap />

          </div>
          <div className={myskill} title='Javascript'>
            <IoLogoJavascript />
          </div>
          <div className={myskill} title='Javascript'>
           
          <FaPython/>
          </div>
          <div className={myskill}>
            <SiTypescript title='Typescript'/>
          </div>
          <div className={myskill} title='Reactjs'>
            <FaReact />

          </div>
          <div className={myskill} title='Nextjs'>
            <TbBrandNextjs />
          </div>
          <div className={myskill} title='Firebase' >
            <IoLogoFirebase />
          </div>
          <div className={nodejs}>
            <DiNodejs title='NodeJS and Express JS'/>
          </div>
          <div className={myskill} title='npm'>
            <DiNpm/>
          </div>
          <div  className={myskill}  >
          <SiDialogflow title='Dialogflow'/>
          </div>
          
          <div className={myskill} title='git'>
            <FaGitAlt/>
          </div>
        </div>

      </section>

    </>
  )
}

export default skills
