import React from 'react';
import s from './Blog.module.css';

export default function Blog() {
  return (
    <section className={s.section} id="blog">
      <picture>
        <source
          srcSet={`
              ${require('../images/home/blog.webp')} 1x, 
              ${require('../images/home/blog@2x.webp')} 2x
            `}
          type="image/webp"
        />
        <source
          srcSet={`
                ${require('../images/home/blog.jpg')} 1x, 
                ${require('../images/home/blog@2x.jpg')} 2x
              `}
        />
        <img src="#" alt="foto blog" className={s.img} />
      </picture>
      <div>
        <p className={s.item}>What you are looking for</p>
        <h2 className={s.title}>Blog Post One</h2>
        <p className={s.subtitle}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button type="button" className={s.btn}>
          Read Our Blog
        </button>
      </div>
    </section>
  );
}
