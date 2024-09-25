import React from 'react'
import classes from './btn.module.css'
import { useEffect, useState } from 'react'
import {FaArrowUp}  from 'react-icons/fa'


const {btn,myBtn}=classes
  const Btn = ( {btnValue}) => {
return (
  <>
    <button className={btn}> {btnValue}  </button>
  </>
)
}
export default Btn;
export function ScrollToTopButton() {
  const [displayButton, setDisplayButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', scrollFunction);
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);

  const scrollFunction = () => {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      setDisplayButton(true);
    } else {
      setDisplayButton(false);
    }
  };

  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {displayButton && (
        <button id={myBtn} onClick={topFunction} style={{ display: 'block' }}>
         <FaArrowUp/>
        </button>
      )}
    </div>
  );
}




