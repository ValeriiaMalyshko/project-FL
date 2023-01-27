import React from 'react';
import s from './Contact.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(20, 'Must be 20 characters or less')
        .required('This is a required field'),
      email: Yup.string()
        .email('Invalid email')
        .required('This is a required field'),
    }),
    onSubmit: async ({ values }, { resetForm }) => {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...values }),
      })
        .then(() => alert('Success!'))
        .catch(error => alert(error));
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
            {formik.errors.name && formik.touched.name ? (
              <div className={s.message}>{formik.errors.name}</div>
            ) : null}
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
          </label>
          <label htmlFor="email" className={s.label}>
            {formik.errors.email && formik.touched.email ? (
              <div className={s.message}>{formik.errors.email}</div>
            ) : null}
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
