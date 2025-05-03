'use client'

import React, { useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import Image from 'next/image'

import {
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowUpRight,
  Star
} from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.scss'
import MockResponse from './../../mock/ourTeam.json'
import Logo from './../../assets/images/logo/logo.svg'

function OurTeam() {
  const containerReference = useRef<HTMLUListElement | null>(null)
  const scrollAmount = 800

  const scroll = (direction: 'left' | 'right') => {
    if (containerReference.current) {
      const currentScroll = containerReference.current.scrollLeft
      gsap.to(containerReference.current, {
        scrollLeft:
          direction === 'right'
            ? currentScroll + scrollAmount
            : currentScroll - scrollAmount,
        duration: 0.5,
        ease: 'power2.out'
      })
    }
  }

  return (
    <section className={styles['container']}>
      <h1 className={styles['container__title']}>
        Conheça quem vai transformar sua beleza.
      </h1>

      <div className={styles['container__contextWrapper']}>
        <h2 className={styles['container__subtitle']}>
          Profissionais de confiança prontos para cuidar de você com excelência.
        </h2>

        <div className={styles['container__buttons']}>
          <button
            type='button'
            className={styles['buttons__item']}
            onClick={() => scroll('left')}
          >
            <ArrowCircleLeft
              size={44}
              weight='thin'
              className={styles['item__icon']}
            />
          </button>

          <button
            type='button'
            className={styles['buttons__item']}
            onClick={() => scroll('right')}
          >
            <ArrowCircleRight
              size={44}
              weight='thin'
              className={styles['item__icon']}
            />
          </button>
        </div>
      </div>

      <ul className={styles['container__cards']} ref={containerReference}>
        {MockResponse.data.map((item, index) => (
          <li className={styles['cards__item']} key={index}>
            <div className={styles['item__context']}>
              <div className={styles['context__top']}>
                <ul className={styles['top__topics']}>
                  {item.topics.map((item, index) => (
                    <li className={styles['topics__item']} key={index}>
                      {item}
                    </li>
                  ))}
                </ul>

                <Image
                  src={Logo}
                  alt='Kandala logo'
                  className={styles['top__logo']}
                />
              </div>

              <p className={styles['context__name']}>{item.name}</p>

              <p className={styles['context__description']}>
                {item.description}
              </p>

              <div className={styles['context__reviews']}>
                <Star
                  size={20}
                  weight='fill'
                  className={styles['reviews__icon']}
                />
                <p className={styles['reviews__number']}>{item.stars}</p>
                <p className={styles['reviews__text']}>
                  ({item.countReviews} avaliações)
                </p>
              </div>
            </div>

            <Image
              src={item.pictor}
              width='389'
              height='408'
              alt='Profissional, membro do team'
              className={styles['item__pictor']}
            />

            <Link href='/#contact' className={styles['item__link']}>
              <p className={styles['link__text']}>Contactos</p>

              <span className={styles['link__iconContainer']}>
                <ArrowUpRight
                  size={18}
                  className={styles['iconContainer__icon']}
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OurTeam
