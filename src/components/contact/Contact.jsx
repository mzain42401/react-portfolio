import React from 'react'
import classes from './contact.module.css'

import {FaUserAlt,FaPhoneAlt,FaLocationArrow,FaRegEnvelope} from 'react-icons/fa'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from "sweetalert2"
import {FaLinkedinIn,FaEnvelope,FaGithub,FaWhatsapp} from 'react-icons/fa'

import ReactWhatsapp from 'react-whatsapp';

const Contact = () => {
  const {contact,maxWidth,title,contactContent,column ,text,left,icons,info,row,head,subTitle,fields,field ,name,right,email,textarea,buttonArea,link,icon,whatsapp}=classes
const form=useRef()
  const sendEmail = (e) => {
  
    e.preventDefault();

    emailjs.sendForm('service_1pucuwk', 'template_60oqzio', form.current, 'dxU5hmoz-j9YOAKrn')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your message has sent',
            showConfirmButton: false,
            timer: 2500
          })
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <>
      <section className={contact} id="contact">
        
        <div className={maxWidth}>
            <h2 className={title}>Contact me</h2>
            
            <div className={contactContent}>
                <div className={`${column} ${left}`} >
                    

                    <div className={icons}>
                        <div className={row}>
                          <span>

                            <FaUserAlt/>
                          </span>
                            <div className={info}>
                                <div className={head}>Name</div>
                                <div className={subTitle}>MUHAMMAD ZAIN ALI</div>
                            </div>
                        </div>
                        <div className={row}>
                            <span>
                            <FaRegEnvelope/>

                            </span>
                            <div className={info}>
                                <div className={head}>Email</div>
                                <div className={subTitle}>mzain42401@gmail.com</div>
                            </div>
                        </div>
                        <div className={row}>
                          <span>

                            <FaPhoneAlt/>
                          </span>
                            <div className={info}>
                                <div className={head}>Phone</div>
                                <div className={subTitle}>+92 318 2660 793</div>
                            </div>
                        </div>
                        <div className={row}>
                           <span>

                           <FaLocationArrow/>
                           </span>
                            <div className={info}>
                                <div className={head}>Location</div>
                                <div className={subTitle}>DHA Phase 2, Karachi, Pakistan</div>
                            </div>
                        </div>
                        <div className={row}>

  
                        <div><span className={icon}>
                <ReactWhatsapp className={whatsapp} number="92-318-266-0793" message="Hello!!!"><FaWhatsapp/></ReactWhatsapp></span>      </div>




                <div><a className={link} href="tel:+923182660793" target="_blank"><span className={icon}>
                <FaPhoneAlt /></span>    </a>  </div>

                        <div><a className={link} href="https://github.com/mzain42401" target="_blank"><span className={icon}>
                <FaGithub /></span>    </a>  </div>


                <div><a className={link} href="https://www.linkedin.com/in/mzainali-frontend-developer/" target="_blank"><span className={icon}>
                <FaLinkedinIn /></span>   </a>  </div>


                <div><a className={link}  href = "mailto: mzain42401@gmail.com" ><span className={icon}>
                <FaEnvelope /></span>    </a>  </div>
                        </div>
                    </div>
                </div>
                <div className={`${column} ${right}`}>
                    <div className={text}>Message me</div>
                    <form ref={form} onSubmit={sendEmail} >
                        <div className={fields}>
                            <div className={`${field} ${name}`}>
                                <input type="text" name='user_name' placeholder="Name" id="Name" required/>
                            </div>
                            <div className={`${field} ${email}`}>
                                <input type="email" name='user_email' placeholder="Email" id="Email" required/>
                            </div>
                        </div>
                        <div className={field}>
                            <input type="text" name='subject' placeholder="Subject" id="Subject" required/>
                        </div>
                        <div className={`${field} ${textarea}`}>
                            <textarea cols="30" name='message' rows="10" placeholder="Message.." id="Msj" required></textarea>
                        </div>
                        <div className={buttonArea}>
                            <button type='submit' id="msjBtn" ty >Send message</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Contact


















