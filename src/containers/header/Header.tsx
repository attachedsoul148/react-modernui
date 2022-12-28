import React from 'react'
import style from './header.module.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className={`${style.header} section__padding`} id="home">
      <div className={style.content}>
        <h1 className="gradient__text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise
          blessing. Indulgence way everything joy alteration boisterous the attachment. Party we
          years to order allow asked of.
        </p>
        <div className={style.header__input}>
          <input type="email" />
          <button type="button">Get Started</button>
        </div>
        <div className={style.content__people}>
          <img
            src={people}
            alt="people"
            width={181.79}
            height={36}
            placeholder="Your Email Address"
          />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className={style.header__img}>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header
