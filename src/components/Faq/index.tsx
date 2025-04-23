'use client'

import React, { useState } from 'react'
import clsx from 'clsx'

import { CaretDown } from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.scss'

const data = [
  {
    question: '1. Como escolho o profissional ideal para mim?',
    answers:
      'Na nossa app, você pode navegar pelos perfis dos profissionais, ver fotos de trabalhos anteriores, avaliações de outras clientes e até filtrar por especialidades, como cabelo, maquiagem ou estética. É simples e intuitivo!'
  },
  {
    question: '2. Posso agendar um serviço para o mesmo dia?',
    answers:
      'Na nossa app, você pode navegar pelos perfis dos profissionais, ver fotos de trabalhos anteriores, avaliações de outras clientes e até filtrar por especialidades, como cabelo, maquiagem ou estética. É simples e intuitivo!'
  },
  {
    question: '3. Os serviços são realizados em casa ou no salão?',
    answers:
      'Na nossa app, você pode navegar pelos perfis dos profissionais, ver fotos de trabalhos anteriores, avaliações de outras clientes e até filtrar por especialidades, como cabelo, maquiagem ou estética. É simples e intuitivo!'
  },
  {
    question: '4. E se eu precisar cancelar ou reagendar?',
    answers:
      'Na nossa app, você pode navegar pelos perfis dos profissionais, ver fotos de trabalhos anteriores, avaliações de outras clientes e até filtrar por especialidades, como cabelo, maquiagem ou estética. É simples e intuitivo!'
  }
]

function Faq() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(-1)

  const handleIsAccordionOpenState = (item: number) => {
    if (isAccordionOpen === item) {
      setIsAccordionOpen(-1)
    } else {
      setIsAccordionOpen(item)
    }
  }

  return (
    <section id='faq' className={styles['container']}>
      <h1 className={styles['container__title']}>
        Tudo o que você precisa saber antes de começar.
      </h1>

      <h2 className={styles['container__subtitle']}>
        Perguntas frequentes sobre sua jornada de beleza.
      </h2>

      <div className={styles['container__accordion']}>
        <ul className={styles['accordion__list']}>
          {data.map((item, index) => (
            <li className={styles['list__item']} key={index}>
              <button
                className={styles['item__btn']}
                onClick={() => handleIsAccordionOpenState(index)}
              >
                <p className={styles['btn__text']}>{item.question}</p>

                <CaretDown
                  size={32}
                  weight='thin'
                  className={`${styles['btn__icon']} ${styles[clsx({ 'btn__icon--activated': isAccordionOpen === index })]}`}
                />
              </button>

              <p
                className={`${styles['item__text']} ${styles[clsx({ 'item__text--activated': isAccordionOpen === index })]}`}
              >
                {item.answers}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Faq
