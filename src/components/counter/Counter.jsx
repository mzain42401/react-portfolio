import React, { useState } from 'react'
import { BsSuitHeart } from 'react-icons/bs'
import classes from './counter.module.css'
import CountUp from "react-countup"
import ScrollTrigger from 'react-scroll-trigger'

const Counter = () => {
  const { counterCenterDiv, myCounter, counterlogo, counterNum, counterName } = classes
  const [count, setCount] = useState(false)
  const { counterSection } = classes
  return (
    <>
    
      <section className={counterSection}>

        <div className={counterCenterDiv}>

          <div className={myCounter}>

            <div className={counterlogo}>
              <BsSuitHeart />
            </div>
            <div className={counterNum}>
              <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                <h1>
                  {
                    count && <CountUp start={0} end={100} duration={3} delay={0} />
                  }
                </h1>
              </ScrollTrigger>
            </div> 
            <div className={counterName}>
              client
            </div>
          </div>
          <div className={myCounter}>

            <div className={counterlogo}>
              <BsSuitHeart />
            </div>
            <div className={counterNum}>
              <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                <h1>
                  {
                    count && <CountUp start={0} end={100} duration={3} delay={0} />
                  }
                </h1>
              </ScrollTrigger>
            </div>
            <div className={counterName}>
              client
            </div>
          </div>
          <div className={myCounter}>

            <div className={counterlogo}>
              <BsSuitHeart />
            </div>
            <div className={counterNum}>
              <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                <h1>
                  {
                    count && <CountUp start={0} end={100} duration={3} delay={0} />
                  }
                </h1>
              </ScrollTrigger>
            </div>
            <div className={counterName}>
              client
            </div>
          </div>
          <div className={myCounter}>

            <div className={counterlogo}>
              <BsSuitHeart />
            </div>
            <div className={counterNum}>
              <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                <h1>
                  {
                    count && <> <CountUp start={0} end={100} duration={3} delay={0} /></>
                  }
                </h1>
              </ScrollTrigger>
            </div>
            <div className={counterName}>
              client
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Counter
