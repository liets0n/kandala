'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import { Quotes, Star, ArrowRight } from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.scss'
import MockResponse from './../../mock/testimonials.json'

function Testimonials() {
  const [witness, setWitness] = useState(0)

  const response = MockResponse.data

  const handleChangeWitness = () => {
    if (witness === response.length - 1) {
      setWitness(0)
    } else {
      setWitness(previous => previous + 1)
    }
  }

  return (
    <section id='testimonials' className={styles['container']}>
      <h1 className={styles['container__title']}>
        Histórias reais, beleza transformada.
      </h1>

      <h2 className={styles['container__subtitle']}>
        O que nossas clientes estão dizendo sobre nós.
      </h2>

      <div className={styles['content']}>
        <div className={styles['content__context']}>
          <div className={styles['context__top']}>
            <Quotes size={32} weight='thin' className={styles['top__quotes']} />

            <p className={styles['top__testimonialsIndicator']}>
              {`${witness + 1} de ${response.length}`}
            </p>

            <p className={styles['top__reviews']}>
              <Star
                size={20}
                weight='fill'
                className={styles['reviews__icon']}
              />
              {response[witness].stars}
            </p>
          </div>

          <div className={styles['context__testimony']}>
            {response[witness].testimony}
          </div>

          <div className={styles['context__bottom']}>
            <div className={styles['bottom__personInfo']}>
              <Image
                src={response[witness].pictor}
                width='48'
                height='48'
                alt='Testemunhante'
                className={styles['personInfo__avatar']}
              />

              <p className={styles['personInfo__info']}>
                {`- ${response[witness].name}. ${response[witness].age} anos`}
              </p>
            </div>

            <p className={styles['bottom__reviews']}>
              <Star
                size={20}
                weight='fill'
                className={styles['reviews__icon']}
              />
              {response[witness].stars}
            </p>
          </div>
        </div>

        <Image
          src={response[witness].pictor}
          width='453'
          height='453'
          alt='Testemunhante'
          className={styles['content__reviewer']}
        />

        <button
          type='button'
          className={styles['content__btn']}
          onClick={handleChangeWitness}
        >
          <ArrowRight size={20} className={styles['btn__icon']} />
        </button>
      </div>
    </section>
  )
}

export default Testimonials
