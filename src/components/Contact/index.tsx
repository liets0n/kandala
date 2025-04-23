import React from 'react'
import Link from 'next/link'

import {
  LinkedinLogo,
  InstagramLogo,
  XLogo,
  YoutubeLogo
} from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.scss'

function Contact() {
  return (
    <section id='contact' className={styles['container']}>
      <div className={styles['container__info']}>
        <h1 className={styles['info__title']}>Entre em contacto</h1>

        <div className={styles['info__office']}>
          <p className={styles['office__title']}>Escritório</p>

          <address className={styles['office__context']}>
            <p className={styles['context__address']}>
              Rua Ferraz Bomboco Nº 78, , Luanda - Angola
            </p>

            <p className={styles['context__address']}>
              401, 4th, Vision Tower, Business Bay, Dubai, UAE
            </p>
          </address>
        </div>

        <div className={styles['info__email']}>
          <p className={styles['email__title']}>Fale conosco</p>

          <div className={styles['email__context']}>
            <p className={styles['email__text']}>
              Our friendly team is here to help you
            </p>

            <p className={styles['email__address']}>support@kandala.com</p>
          </div>
        </div>

        <div className={styles['info__contact']}>
          <p className={styles['contact__title']}>Contacte-nos</p>

          <address className={styles['contact__context']}>
            <p className={styles['context__text']}>Mon-Fir from 8am to 5am</p>

            <p className={styles['context__phone']}>
              (+244) 932 334 800 - Luanda - Angola
            </p>

            <p className={styles['context__phone']}>
              (+351) 998 232 838 - Lisboa - Portugal
            </p>
          </address>
        </div>

        <div className={styles['info__socialMedia']}>
          <p className={styles['socialMedia__title']}>Contacte-nos</p>

          <div className={styles['socialMedia__context']}>
            <Link href='#' className={styles['socialMedia__link']}>
              <LinkedinLogo size={32} className={styles['link__icon']} />
            </Link>

            <Link href='#' className={styles['socialMedia__link']}>
              <InstagramLogo size={32} className={styles['link__icon']} />
            </Link>

            <Link href='#' className={styles['socialMedia__link']}>
              <XLogo size={32} className={styles['link__icon']} />
            </Link>

            <Link href='#' className={styles['socialMedia__link']}>
              <YoutubeLogo size={32} className={styles['link__icon']} />
            </Link>
          </div>
        </div>
      </div>

      <form className={styles['container__form']}>
        <div className={styles['form__name']}>
          <div className={styles['form__wrapper']}>
            <label htmlFor='name' className={styles['wrapper__label']}>
              Nome
            </label>

            <input
              type='text'
              name='name'
              id='name'
              placeholder='John'
              className={styles['wrapper__input']}
            />
          </div>

          <div className={styles['form__wrapper']}>
            <label htmlFor='surname' className={styles['wrapper__label']}>
              Sobrenome
            </label>

            <input
              type='text'
              name='surname'
              id='surname'
              placeholder='Doe'
              className={styles['wrapper__input']}
            />
          </div>
        </div>

        <div className={styles['form__wrapper']}>
          <label htmlFor='email' className={styles['wrapper__label']}>
            E-mail
          </label>

          <input
            type='email'
            name='email'
            id='email'
            placeholder='john.doe@example.com'
            className={styles['wrapper__input']}
          />
        </div>

        <div className={styles['form__wrapper']}>
          <label htmlFor='subject' className={styles['wrapper__label']}>
            Assunto
          </label>

          <input
            type='text'
            name='subject'
            id='subject'
            placeholder='Exemplo'
            className={styles['wrapper__input']}
          />
        </div>

        <div className={styles['form__wrapper']}>
          <label htmlFor='message' className={styles['wrapper__label']}>
            Mensagem
          </label>

          <textarea
            name='message'
            id='message'
            placeholder='Texto'
            className={`${styles['wrapper__input']} ${styles['wrapper__input--textarea']}`}
          />
        </div>

        <button type='submit' className={styles['form__btn']}>
          Enviar
        </button>
      </form>
    </section>
  )
}

export default Contact
