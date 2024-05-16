'use client'
import React from 'react';
import styles from './style.module.scss';
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion';

function Footer({ page }) {
  let section = page.home.contacts
  const { register, trigger,  formState: {errors} } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault()
    }
  }

  return (
    <footer className={styles.footer}>

      <motion.div initial='hidden'
                  whileInView='visible'
                  viewport={{once: true, amount: 0.5}}
                  transition={{duration: 0.8}}
                  variants={{
                    hidden: {opacity: 0, y: -50},
                    visible: {opacity: 1, y: 0}
                  }}
                  className={styles.item}>
        <h1 className={styles.contact}>{section.title1} <span className={styles.accent}>{section.title2}</span></h1>
      </motion.div>

      <motion.div initial='hidden'
                  whileInView='visible'
                  viewport={{once: true, amount: 0.5}}
                  transition={{delay: 0.3, duration: 0.8}}
                  variants={{
                    hidden: {opacity: 0, y: -50},
                    visible: {opacity: 1, y: 0}
                  }}
                  className={styles.item}>
        <form target='_blank' className={styles.form} onSubmit={onSubmit} method="POST"
              action='https://formsubmit.co/448604eb6a68611a339c0f9df372b8ee'>
          <input
            type="text"
            placeholder={section.name}
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
            placeholder={section.subject}
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
            placeholder={section.message}
            {...register('message', {
              required: true
            })}></textarea>
          {errors.message && (
            <p className={styles.error}>
              {errors.name.type === 'required' && 'This field is required'}
            </p>
          )}
          <button type="submit" name='' className={styles.btn}>{section.submit}</button>
        </form>
      </motion.div>
    </footer>
  );
}

export default Footer;