import React from 'react';
import s from './Cases.module.css';

export default function Cases() {
  return (
    <section className={s.section} id="cases">
      <p className={s.pretitle}>This is what we do</p>
      <h2 className={s.title}>Business Cases</h2>
      <p className={s.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <ul className={s.list}>
        <li className={s.item}>
          <picture>
            <source
              srcSet={`
              ${require('../images/cases/cases1.webp')} 1x, 
              ${require('../images/cases/cases1@2x.webp')} 2x
            `}
              type="image/webp"
            />
            <source
              srcSet={`
                ${require('../images/cases/cases1.jpg')} 1x, 
                ${require('../images/cases/cases1@2x.jpg')} 2x
              `}
            />
            <img src="#" alt="case 1" className={s.img} />
          </picture>
        </li>
        <li className={s.item}>
          <picture>
            <source
              srcSet={`
              ${require('../images/cases/cases3.webp')} 1x, 
              ${require('../images/cases/cases3@2x.webp')} 2x
            `}
              type="image/webp"
            />
            <source
              srcSet={`
                ${require('../images/cases/cases3.jpg')} 1x, 
                ${require('../images/cases/cases3@2x.jpg')} 2x
              `}
            />
            <img src="#" alt="case 2" className={s.img} />
          </picture>
        </li>
        <li className={s.item}>
          <picture>
            <source
              srcSet={`
              ${require('../images/cases/cases5.webp')} 1x, 
              ${require('../images/cases/cases5@2x.webp')} 2x
            `}
              type="image/webp"
            />
            <source
              srcSet={`
                ${require('../images/cases/cases5.jpg')} 1x, 
                ${require('../images/cases/cases5@2x.jpg')} 2x
              `}
            />
            <img src="#" alt="case 3" className={s.img} />
          </picture>
        </li>
        <li className={s.item}>
          <picture>
            <source
              srcSet={`
              ${require('../images/cases/cases7.webp')} 1x, 
              ${require('../images/cases/cases7@2x.webp')} 2x
            `}
              type="image/webp"
            />
            <source
              srcSet={`
                ${require('../images/cases/cases7.jpg')} 1x, 
                ${require('../images/cases/cases7@2x.jpg')} 2x
              `}
            />
            <img src="#" alt="case 4" className={s.img} />
          </picture>
        </li>
        <li className={s.item}>
          <picture>
            <source
              srcSet={`
              ${require('../images/cases/cases2.webp')} 1x, 
              ${require('../images/cases/cases2@2x.webp')} 2x
            `}
              type="image/webp"
            />
            <source
              srcSet={`
                ${require('../images/cases/cases2.jpg')} 1x, 
                ${require('../images/cases/cases2@2x.jpg')} 2x
              `}
            />
            <img src="#" alt="case 5" className={s.img} />
          </picture>
        </li>
        <li className={s.item}>
          <picture>
            <source
              srcSet={`
              ${require('../images/cases/cases4.webp')} 1x, 
              ${require('../images/cases/cases4@2x.webp')} 2x
            `}
              type="image/webp"
            />
            <source
              srcSet={`
                ${require('../images/cases/cases4.jpg')} 1x, 
                ${require('../images/cases/cases4@2x.jpg')} 2x
              `}
            />
            <img src="#" alt="case 6" className={s.img} />
          </picture>
        </li>
      </ul>
    </section>
  );
}
