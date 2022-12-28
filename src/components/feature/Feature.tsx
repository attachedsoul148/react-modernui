import React from 'react'
import style from './feature.module.css'

const Feature: React.FC<{ text: string; title: string; isHead?: boolean }> = ({
  text,
  title,
  isHead = false,
}) => {
  return (
    <div className={isHead ? `${style.headFeature}` : `${style.feature}`}>
      <div className={style.heading}>
        <div className={style.line}></div>
        <h1>{title}</h1>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default Feature
