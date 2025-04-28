'use client'

import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {
  ArrowCircleLeft,
  ArrowCircleRight
} from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.scss'

import Image_1 from './../../assets/images/howItWorks/image_1.png'
import Image_2 from './../../assets/images/howItWorks/image_2.png'
import Image_3 from './../../assets/images/howItWorks/image_3.png'
import Image_4 from './../../assets/images/howItWorks/image_4.png'

gsap.registerPlugin(ScrollTrigger)

function HowItWorks() {
  const sectionReference = useRef(null)
  const triggerReference = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 1024px)', () => {
      const pin = gsap.fromTo(
        sectionReference.current,
        { translateX: 0 },
        {
          translateX: '-232vw',
          ease: 'none',
          duration: 1,
          scrollTrigger: {
            trigger: triggerReference.current,
            scrub: 1,
            start: 'top top',
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

        <ul className={styles['container__cards']} ref={sectionReference}>
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

          <li className={styles['cards__item']}>
            <div className={styles['item__content']}>
              <div className={styles['content__wrapper']}>
                <p className={styles['wrapper__number']}>2</p>

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
              src={Image_2}
              alt='Image 2'
              className={styles['item__image']}
            />
          </li>

          <li className={styles['cards__item']}>
            <div className={styles['item__content']}>
              <div className={styles['content__wrapper']}>
                <p className={styles['wrapper__number']}>3</p>

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
              src={Image_3}
              alt='Image 3'
              className={styles['item__image']}
            />
          </li>

          <li className={styles['cards__item']}>
            <div className={styles['item__content']}>
              <div className={styles['content__wrapper']}>
                <p className={styles['wrapper__number']}>4</p>

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
              src={Image_4}
              alt='Image 4'
              className={styles['item__image']}
            />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default HowItWorks
