import React from 'react'
import Image from 'next/image'

import styles from './styles.module.scss'
import Pictore1 from './../../assets/images/brands/image1.png'
import Pictore2 from './../../assets/images/brands/image2.png'
import Pictore3 from './../../assets/images/brands/image3.png'
import Pictore4 from './../../assets/images/brands/image4.png'
import Pictore5 from './../../assets/images/brands/image5.png'
import Pictore6 from './../../assets/images/brands/image6.png'
import Pictore7 from './../../assets/images/brands/image7.png'
import Pictore8 from './../../assets/images/brands/image8.png'
import Pictore9 from './../../assets/images/brands/image9.png'
import Pictore10 from './../../assets/images/brands/image10.png'
import Pictore11 from './../../assets/images/brands/image11.png'
import Pictore12 from './../../assets/images/brands/image12.png'

function HeroSection() {
  return (
    <div className={styles['container']}>
      <Image
        src={Pictore1}
        alt='Brand 1'
        className={styles['container__pictor']}
      />

      <Image
        src={Pictore2}
        alt='Brand 2'
        className={styles['container__pictor']}
      />

      <Image
        src={Pictore3}
        alt='Brand 3'
        className={styles['container__pictor']}
      />

      <Image
        src={Pictore4}
        alt='Brand 4'
        className={styles['container__pictor']}
      />

      <Image
        src={Pictore5}
        alt='Brand 5'
        className={styles['container__pictor']}
      />

      <Image
        src={Pictore6}
        alt='Brand 6'
        className={styles['container__pictor']}
      />

      <Image
        src={Pictore7}
        alt='Brand 7'
        className={styles['container__pictor']}
      />

      <Image
        src={Pictore8}
        alt='Brand 8'
        className={styles['container__pictor']}
      />

      <Image
        src={Pictore9}
        alt='Brand 9'
        className={styles['container__pictor']}
      />

      <Image
        src={Pictore10}
        alt='Brand 10'
        className={styles['container__pictor']}
      />

      <Image
        src={Pictore11}
        alt='Brand 11'
        className={styles['container__pictor']}
      />

      <Image
        src={Pictore12}
        alt='Brand 12'
        className={styles['container__pictor']}
      />
    </div>
  )
}

export default HeroSection
