import React from 'react';
import s from './Team.module.css';
import icon from '../images/icon.svg';

export default function Team() {
  return (
    <section className={s.section} id="cases">
      <p className={s.pretitle}>Who we are</p>
      <h2 className={s.title}>Our Professional Team</h2>
      <p className={s.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <ul className={s.list}>
        <li className={s.item}>
          <div className={s.overflow}>
            <picture className={s.picture}>
              <source
                srcSet={`
              ${require('../images/team/person1.webp')} 1x, 
              ${require('../images/team/person1@2x.webp')} 2x
            `}
                type="image/webp"
              />
              <source
                srcSet={`
                ${require('../images/team/person1.jpg')} 1x, 
                ${require('../images/team/person1@2x.jpg')} 2x
              `}
              />
              <img src="#" alt="John Doe" className={s.img} />
            </picture>
            <ul className={s.card}>
              <li className={s.cardItem}>
                <a href="https://uk-ua.facebook.com/" className={s.cardLink}>
                  <svg className={s.icon} width={35} height={35}>
                    <use xlinkHref={`${icon}#icon-facebook`}></use>
                  </svg>
                </a>
              </li>
              <li className={s.cardItem}>
                <a href="https://twitter.com/?lang=uk" className={s.cardLink}>
                  <svg className={s.icon} width={35} height={35}>
                    <use xlinkHref={`${icon}#icon-twitter`}></use>
                  </svg>
                </a>
              </li>
              <li className={s.cardItem}>
                <a href="https://www.youtube.com/" className={s.cardLink}>
                  <svg className={s.icon} width={40} height={35}>
                    <use xlinkHref={`${icon}#icon-youtube`}></use>
                  </svg>
                </a>
              </li>
              <li className={s.cardItem}>
                <a href="https://www.linkedin.com/" className={s.cardLink}>
                  <svg className={s.icon} width={31} height={35}>
                    <use xlinkHref={`${icon}#icon-linkedIn`}></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <h3 className={s.name}>John Doe</h3>
          <p className={s.position}>President</p>
        </li>
        <li className={s.item}>
          <div className={s.overflow}>
            <picture className={s.picture}>
              <source
                srcSet={`
              ${require('../images/team/person2.webp')} 1x, 
              ${require('../images/team/person2@2x.webp')} 2x
            `}
                type="image/webp"
              />
              <source
                srcSet={`
                ${require('../images/team/person2.jpg')} 1x, 
                ${require('../images/team/person2@2x.jpg')} 2x
              `}
              />
              <img src="#" alt="Jane Doe" className={s.img} />
            </picture>
            <ul className={s.card}>
              <li className={s.cardItem}>
                <a href="https://uk-ua.facebook.com/" className={s.cardLink}>
                  <svg className={s.icon} width={35} height={35}>
                    <use xlinkHref={`${icon}#icon-facebook`}></use>
                  </svg>
                </a>
              </li>
              <li className={s.cardItem}>
                <a href="https://twitter.com/?lang=uk" className={s.cardLink}>
                  <svg className={s.icon} width={35} height={35}>
                    <use xlinkHref={`${icon}#icon-twitter`}></use>
                  </svg>
                </a>
              </li>
              <li className={s.cardItem}>
                <a href="https://www.youtube.com/" className={s.cardLink}>
                  <svg className={s.icon} width={40} height={35}>
                    <use xlinkHref={`${icon}#icon-youtube`}></use>
                  </svg>
                </a>
              </li>
              <li className={s.cardItem}>
                <a href="https://www.linkedin.com/" className={s.cardLink}>
                  <svg className={s.icon} width={31} height={35}>
                    <use xlinkHref={`${icon}#icon-linkedIn`}></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <h3 className={s.name}>Jane Doe</h3>
          <p className={s.position}>Vice President</p>
        </li>
        <li className={s.item}>
          <div className={s.overflow}>
            <picture className={s.picture}>
              <source
                srcSet={`
              ${require('../images/team/person3.webp')} 1x, 
              ${require('../images/team/person3@2x.webp')} 2x
            `}
                type="image/webp"
              />
              <source
                srcSet={`
                ${require('../images/team/person3.jpg')} 1x, 
                ${require('../images/team/person3@2x.jpg')} 2x
              `}
              />
              <img src="#" alt="Sreve Smith" className={s.img} />
            </picture>
            <ul className={s.card}>
              <li className={s.cardItem}>
                <a href="https://uk-ua.facebook.com/" className={s.cardLink}>
                  <svg className={s.icon} width={35} height={35}>
                    <use xlinkHref={`${icon}#icon-facebook`}></use>
                  </svg>
                </a>
              </li>
              <li className={s.cardItem}>
                <a href="https://twitter.com/?lang=uk" className={s.cardLink}>
                  <svg className={s.icon} width={35} height={35}>
                    <use xlinkHref={`${icon}#icon-twitter`}></use>
                  </svg>
                </a>
              </li>
              <li className={s.cardItem}>
                <a href="https://www.youtube.com/" className={s.cardLink}>
                  <svg className={s.icon} width={40} height={35}>
                    <use xlinkHref={`${icon}#icon-youtube`}></use>
                  </svg>
                </a>
              </li>
              <li className={s.cardItem}>
                <a href="https://www.linkedin.com/" className={s.cardLink}>
                  <svg className={s.icon} width={31} height={35}>
                    <use xlinkHref={`${icon}#icon-linkedIn`}></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <h3 className={s.name}>Steve Smith</h3>
          <p className={s.position}>Marketing Head</p>
        </li>
      </ul>
    </section>
  );
}
