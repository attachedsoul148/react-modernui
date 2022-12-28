import React from 'react'
import { Article } from '../../components'
import style from './blog.module.css'
import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'

const Blog = () => {
  return (
    <div className={`${style.blog} section__padding`}>
      <div className={style.heading}>
        <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
      </div>
      <div className={style.articles}>
        <div className={style.main_article}>
          <Article
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            img={blog01}
          />
        </div>
        <div className={style.article_group}>
          <Article
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            img={blog02}
          />
          <Article
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            img={blog03}
          />
          <Article
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            img={blog04}
          />
          <Article
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            img={blog05}
          />
        </div>
      </div>
      <div className={style.grid_articles}>
        <Article
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          img={blog02}
        />
        <Article
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          img={blog03}
        />
        <Article
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          img={blog04}
        />
        <Article
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          img={blog05}
        />
        <Article
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          img={blog01}
        />
      </div>
    </div>
  )
}

export default Blog
