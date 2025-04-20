import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './styles.module.scss'
import PlayStore from './../../assets/images/googleplay.svg'
import AppStore from './../../assets/images/appstore.svg'

function DownloadSection() {
  return (
    <section className={styles['container']}>
      <h1 className={styles['container__title']}>
        A beleza que você deseja, na palma da sua mão.
      </h1>

      <h2 className={styles['container__subtitle']}>
        Encontre o cuidado perfeito para o seu cabelo com apenas um clique
        simples.
      </h2>

      <p className={styles['container__description']}>
        Com nossa app, você descobre os melhores profissionais e salões para
        transformar seu cabelo, onde quer que esteja. Agende cortes, colorações
        ou tratamentos com facilidade, personalize sua experiência e aproveite o
        visual
      </p>

      <div className={styles['container__buttons']}>
        <Link href='#' className={styles['buttons__link']}>
          <Image
            src={PlayStore}
            alt='PlayStore'
            className={styles['link__image']}
          />
        </Link>

        <Link href='#' className={styles['buttons__link']}>
          <Image
            src={AppStore}
            alt='AppStore'
            className={styles['link__image']}
          />
        </Link>
      </div>
    </section>
  )
}

export default DownloadSection
