import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'

const SubNavbar = () => {
   return (
      <div className={`${styles.navbar} ${styles.subNavbar}`}>
         <h3>
            RS6 Avant
         </h3>
         <Link href=''>
            Dati tecnici
         </Link>
         <Link href=''>
            Dimensioni
         </Link>
         <Link href=''>
            Richiedi un preventivo
         </Link>
         <button>Configura</button>
      </div>
   )
}

export default SubNavbar