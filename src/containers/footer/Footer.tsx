import React from 'react'
import style from './footer.module.css'
import logo from './../../assets/logo.svg'

const Footer = () => {
  return (
    <div className={`${style.footer} section__padding`}>
      <div className={style.heading}>
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
        <button>Request Early Access</button>
      </div>
      <div className={style.links}>
        <div className={style.links__logo}>
          <img src={logo} alt="logo" width={118} height={30} />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className={style.links__links}>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className={style.links__links}>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className={style.links__links}>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className={style.end}>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
