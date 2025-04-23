'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

import { ArrowUpRight, List } from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.scss'
import { Sidebar } from './../../components'
import Logo from './../../assets/images/logo/full_logo_black.svg'

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const pathname = usePathname()
  const isUseInLegalPages = pathname.includes('legal')

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
    } else {
      document.body.style.position = ''
      document.body.style.overflow = ''
    }
  }, [isSidebarOpen])

  const handleIsSidebarOpenState = () => {
    setIsSidebarOpen(previous => !previous)
  }

  return (
    <>
      {isSidebarOpen && <Sidebar onClose={handleIsSidebarOpenState} />}

      <nav className={styles['container']}>
        <ul className={styles['container__list']}>
          <li
            className={`${styles['list__item']} ${styles['list__item--logo']}`}
          >
            <Link href='/'>
              <Image src={Logo} alt='Logo' className={styles['logo']} />
            </Link>
          </li>

          <li className={styles['list__item']}>
            <Link href='/#home' className={styles['item__link']}>
              <p className={styles['link__text']}>Home</p>
            </Link>
          </li>

          <li className={styles['list__item']}>
            <Link href='/#whoweare' className={styles['item__link']}>
              <p className={styles['link__text']}>Quem Somos</p>
            </Link>
          </li>

          <li className={styles['list__item']}>
            <Link href='/#ourservices' className={styles['item__link']}>
              <p className={styles['link__text']}>Nossos Serviços</p>
            </Link>
          </li>

          <li className={styles['list__item']}>
            <Link href='/#howitworks' className={styles['item__link']}>
              <p className={styles['link__text']}>Como Funciona</p>
            </Link>
          </li>

          <li className={styles['list__item']}>
            <Link href='/#testimonials' className={styles['item__link']}>
              <p className={styles['link__text']}>Depoimentos</p>
            </Link>
          </li>

          <li className={styles['list__item']}>
            <Link href='/#faq' className={styles['item__link']}>
              <p className={styles['link__text']}>FAQ&apos;s</p>
            </Link>
          </li>
        </ul>

        <div className={styles['container__rightSide']}>
          <Link
            href='/#contact'
            className={`${styles['rightSide__link']} ${styles[clsx({ 'rightSide__link--bgGray': isUseInLegalPages })]}`}
          >
            <p className={styles['link__text']}>Contactos</p>

            <span className={styles['link__iconContainer']}>
              <ArrowUpRight
                size={18}
                className={styles['iconContainer__icon']}
              />
            </span>
          </Link>

          <List
            size={32}
            className={styles['rightSide__menu']}
            onClick={handleIsSidebarOpenState}
          />
        </div>
      </nav>
    </>
  )
}

export default Header
