import React from 'react'
import Image from 'next/image'

import styles from './styles.module.scss'

import Image_1 from './../../assets/images/howItWorks/image_1.png'

function HowItWorks() {
  return (
    <section id='ourservices' className={styles['container']}>
      <h1 className={styles['container__title']}>Como Funciona?</h1>

      <h2 className={styles['container__subtitle']}>
        Sua jornada de beleza em quatro passos fáceis
      </h2>

      <ul className={styles['container__cards']}>
        <li className={styles['cards__item']}>
          <div className={styles['item__content']}>
            <div className={styles['content__wrapper']}>
              <p className={styles['wrapper__number']}>1</p>

              <div className={styles['wrapper__texts']}>
                <p className={styles['texts__title']}>Crie sua Conta</p>

                <p className={styles['texts__description']}>
                  Monte sua rotina de beleza com serviços sob medida, desde
                  maquiagem até cuidados com a pele, tudo pensado para você.
                </p>
              </div>
            </div>
          </div>

          <Image
            src={Image_1}
            alt='Image 1'
            className={styles['item__image']}
          />
        </li>
      </ul>
    </section>
  )
}

export default HowItWorks
