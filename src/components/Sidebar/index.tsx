import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { X, CaretRight } from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.scss'
import Logo from './../../assets/images/logo/full_logo_black.svg'

type Properties = {
  onClose: () => void
}

function Sidebar({ onClose }: Properties) {
  return (
    <div className={styles['container']}>
      <header className={styles['container__header']}>
        <Link href='/' onClick={onClose}>
          <Image
            src={Logo}
            alt='Kandala logo'
            className={styles['header__logo']}
          />
        </Link>

        <X size={24} className={styles['header__icon']} onClick={onClose} />
      </header>

      <ul className={styles['container__list']}>
        <li className={styles['list__item']}>
          <Link
            href='/#home'
            className={styles['item__link']}
            onClick={onClose}
          >
            <p className={styles['link__text']}>Home</p>
            <CaretRight size={12} className={styles['link__icon']} />
          </Link>
        </li>

        <li className={styles['list__item']}>
          <Link
            href='/#whoweare'
            className={styles['item__link']}
            onClick={onClose}
          >
            <p className={styles['link__text']}>Quem Somos</p>
            <CaretRight size={12} className={styles['link__icon']} />
          </Link>
        </li>

        <li className={styles['list__item']}>
          <Link
            href='/#ourservices'
            className={styles['item__link']}
            onClick={onClose}
          >
            <p className={styles['link__text']}>Nossos Serviços</p>
            <CaretRight size={12} className={styles['link__icon']} />
          </Link>
        </li>

        <li className={styles['list__item']}>
          <Link
            href='/#howitworks'
            className={styles['item__link']}
            onClick={onClose}
          >
            <p className={styles['link__text']}>Como Funciona</p>
            <CaretRight size={12} className={styles['link__icon']} />
          </Link>
        </li>

        <li className={styles['list__item']}>
          <Link
            href='/#testimonials'
            className={styles['item__link']}
            onClick={onClose}
          >
            <p className={styles['link__text']}>Depoimentos</p>
            <CaretRight size={12} className={styles['link__icon']} />
          </Link>
        </li>

        <li className={styles['list__item']}>
          <Link
            href='/#faqs'
            className={styles['item__link']}
            onClick={onClose}
          >
            <p className={styles['link__text']}>FAQ&apos;s</p>
            <CaretRight size={12} className={styles['link__icon']} />
          </Link>
        </li>

        <li className={styles['list__item']}>
          <Link
            href='/#contacto'
            className={styles['item__link']}
            onClick={onClose}
          >
            <p className={styles['link__text']}>Contacto</p>
            <CaretRight size={12} className={styles['link__icon']} />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
