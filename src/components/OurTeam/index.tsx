import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowUpRight,
  Star
} from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.scss'
import Logo from './../../assets/images/logo/logo.svg'
import Person_1 from './../../assets/images/outTeam/person_1.png'
import Person_2 from './../../assets/images/outTeam/person_2.png'
import Person_3 from './../../assets/images/outTeam/person_3.png'

function OurTeam() {
  return (
    <section className={styles['container']}>
      <h1 className={styles['container__title']}>
        Conheça quem vai transformar sua beleza.
      </h1>

      <div className={styles['container__contextWrapper']}>
        <h2 className={styles['container__subtitle']}>
          Profissionais de confiança prontos para cuidar de você com excelência.
        </h2>

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
      </div>

      <ul className={styles['container__cards']}>
        <li className={styles['cards__item']}>
          <div className={styles['item__context']}>
            <div className={styles['context__top']}>
              <span className={styles['top__topics']}>
                <p className={styles['topics__year']}>12-15 anos</p>
                <p className={styles['topics__position']}>Trancista</p>
              </span>

              <Image
                src={Logo}
                alt='Kandala logo'
                className={styles['top__logo']}
              />
            </div>

            <p className={styles['context__name']}>Josilda Estevão</p>

            <p className={styles['context__description']}>
              Monte sua rotina de beleza com serviços sob medida, desde
              maquiagem até cuidados...
            </p>

            <div className={styles['context__reviews']}>
              <Star
                size={20}
                weight='fill'
                className={styles['reviews__icon']}
              />
              <p className={styles['reviews__number']}>4.9</p>
              <p className={styles['reviews__text']}>(120+ avaliações)</p>
            </div>
          </div>

          <Image
            src={Person_1}
            alt='Profissional, membro do team'
            className={styles['item__pictor']}
          />

          <Link href='/#contact' className={styles['item__link']}>
            <p className={styles['link__text']}>Contactos</p>

            <span className={styles['link__iconContainer']}>
              <ArrowUpRight
                size={18}
                className={styles['iconContainer__icon']}
              />
            </span>
          </Link>
        </li>

        <li className={styles['cards__item']}>
          <div className={styles['item__context']}>
            <div className={styles['context__top']}>
              <span className={styles['top__topics']}>
                <p className={styles['topics__year']}>12-15 anos</p>
                <p className={styles['topics__position']}>Trancista</p>
              </span>

              <Image
                src={Logo}
                alt='Kandala logo'
                className={styles['top__logo']}
              />
            </div>

            <p className={styles['context__name']}>Andrea Balestrin</p>

            <p className={styles['context__description']}>
              Monte sua rotina de beleza com serviços sob medida, desde
              maquiagem até cuidados...
            </p>

            <div className={styles['context__reviews']}>
              <Star
                size={20}
                weight='fill'
                className={styles['reviews__icon']}
              />
              <p className={styles['reviews__number']}>4.9</p>
              <p className={styles['reviews__text']}>(120+ avaliações)</p>
            </div>
          </div>

          <Image
            src={Person_2}
            alt='Profissional, membro do team'
            className={styles['item__pictor']}
          />

          <Link href='/#contact' className={styles['item__link']}>
            <p className={styles['link__text']}>Contactos</p>

            <span className={styles['link__iconContainer']}>
              <ArrowUpRight
                size={18}
                className={styles['iconContainer__icon']}
              />
            </span>
          </Link>
        </li>

        <li className={styles['cards__item']}>
          <div className={styles['item__context']}>
            <div className={styles['context__top']}>
              <span className={styles['top__topics']}>
                <p className={styles['topics__year']}>12-15 anos</p>
                <p className={styles['topics__position']}>Trancista</p>
              </span>

              <Image
                src={Logo}
                alt='Kandala logo'
                className={styles['top__logo']}
              />
            </div>

            <p className={styles['context__name']}>Paula Bernadeth</p>

            <p className={styles['context__description']}>
              Monte sua rotina de beleza com serviços sob medida, desde
              maquiagem até cuidados...
            </p>

            <div className={styles['context__reviews']}>
              <Star
                size={20}
                weight='fill'
                className={styles['reviews__icon']}
              />
              <p className={styles['reviews__number']}>4.9</p>
              <p className={styles['reviews__text']}>(120+ avaliações)</p>
            </div>
          </div>

          <Image
            src={Person_3}
            alt='Profissional, membro do team'
            className={styles['item__pictor']}
          />

          <Link href='/#contact' className={styles['item__link']}>
            <p className={styles['link__text']}>Contactos</p>

            <span className={styles['link__iconContainer']}>
              <ArrowUpRight
                size={18}
                className={styles['iconContainer__icon']}
              />
            </span>
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default OurTeam
