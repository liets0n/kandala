import React from 'react'
import Image from 'next/image'

import styles from './styles.module.scss'
import Brand_1 from './../../assets/images/brands/brand_1.png'
import Brand_2 from './../../assets/images/brands/brand_2.png'
import Brand_3 from './../../assets/images/brands/brand_3.png'
import Brand_4 from './../../assets/images/brands/brand_4.png'
import Brand_5 from './../../assets/images/brands/brand_5.png'
import Brand_6 from './../../assets/images/brands/brand_6.png'
import Brand_7 from './../../assets/images/brands/brand_7.png'
import Brand_8 from './../../assets/images/brands/brand_8.png'
import Brand_9 from './../../assets/images/brands/brand_9.png'
import Brand_10 from './../../assets/images/brands/brand_10.png'
import Brand_11 from './../../assets/images/brands/brand_11.png'
import Brand_12 from './../../assets/images/brands/brand_12.png'

function HeroSection() {
  return (
    <div className={styles['container']}>
      <Image
        src={Brand_1}
        alt='Brand 1'
        className={styles['container__pictor']}
      />

      <Image
        src={Brand_2}
        alt='Brand 2'
        className={styles['container__pictor']}
      />

      <Image
        src={Brand_3}
        alt='Brand 3'
        className={styles['container__pictor']}
      />

      <Image
        src={Brand_4}
        alt='Brand 4'
        className={styles['container__pictor']}
      />

      <Image
        src={Brand_5}
        alt='Brand 5'
        className={styles['container__pictor']}
      />

      <Image
        src={Brand_6}
        alt='Brand 6'
        className={styles['container__pictor']}
      />

      <Image
        src={Brand_7}
        alt='Brand 7'
        className={styles['container__pictor']}
      />

      <Image
        src={Brand_8}
        alt='Brand 8'
        className={styles['container__pictor']}
      />

      <Image
        src={Brand_9}
        alt='Brand 9'
        className={styles['container__pictor']}
      />

      <Image
        src={Brand_10}
        alt='Brand 10'
        className={styles['container__pictor']}
      />

      <Image
        src={Brand_11}
        alt='Brand 11'
        className={styles['container__pictor']}
      />

      <Image
        src={Brand_12}
        alt='Brand 12'
        className={styles['container__pictor']}
      />
    </div>
  )
}

export default HeroSection
