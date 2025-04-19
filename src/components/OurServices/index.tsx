import React from 'react'

import {
  Medal,
  ArrowCircleLeft,
  ArrowCircleRight
} from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.scss'

function OurServices() {
  return (
    <section id='ourservices' className={styles['container']}>
      <h1 className={styles['container__title']}>Nossos Serviços</h1>

      <h2 className={styles['container__subtitle']}>
        Transforme sua beleza com serviços feitos para você.
      </h2>

      <ul className={styles['container__cards']}>
        <li className={styles['cards__item']}>
          <Medal size={53} className={styles['item__icon']} />

          <div className={styles['item__texts']}>
            <p className={styles['texts__title']}>Maquiagem Personalizada</p>

            <p className={styles['texts__description']}>
              Monte sua rotina de beleza com serviços sob medida, desde
              maquiagem até cuidados com a pele, tudo pensado para você.
            </p>
          </div>
        </li>

        <li className={styles['cards__item']}>
          <Medal size={53} className={styles['item__icon']} />

          <div className={styles['item__texts']}>
            <p className={styles['texts__title']}>Corte e Coloração</p>

            <p className={styles['texts__description']}>
              Monte sua rotina de beleza com serviços sob medida, desde
              maquiagem até cuidados com a pele, tudo pensado para você.
            </p>
          </div>
        </li>

        <li className={styles['cards__item']}>
          <Medal size={53} className={styles['item__icon']} />

          <div className={styles['item__texts']}>
            <p className={styles['texts__title']}>Manicure e Pedicure</p>

            <p className={styles['texts__description']}>
              Monte sua rotina de beleza com serviços sob medida, desde
              maquiagem até cuidados com a pele, tudo pensado para você.
            </p>
          </div>
        </li>
      </ul>

      <div className={styles['container__buttons']}>
        <button type='button' className={styles['buttons__item']}>
          <ArrowCircleLeft
            size={44}
            weight='thin'
            className={styles['item__icon']}
          />
        </button>

        <button type='button' className={styles['buttons__item']}>
          <ArrowCircleRight
            size={44}
            weight='thin'
            className={styles['item__icon']}
          />
        </button>
      </div>
    </section>
  )
}

export default OurServices
