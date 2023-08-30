import Image from 'next/image'
import React from 'react'
import styles from './HeroSection.module.css'

const HeroSection = () => {
   return (
      <div className={styles.mainContaienr}>
         <Image
            src="/heroBackground1.png"
            alt="A really really nice car"
            fill
            objectFit='cover'
            quality={100}
         />
      </div>
   )
}

export default HeroSection