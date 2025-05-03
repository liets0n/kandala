'use client'

import React, { useRef } from 'react'
import { gsap } from 'gsap'

import {
  Medal,
  ArrowCircleLeft,
  ArrowCircleRight
} from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.scss'
import MockResponse from './../../mock/ourServices.json'

function OurServices() {
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
    <section id='ourservices' className={styles['container']}>
      <h1 className={styles['container__title']}>Nossos Serviços</h1>

      <h2 className={styles['container__subtitle']}>
        Transforme sua beleza com serviços feitos para você.
      </h2>

      <ul className={styles['container__cards']} ref={containerReference}>
        {MockResponse.data.map((item, index) => (
          <li className={styles['cards__item']} key={index}>
            <Medal size={53} className={styles['item__icon']} />

            <div className={styles['item__texts']}>
              <p className={styles['texts__title']}>{item.title}</p>
              <p className={styles['texts__description']}>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles['container__buttons']}>
        <button type='button' className={styles['buttons__item']}>
          <ArrowCircleLeft
            size={44}
            weight='thin'
            className={styles['item__icon']}
            onClick={() => scroll('left')}
          />
        </button>

        <button type='button' className={styles['buttons__item']}>
          <ArrowCircleRight
            size={44}
            weight='thin'
            className={styles['item__icon']}
            onClick={() => scroll('right')}
          />
        </button>
      </div>
    </section>
  )
}

export default OurServices
