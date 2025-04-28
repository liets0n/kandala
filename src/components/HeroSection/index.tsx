'use client'

import React, { useLayoutEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from 'gsap'

import styles from './styles.module.scss'
import Pictore_1 from './../../assets/images/heroSection/pictor_1.png'
import Pictore_2 from './../../assets/images/heroSection/pictor_2.png'
import Pictore_3 from './../../assets/images/heroSection/pictor_3.png'
import Pictore_4 from './../../assets/images/heroSection/pictor_4.png'
import Pictore_5 from './../../assets/images/heroSection/pictor_5.png'
import Pictore_6 from './../../assets/images/heroSection/pictor_6.png'
import AppStore from './../../assets/images/appstore.svg'
import GooglePay from './../../assets/images/googleplay.svg'
import Mobile_Mockup from './../../assets/images/heroSection/mobile_phone_mockup.png'

function HeroSection() {
  useLayoutEffect(() => {
    gsap.to('.pictors', {
      rotate: '-25deg',
      duration: 1,
      repeat: -1,
      yoyo: true
    })

    return () => {
      gsap.killTweensOf('.pictors')
    }
  }, [])

  return (
    <section id='home' className={styles['container']}>
      <div className={styles['content']}>
        <div className={styles['content__literature']}>
          <h2 className={styles['literature__subtitle']}>
            Descubra uma nova rotina de beleza personalizada
          </h2>

          <h1 className={styles['literature__title']}>
            Transforme Seu Cuidado Pessoal com Inteligência Digital
          </h1>

          <p className={styles['literature__text']}>
            O Kandala analisa suas necessidades individuais e oferece
            recomendações personalizadas de produtos, rotinas e dicas
            profissionais.
          </p>
        </div>

        <div className={styles['content__album']}>
          <div className={styles['album__left']}>
            <Image
              src={Pictore_1}
              alt='Pictore 1'
              className={`${styles['left__pictor']} pictors`}
            />

            <Image
              src={Pictore_2}
              alt='Pictore 2'
              className={`${styles['left__pictor']} pictors`}
            />

            <Image
              src={Pictore_3}
              alt='Pictore 3'
              className={`${styles['left__pictor']} pictors`}
            />
          </div>

          <div className={styles['album__middle']}>
            <span className={styles['middle__downloadButtons']}>
              <Link href='#'>
                <Image src={GooglePay} alt='Google Play button' />
              </Link>

              <Link href='#'>
                <Image src={AppStore} alt='App Store button' />
              </Link>
            </span>

            <Image
              src={Mobile_Mockup}
              alt='Mobile Phone Mockup'
              className={`${styles['middle__mockup']}`}
            />
          </div>

          <div className={styles['album__right']}>
            <Image
              src={Pictore_4}
              alt='Pictore 4'
              className={`${styles['right__pictor']} pictors`}
            />

            <Image
              src={Pictore_5}
              alt='Pictore 5'
              className={`${styles['right__pictor']} pictors`}
            />

            <Image
              src={Pictore_6}
              alt='Pictore 6'
              className={`${styles['right__pictor']} pictors`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
