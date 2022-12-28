import React from 'react'
import style from './possibility.module.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className={`${style.possibility} section__padding section__margin`}>
      <div className={style.image}>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className={style.desc}>
        <p>Request Early Access to Get Started</p>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise
          blessing. Indulgence way everything joy alteration boisterous the attachment. Party we
          years to order allow asked of.
        </p>
        <p>Request Early Access to Get Started</p>
      </div>
    </div>
  )
}

export default Possibility
