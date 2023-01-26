import React from 'react';
import s from './Contact.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(1, 'Must be at list 1 characters')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .min(10, 'Must be at list 10 characters')
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
    }),
    onSubmit: async ({ name, email }, { resetForm }) => {
      resetForm();
    },
  });
  return (
    <section className={s.section} id="contact">
      <div>
        <picture>
          <source
            srcSet={`
              ${require('../images/home/contact.webp')} 1x, 
              ${require('../images/home/contact@2x.webp')} 2x
            `}
            type="image/webp"
          />
          <source
            srcSet={`
                ${require('../images/home/contact.jpg')} 1x, 
                ${require('../images/home/contact@2x.jpg')} 2x
              `}
          />
          <img src="#" alt="contact" className={s.img} />
        </picture>
      </div>
      <div>
        <h2 className={s.title}>Request Callback</h2>
        <form onSubmit={formik.handleSubmit} className={s.container}>
          <label htmlFor="name" className={s.label}>
            <input
              className={s.inputName}
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && formik.touched.name ? (
              <div className={s.message}>{formik.errors.title}</div>
            ) : null}
          </label>
          <label htmlFor="email" className={s.label}>
            <input
              className={s.inputEmail}
              id="email"
              type="text"
              name="email"
              placeholder="Enter email*"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </label>
          <button className={s.btn} type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
