import React, { useState } from 'react'
import classes from './clients.module.css'
import { FaAngleLeft, FaAngleRight, FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import zuhaib from '../../images/zuhaib.jpeg'
import mudassir from '../../images/mudassir.jpg'
import huzaifa from '../../images/huzifa.jpg'



const clientsReviews = [
  {
    clientName: "MUDDUSSIR RAZA",
    Img: mudassir,
    clientRank: "Frontend web developer",
    review: "Zain Ali, an exceptional frontend developer, exceeded expectations with remarkable expertise, meticulous attention to detail, and a commitment to seamless user experiences. Highly recommended for technical proficiency and collaborative prowess."
  },
  {
    clientName: "Zuhaib ahmed",
    Img: zuhaib,
    clientRank: "Associate Engineer",
    review: "I highly recommend Zain Ali as a React front-end developer. Their technical skills, problem-solving abilities, and collaborative approach make them an asset to any project."
  },
  {
    clientName: "Huzefa Sheikh",
    Img: huzaifa,
    clientRank: "Mern stack developer",
    review: "I had the pleasure of reviewing Zain's coding work, and I'm impressed. He demonstrated exceptional skill and attention to detail, delivering efficient and creative solutions. I highly recommend Zain for any coding project; he is a true professional."
  }
  
]

const Clients = () => {
  const [indexnum, setindexnum] = useState(0)
  const next = () => {
    if (indexnum === clientsReviews.length - 1) {
      setindexnum(0)
    }
    else {

      setindexnum(indexnum + 1)
    }
  }
  const previous = () => {
    if (indexnum === 0) {
      setindexnum(indexnum + clientsReviews.length - 1)
    }
    else {

      setindexnum(indexnum - 1)
    }
  }
  const { reviewSection, center, leftBtn, righBtn, middle, mdFirst, clientImg, clientName, mdLast, mdSecond, mdThird, rank, testHeading,stars,startNum } = classes
  return (
    <>
      <div id='testimonial' className={testHeading}>Testimonials</div>

      <section className={reviewSection}>

        <div className={center}>

          <div className={leftBtn}><span onClick={previous}><FaAngleLeft /></span></div>
          <div className={middle}>

            <div className={mdFirst}>
              <div > <img className={clientImg} src={clientsReviews[indexnum].Img} alt="" /></div>
              <div className={clientName}>
                <div>{clientsReviews[indexnum].clientName}</div>
                <div className={rank}>{clientsReviews[indexnum].clientRank}</div>
              </div>
            </div>

            <div className={mdSecond}>
              <span><FaQuoteLeft /></span>
            </div>

            <div className={mdThird}>
              {clientsReviews[indexnum].review}
            </div>
            <div className={stars}>
              <span>

                <FaStar />
              </span>

              <span>

                <FaStar />
              </span>

              <span>

                <FaStar />
              </span>
              <span>

                <FaStar />
              </span>
              <span>

                <FaStar />
              </span>
<div className={startNum}>5 out of 5</div>
            </div>

            <div className={mdLast}>
              <span><FaQuoteRight /></span>
            </div>

          </div>
          <div className={righBtn}><span onClick={next}><FaAngleRight /></span></div>
        </div>

      </section>
    </>
  )
}

export default Clients
