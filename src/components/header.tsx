"use client";

import styles  from "./cssmodules/header.module.css"
import Link from "next/link"
import { FiMenu } from "react-icons/fi";


const Header = () => {
    return(
        <div className={styles.main}>
            <div>
               <h1 className={styles.heading}>Art Studio</h1>
            </div>
            <div className={styles.navList}>
                <ul className={styles.navItem}>
                    <li><Link href="/" className={styles.navLink}>Home</Link></li>
                    <li><Link href="/about"  className={styles.navLink}>About me</Link></li>
                    <li><Link href="/contact-me"  className={styles.navLink}>Contact</Link></li>
                </ul>
            </div>
            <div className={styles.menu}>
                <button className={styles.button}>
                    < FiMenu className={styles.icon}/>
                </button>
            </div>
        </div>
    )
}
export default Header

