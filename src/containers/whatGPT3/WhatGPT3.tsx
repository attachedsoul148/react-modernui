import React from 'react'
import { Feature } from '../../components'
import style from './whatGPT3.module.css'

const WhatGPT3 = () => {
  return (
    <div id="wGPT" className={`${style.whatGPT3} section__padding section__margin`}>
      <Feature
        isHead={true}
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        title="What is GPT-3"
      />
      <div className={style.whatIsGPT3__heading}>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className={style.whatGPT3__features}>
        <Feature
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          title="Chatbots"
        />
        <Feature
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          title="Knowledgebase"
        />
        <Feature
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          title="Education"
        />
      </div>
    </div>
  )
}

export default WhatGPT3
