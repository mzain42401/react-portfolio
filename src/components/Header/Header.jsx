import React from 'react'
import { useRef, useState } from 'react';
import classes from './header.module.css'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const Headers = () => {
  const {
    navbar,
    logo,
    navToggleBtn,
    active
  }=classes
  let [initial, setInitial] = useState(true)
  let navRef = useRef()

  const toggleIcons = () => {
    setInitial(!initial)
    showNav()
  }


  const showNav = () => {
    navRef.current.classList.toggle(active)
  }


  return (
    <>


      <nav className={navbar}>
        <div className={logo}>
          
        <p><span>&lt;</span> zain ali <span>/&gt;</span> </p>


        </div>

        <ul ref={navRef}>
          <li>
            <a onClick={toggleIcons} href="#home">HOME</a>
          </li>
          <li>
            <a onClick={toggleIcons}  href="#about">ABOUT</a>
          </li>
          <li>
            <a onClick={toggleIcons}  href="#services">SERVICES</a>
          </li>
          
          <li>
            <a onClick={toggleIcons}  href="#projects">PROJECTS</a>
          </li>
          <li>
            <a onClick={toggleIcons}  href="#testimonial">TESTIMONIALS</a>
          </li>
          <li>
            <a onClick={toggleIcons}  href="#contact">CONTACT</a>
          </li>
        </ul>

        <div className={navToggleBtn} onClick={toggleIcons}>
          {initial ? <MenuOutlined /> : <CloseOutlined />}
        </div>
      </nav>
    </>
  );
}

export default Headers