// import React from 'react';
import React, { useState, useLayoutEffect } from 'react';
import s from './Header.module.css';
import icon from '../images/icon.svg';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = e => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      {scrolled ? (
        <header className={s.scroll}>
          <div className={s.section}>
            <svg width={44} height={35} className={s.icon}>
              <use xlinkHref={`${icon}#icon-book-open`}></use>
            </svg>
            <p className={s.logo}>
              <span className={s.firstLogo}>Finance</span> Ledger
            </p>
          </div>
          <nav className={s.nav}>
            <ul className={s.list}>
              <li className={s.item}>
                <a className={s.link} href="index.html">
                  Home
                </a>
              </li>
              <li className={s.item}>
                <a className={s.link} href="#about">
                  About
                </a>
              </li>
              <li className={s.item}>
                <a className={s.link} href="#cases">
                  Cases
                </a>
              </li>
              <li className={s.item}>
                <a className={s.link} href="#blog">
                  Blog
                </a>
              </li>
              <li className={s.item}>
                <a className={s.link} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      ) : (
        <header className={s.container}>
          <div className={s.section}>
            <svg width={44} height={35} className={s.icon}>
              <use xlinkHref={`${icon}#icon-book-open`}></use>
            </svg>
            <p className={s.logo}>
              <span className={s.firstLogo}>Finance</span> Ledger
            </p>
          </div>
          <nav className={s.nav}>
            <ul className={s.list}>
              <li className={s.item}>
                <a className={s.link} href="index.html">
                  Home
                </a>
              </li>
              <li className={s.item}>
                <a className={s.link} href="#about">
                  About
                </a>
              </li>
              <li className={s.item}>
                <a className={s.link} href="#cases">
                  Cases
                </a>
              </li>
              <li className={s.item}>
                <a className={s.link} href="#blog">
                  Blog
                </a>
              </li>
              <li className={s.item}>
                <a className={s.link} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
}
