import React from 'react'
// import Link from 'next/link'
import Image from 'next/image'

import { Quotes, Star, ArrowRight } from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.scss'
import Reviewer from './../../assets/images/outTeam/person_3.png'

function Testimonials() {
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

            <p className={styles['top__testimonialsIndicator']}>1 de 4</p>

            <p className={styles['top__reviews']}>
              <Star
                size={20}
                weight='fill'
                className={styles['reviews__icon']}
              />
              4.9
            </p>
          </div>

          <div className={styles['context__testimony']}>
            &quot;Eu nunca imaginei que encontrar a maquiadora perfeita seria
            tão fácil! Com a app, agendei uma make incrível para o meu evento e
            me senti uma verdadeira estrela. A profissional foi atenciosa e
            acertou exatamente o que eu queria. Super recomendo!&quot;
          </div>

          <div className={styles['context__bottom']}>
            <div className={styles['bottom__personInfo']}>
              <Image
                src={Reviewer}
                alt='Testemunhante'
                className={styles['personInfo__avatar']}
              />

              <p className={styles['personInfo__info']}>— Carla S., 28 anos</p>
            </div>

            <p className={styles['bottom__reviews']}>
              <Star
                size={20}
                weight='fill'
                className={styles['reviews__icon']}
              />
              4.9
            </p>
          </div>
        </div>

        <Image
          src={Reviewer}
          alt='Testemunhante'
          className={styles['content__reviewer']}
        />

        <button type='button' className={styles['content__btn']}>
          <ArrowRight size={20} className={styles['btn__icon']} />
        </button>
      </div>
    </section>
  )
}

export default Testimonials
