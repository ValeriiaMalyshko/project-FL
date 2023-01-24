import React from 'react';
import s from './About.module.css';

export default function About() {
  return (
    <section className={s.section} id="about">
      <picture className={s.picture}>
        <source
          srcSet={`
              ${require('../images/home/people.webp')} 1x, 
              ${require('../images/home/people@2x.webp')} 2x
            `}
          type="image/webp"
        />
        <source
          srcSet={`
                ${require('../images/home/people.jpg')} 1x, 
                ${require('../images/home/people@2x.jpg')} 2x
              `}
        />
        <img src="#" alt="foto blog" className={s.img} />
      </picture>
      <p className={s.item}>What you are looking for</p>
      <h2 className={s.title}>We provide bespoke solutions</h2>
      <p className={s.subtitle}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
        ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
        illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste
        maiores deleniti?
      </p>
      <button type="button" className={s.btn}>
        Read More
      </button>
    </section>
  );
}
