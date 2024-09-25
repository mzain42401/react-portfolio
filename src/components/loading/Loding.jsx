import React from 'react'
import { Bars } from 'react-loader-spinner'
import classes from './loading.module.css'


const Loding = () => {
    const {loaderDiv,myName,signs,logo}=classes
  return (
    <>
    <div className={loaderDiv}>
    <Bars
  height="90"
  width="90"
  color="#e0a80d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
<div className={logo}><span className={signs}>	&lt;</span><span className={myName}> zain ali </span>  <span className={signs}>/ &gt;</span> </div>
    </div>
     
    </>
  )
}

export default Loding
