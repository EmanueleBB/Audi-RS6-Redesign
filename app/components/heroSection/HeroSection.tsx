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
         <div className={styles.buttonsContainer}>
            <button>
               Cerca auto nuove
            </button>
            <button>
               Configura
            </button>
            <button>
               Cerca auto usate
            </button>
         </div>
      </div>
   )
}

export default HeroSection