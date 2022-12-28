import React from 'react'
import style from './article.module.css'

const Article: React.FC<{ date: string; title: string; img: string }> = ({ date, title, img }) => {
  return (
    <div className={style.article}>
      <div className={style.image}>
        <img src={img} alt={'articleLogo'} />
      </div>
      <div className={style.content}>
        <div>
          <p>{date}</p>
          <h1>{title}</h1>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
