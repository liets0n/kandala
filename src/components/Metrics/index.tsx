'use client'

import React, { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from './styles.module.scss'

type CounterElement = HTMLElement & {
  dataset: {
    target: string
  }
}

function Metrics() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const counters = gsap.utils.toArray<CounterElement>('.counter')

    for (const counter of counters) {
      const targetValue = Number.parseInt(counter.dataset.target, 10)

      gsap.fromTo(
        counter,
        { innerText: 0 },
        {
          innerText: targetValue,
          duration: 2,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: counter,
            start: 'top 400',
            end: 'bottom 500'
          },
          snap: { innerText: 1 },
          onUpdate: function () {
            counter.textContent = Math.floor(
              Number(counter.textContent)
            ).toString()
          }
        }
      )
    }

    return () => {
      gsap.killTweensOf(counters)
    }
  }, [])

  return (
    <section className={styles['container']}>
      <ul className={styles['container__list']}>
        <li className={styles['container__item']}>
          <p
            className={`${styles['container__number']} counter`}
            data-target='7'
          >
            0
          </p>
          <p className={styles['container__title']}>Estabelecimentos</p>
          <p className={styles['container__subtitle']}>Total</p>
        </li>

        <li className={styles['container__item']}>
          <p className={styles['container__number']}>
            +
            <span className='counter' data-target='60'>
              0
            </span>
          </p>
          <p className={styles['container__title']}>Clientes</p>
          <p className={styles['container__subtitle']}>Total</p>
        </li>

        <li className={styles['container__item']}>
          <p
            className={`${styles['container__number']} counter`}
            data-target='16'
          >
            0
          </p>
          <p className={styles['container__title']}>Profissionais</p>
          <p className={styles['container__subtitle']}>Total</p>
        </li>

        <li className={styles['container__item']}>
          <p
            className={`${styles['container__number']} counter`}
            data-target='2'
          >
            0
          </p>
          <p className={styles['container__title']}>Parceiros</p>
          <p className={styles['container__subtitle']}>Total</p>
        </li>
      </ul>
    </section>
  )
}

export default Metrics
