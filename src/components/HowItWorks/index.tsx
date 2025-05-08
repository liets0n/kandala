'use client'

import React, { useLayoutEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {
  ArrowCircleLeft,
  ArrowCircleRight
} from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

const data = [
  {
    number: '1',
    title: 'Crie sua Conta',
    description:
      'Monte sua rotina de beleza com serviços sob medida, desde maquiagem até cuidados com a pele, tudo pensado para você.',
    pictor: '/assets/images/howItWorks/image_1.png'
  },
  {
    number: '2',
    title: 'Escolha o Serviço',
    description:
      'Monte sua rotina de beleza com serviços sob medida, desde maquiagem até cuidados com a pele, tudo pensado para você.',
    pictor: '/assets/images/howItWorks/image_2.png'
  },
  {
    number: '3',
    title: 'Encontre Profissionais',
    description:
      'Monte sua rotina de beleza com serviços sob medida, desde maquiagem até cuidados com a pele, tudo pensado para você.',
    pictor: '/assets/images/howItWorks/image_3.png'
  },
  {
    number: '4',
    title: 'Agende com Facilidade',
    description:
      'Monte sua rotina de beleza com serviços sob medida, desde maquiagem até cuidados com a pele, tudo pensado para você.',
    pictor: '/assets/images/howItWorks/image_4.png'
  }
]

function HowItWorks() {
  const sectionReference = useRef<HTMLUListElement | null>(null)
  const triggerReference = useRef<HTMLDivElement | null>(null)

  const scrollAmount = window.innerWidth * 0.9

  const handleScroll = useCallback(
    (direction: 'left' | 'right') => {
      if (sectionReference.current) {
        const currentScroll = sectionReference.current.scrollLeft

        gsap.to(sectionReference.current, {
          scrollLeft:
            direction === 'right'
              ? currentScroll + scrollAmount
              : currentScroll - scrollAmount,
          duration: 0.5,
          ease: 'power2.out'
        })
      }
    },
    [scrollAmount]
  )

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 1024px)', () => {
      const pin = gsap.fromTo(
        sectionReference.current,
        { translateX: 0 },
        {
          translateX: '-306vw',
          ease: 'none',
          duration: 1,
          scrollTrigger: {
            trigger: triggerReference.current,
            scrub: 1,
            start: 'top 70',
            end: '2000 top',
            pin: true
          }
        }
      )

      return () => {
        pin.kill()
      }
    })

    return () => {
      mm.kill()
    }
  }, [])

  return (
    <section id='howitworks' className={styles['container']}>
      <div ref={triggerReference}>
        <h1 className={styles['container__title']}>Como Funciona?</h1>

        <div>
          <h2 className={styles['container__subtitle']}>
            Sua jornada de beleza em quatro passos fáceis
          </h2>

          <div className={styles['container__buttons']}>
            <button
              type='button'
              className={styles['buttons__item']}
              onClick={() => handleScroll('left')}
            >
              <ArrowCircleLeft
                size={44}
                weight='thin'
                className={styles['item__icon']}
              />
            </button>

            <button
              type='button'
              className={styles['buttons__item']}
              onClick={() => handleScroll('right')}
            >
              <ArrowCircleRight
                size={44}
                weight='thin'
                className={styles['item__icon']}
              />
            </button>
          </div>
        </div>

        <ul className={styles['container__cards']} ref={sectionReference}>
          {data.map((item, index) => (
            <li className={styles['cards__item']} key={index}>
              <div className={styles['item__content']}>
                <div className={styles['content__wrapper']}>
                  <p className={styles['wrapper__number']}>{item.number}</p>

                  <div className={styles['wrapper__texts']}>
                    <p className={styles['texts__title']}>{item.title}</p>

                    <p className={styles['texts__description']}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              <Image
                src={item.pictor}
                width='548'
                height='432'
                alt=''
                className={styles['item__image']}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HowItWorks
