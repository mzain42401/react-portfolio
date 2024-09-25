import React from 'react'
import classes from './footer.module.css'
const Footer = () => {
  let date=new Date()
  let year=date.getFullYear()
    const {footer}=classes
  return (
    <>
      <section className={footer}>
<span> MUHAMMAD ZAIN ALI</span> | <span>{year}</span> 
      </section>
    </>
  )
}

export default Footer
