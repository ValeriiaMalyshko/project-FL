import React from 'react';
import s from './Footer.module.css';
import icon from '../images/icon.svg';

export default function Footer() {
  return (
    <footer className={s.section}>
      <ul className={s.list}>
        <li className={s.item}>
          <a href="https://uk-ua.facebook.com/" className={s.link}>
            <svg className={s.icon} width={35} height={35}>
              <use xlinkHref={`${icon}#icon-facebook`}></use>
            </svg>
          </a>
        </li>
        <li className={s.item}>
          <a href="https://twitter.com/?lang=uk" className={s.link}>
            <svg className={s.icon} width={35} height={35}>
              <use xlinkHref={`${icon}#icon-twitter`}></use>
            </svg>
          </a>
        </li>
        <li className={s.item}>
          <a href="https://www.youtube.com/" className={s.link}>
            <svg className={s.icon} width={40} height={35}>
              <use xlinkHref={`${icon}#icon-youtube`}></use>
            </svg>
          </a>
        </li>
        <li className={s.item}>
          <a href="https://www.linkedin.com/" className={s.link}>
            <svg className={s.icon} width={31} height={35}>
              <use xlinkHref={`${icon}#icon-linkedIn`}></use>
            </svg>
          </a>
        </li>
      </ul>
      <p className={s.title}>Copyright &copy; 2021 - FinanceLedger</p>
    </footer>
  );
}
