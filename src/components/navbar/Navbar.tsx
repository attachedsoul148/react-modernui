import React from 'react'
import style from './navbar.module.css'
import logo from './../../assets/logo.svg'
import { RiMenuFill, RiCloseFill } from 'react-icons/ri'

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wGPT">What is GPT?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  )
}
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false)
  return (
    <div className={style.navbar}>
      <div className={style.navbar__elements}>
        <div className={style.navbar__logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.navbar__links}>
          <Menu />
        </div>
      </div>
      <div className={style.navbar__buttons}>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className={style.menu}>
        {toggleMenu ? (
          <RiCloseFill size={27} color="#fff" onClick={() => setToggleMenu((prev) => !prev)} />
        ) : (
          <RiMenuFill size={27} color="#fff" onClick={() => setToggleMenu((prev) => !prev)} />
        )}
        {toggleMenu && (
          <div
            className={`${style.menu__container} scale-up-center`}
            onClick={(e) => e.stopPropagation()}>
            <Menu />
            <div className={style.menu__container__buttons}>
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
