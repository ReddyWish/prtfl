'use client'
import React from 'react';
import styles from './style.module.scss';
import { useForm } from 'react-hook-form';

function Footer(props) {

  const { register, trigger,  formState: {errors} } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault()
    }
  }

  return (
    <footer className={styles.footer} >

        <div className={styles.item}>
          <h1 className={styles.contact}>CONTACT <span className={styles.accent}>ME</span> </h1>
        </div>

      <div className={styles.item}>
        <form target='_blank' className={styles.form} onSubmit={onSubmit} method="POST" action='https://formsubmit.co/448604eb6a68611a339c0f9df372b8ee'>
          <input
            type="text"
            placeholder='Your name'
            {...register('name', {
              required: true,
              maxLength: 100
            })}/>
          {errors.name && (
      <p className={styles.error}>
        {errors.name.type === 'required' && 'This field is required'}
      </p>
          )}
          <input
            type="text"
            placeholder='Write a Subject'
            {...register('subject', {
              required: true
            })}/>
          {errors.subject && (
            <p className={styles.error}>
              {errors.name.type === 'required' && 'This field is required'}
            </p>
          )}
          <textarea
            name="" id=""
            cols="30"
            rows="10"
            placeholder='Your message'
            {...register('message', {
              required: true
            })}></textarea>
          {errors.message && (
            <p className={styles.error}>
              {errors.name.type === 'required' && 'This field is required'}
            </p>
          )}
          <button type="submit" name='' className={styles.btn}>Submit</button>
        </form>
      </div>

    </footer>
  );
}

export default Footer;