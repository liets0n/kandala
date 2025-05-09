import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './styles.module.scss'
import Logo from './../../assets/images/logo/full_logo_black.svg'
import Kandala from './../../assets/images/KANDALA.svg'

function Footer() {
  return (
    <footer className={styles['container']}>
      <div className={styles['content']}>
        <div className={styles['content__leftSide']}>
          <Image
            src={Logo}
            alt='Kandala logo'
            className={styles['leftSide__logo']}
          />

          <p className={styles['leftSide__text']}>
            Kandala, a group ahead of its time, close to the customer and with
            resources that respond to the most various needs of the
            pharmaceutical, oil, gas and mining industry sector.
          </p>
        </div>

        <nav className={styles['content__rightSide']}>
          <ul className={styles['rightSide__list']}>
            <li
              className={`${styles['list__item']} ${styles['list__item--title']}`}
            >
              <p className={styles['item__text']}>Navegação</p>
            </li>

            <li className={styles['list__item']}>
              <Link href='/#home' className={styles['item__link']}>
                <p className={styles['link__text']}>Home</p>
              </Link>
            </li>

            <li className={styles['list__item']}>
              <Link href='/#whoweare' className={styles['item__link']}>
                <p className={styles['link__text']}>Quem Somos</p>
              </Link>
            </li>

            <li className={styles['list__item']}>
              <Link href='/#ourservices' className={styles['item__link']}>
                <p className={styles['link__text']}>Nossos Serviços</p>
              </Link>
            </li>

            <li className={styles['list__item']}>
              <Link href='/#howitworks' className={styles['item__link']}>
                <p className={styles['link__text']}>Como Funciona</p>
              </Link>
            </li>

            <li className={styles['list__item']}>
              <Link href='/#testimonials' className={styles['item__link']}>
                <p className={styles['link__text']}>Depoimentos</p>
              </Link>
            </li>

            <li className={styles['list__item']}>
              <Link href='/#faq' className={styles['item__link']}>
                <p className={styles['link__text']}>FAQ&apos;s</p>
              </Link>
            </li>
          </ul>

          <ul className={styles['rightSide__list']}>
            <li
              className={`${styles['list__item']} ${styles['list__item--title']}`}
            >
              <p className={styles['item__text']}>Termos</p>
            </li>

            <li className={styles['list__item']}>
              <Link href='/legal/privacy' className={styles['item__link']}>
                <p className={styles['link__text']}>Politicas e privacidade</p>
              </Link>
            </li>

            <li className={styles['list__item']}>
              <Link href='/legal/terms' className={styles['item__link']}>
                <p className={styles['link__text']}>
                  Termos e condições de uso
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <p className={styles['container__copyRight']}>
        &copy; 2025 - Kandala, todos direitos reservados.
      </p>

      <Image
        src={Kandala}
        alt='Kandala'
        className={styles['container__kandala']}
      />
    </footer>
  )
}

export default Footer
