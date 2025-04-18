import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './styles.module.scss'
import Pictore1 from './../../assets/images/Pictor1.png'
import Pictore2 from './../../assets/images/Pictor2.png'
import Pictore3 from './../../assets/images/Pictor3.png'
import Pictore4 from './../../assets/images/Pictor4.png'
import Pictore5 from './../../assets/images/Pictor5.png'
import Pictore6 from './../../assets/images/Pictor6.png'
import AppStore from './../../assets/images/appstore.svg'
import GooglePay from './../../assets/images/googleplay.svg'
import Mobile_Mockup from './../../assets/images/Mobile_Phone_Mockup.png'

function HeroSection() {
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
              src={Pictore1}
              alt='Pictore 1'
              className={styles['left__pictor']}
            />

            <Image
              src={Pictore2}
              alt='Pictore 2'
              className={styles['left__pictor']}
            />

            <Image
              src={Pictore3}
              alt='Pictore 3'
              className={styles['left__pictor']}
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
              className={`${styles['middle__mockupPictor']}`}
            />
          </div>

          <div className={styles['album__right']}>
            <Image
              src={Pictore4}
              alt='Pictore 4'
              className={styles['right__pictor']}
            />

            <Image
              src={Pictore5}
              alt='Pictore 5'
              className={styles['right__pictor']}
            />

            <Image
              src={Pictore6}
              alt='Pictore 6'
              className={styles['right__pictor']}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
