import styles from './cssmodules/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import SocialMedia from './social-media'


const Footer = () => {
    return(
        <div>
            {/* follow me seciton */}
            <div>
                <div className={styles.followme}>
                    <h1 className={styles.heading1}>FOLLOW ME ON <br />INSTAGRAM</h1>
                     <div className={styles.linkContainer}><Link href="#" className={styles.link}>@artstudio</Link></div>
                    <div>
                        <SocialMedia/>
                    </div>
                </div>
            </div>
            {/* images section */}

            <div className={styles.imageRow}>
                <div className={styles.imageContainer}>
                    <Image src="/images/first.jpg" alt="Image 1" layout="fill" objectFit="cover" className={styles.img} />
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/images/second.jpg" alt="Image 2" layout="fill" objectFit="cover"className={styles.img} />
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/images/third.jpg" alt="Image 3" layout="fill" objectFit="cover" className={styles.img}/>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/images/fourth.jpg" alt="Image 4" layout="fill" objectFit="cover"className={styles.img} />
                </div>
            </div>

            {/* last section of the page */}
            <div className={styles.container}>
                <div className={styles.linkContainer}>
                    <ul className={styles.unorderList}> 
                        <li className={styles.li}><Link href="/" className={styles.links}>MAIN</Link></li>
                        <li className={styles.li}><Link href="/about" className={styles.links}>ABOUT ME</Link></li>
                        <li className={styles.li}><Link href="/" className={styles.links}>OFFER</Link></li>
                        <li className={styles.li}><Link href="/" className={styles.links}>BLOG</Link></li>
                        <li className={styles.li}><Link href="/contact-me"className={styles.links}>CONTACT</Link></li>
                    </ul>
                </div>
                
                <div className={styles.headingContainer}>
                    <h1 className={styles.heading2}>Art Studio</h1>
                </div>

                <div className={styles.pContainer}>
                    <p className={styles.p}>Art Studio</p>
                    <p className={styles.p}>artstudio@gmail.com</p>
                </div>

            </div>
        </div>
    )
}

export default Footer;