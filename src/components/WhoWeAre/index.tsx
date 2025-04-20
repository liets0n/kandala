import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {
  ArrowUpRight,
  Watch,
  Medal,
  ShieldCheck,
  MagicWand
} from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.scss'
import People_image from './../../assets/images/people_with_lampshades_on_their_heads.png'

function WhoWeAre() {
  return (
    <section id='whoweare' className={styles['container']}>
      <div className={styles['content']}>
        <Image
          src={People_image}
          alt='Image 1'
          className={styles['content__image']}
        />

        <div className={styles['content__leftSide']}>
          <h1 className={styles['leftSide__title']}>Quem Somos?</h1>

          <h2 className={styles['leftSide__subtitle']}>
            Descubra a beleza que transforma! Nossa aplicação conecta você aos
            melhores serviços de beleza, com praticidade e estilo.
          </h2>

          <p className={styles['leftSide__paragraph']}>
            Somos mais do que uma aplicação de beleza — somos a sua parceira
            para realçar o que há de melhor em você. Com uma plataforma
            intuitiva, conectamos você a profissionais de confiança, oferecendo
            serviços personalizados que se encaixam na sua rotina. Seja para um
            momento de cuidado ou uma transformação completa, estamos aqui para
            tornar cada experiência única, prática e inesquecível.
          </p>

          <Link href='/#contact' className={styles['leftSide__button']}>
            <p className={styles['button__text']}>Saber Mais</p>

            <span className={styles['button__iconContainer']}>
              <ArrowUpRight
                size={18}
                className={styles['iconContainer__icon']}
              />
            </span>
          </Link>
        </div>
      </div>

      <ul className={styles['topics']}>
        <li className={styles['topics__item']}>
          <Watch size={36} className={styles['item__icon']} />

          <p className={styles['item__title']}>Agendamento Simplificado</p>

          <p className={styles['item__paragraph']}>
            Agende seus serviços favoritos em poucos cliques, a qualquer hora e
            lugar. Escolha o profissional, o horário e o local que combinam com
            você.
          </p>
        </li>

        <li className={styles['topics__item']}>
          <Medal size={36} className={styles['item__icon']} />

          <p className={styles['item__title']}>Profissionais de Confiança</p>

          <p className={styles['item__paragraph']}>
            Conectamos você a especialistas verificados, prontos para oferecer
            cuidados personalizados com segurança e excelência.
          </p>
        </li>

        <li className={styles['topics__item']}>
          <ShieldCheck size={36} className={styles['item__icon']} />

          <p className={styles['item__title']}>Experiência Personalizada</p>

          <p className={styles['item__paragraph']}>
            Monte sua rotina de beleza com serviços sob medida, desde maquiagem
            até cuidados com a pele, tudo pensado para você.
          </p>
        </li>

        <li className={styles['topics__item']}>
          <MagicWand size={36} className={styles['item__icon']} />

          <p className={styles['item__title']}>Inspiração na Sua Mão</p>

          <p className={styles['item__paragraph']}>
            Explore dicas, tutoriais e as últimas novidades em beleza para criar
            looks incríveis e se manter sempre atualizada.
          </p>
        </li>
      </ul>
    </section>
  )
}

export default WhoWeAre
