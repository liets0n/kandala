import React from 'react'

import styles from './styles.module.scss'

function Metrics() {
  return (
    <section className={styles['container']}>
      <ul className={styles['container__list']}>
        <li className={styles['container__item']}>
          <p className={styles['container__number']}>7</p>
          <p className={styles['container__title']}>Estabelecimentos</p>
          <p className={styles['container__subtitle']}>Total</p>
        </li>

        <li className={styles['container__item']}>
          <p className={styles['container__number']}>+60</p>
          <p className={styles['container__title']}>Clientes</p>
          <p className={styles['container__subtitle']}>Total</p>
        </li>

        <li className={styles['container__item']}>
          <p className={styles['container__number']}>16</p>
          <p className={styles['container__title']}>Profissionais</p>
          <p className={styles['container__subtitle']}>Total</p>
        </li>

        <li className={styles['container__item']}>
          <p className={styles['container__number']}>2</p>
          <p className={styles['container__title']}>Parceiros</p>
          <p className={styles['container__subtitle']}>Total</p>
        </li>
      </ul>
    </section>
  )
}

export default Metrics
