import React from 'react'
import style from './cta.module.css'

const CTA = () => {
  return (
    <div className={`${style.cta} section__margin`}>
      <div className={style.heading}>
        <p>Request Early Access to Get Started</p>
        <h1>Register today & start exploring the endless possiblities.</h1>
      </div>
      <div className={style.btn}>
        <button>Get Started</button>
      </div>
    </div>
  )
}

export default CTA
