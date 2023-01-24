import React from 'react';
import s from './Hero.module.css';
import Header from 'components/Header/Header';
import icon from '../images/icon.svg';

export default function Hero() {
  return (
    <section className={s.section}>
      <Header />
      <h1 className={s.title}>The Sky Is The Limit </h1>
      <p className={s.subtitle}>We provide world class financial assistance</p>
      <button type="button" className={s.btn}>
        <svg className={s.icon} width={27} height={18}>
          <use xlinkHref={`${icon}#icon-right`}></use>
        </svg>
        Read More
      </button>
    </section>
  );
}
