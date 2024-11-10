import styles  from "./cssmodules/about.module.css"
import Link from "next/link"
import Image from "next/image"


const About = () => {
    return(
        <div className={styles.main}>
        {/* left-side */}
        <div className={styles.leftside}>

            <h3 className={styles.h3}>About me</h3>
            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet. In eu mi bibendum neque egestas congue quisque. Metus vulputate eu scelerisque felis imperdiet proin. Quis commodo odio aenean sed. Lorem mollis aliquam ut porttitor leo a. Consectetur purus ut faucibus pulvinar elementum. At risus viverra adipiscing at in. Felis bibendum ut tristique et. Risus nullam eget felis eget nunc lobortis mattis. In fermentum et sollicitudin ac orci phasellus egestas tellus. Cursus vitae congue mauris rhoncus aenean. Amet est placerat in egestas. Praesent tristique magna sit amet purus gravida.</p>
            <button className={styles.button}><Link href="/about" className={styles.link}>Find out more</Link></button>
        </div>
        {/* right-side */}
        <div className={styles.rightside}>
              <Image src="/images/girl2.jpg" alt="artist" width={450} height={550} className={styles.img}></Image>
            
        </div>
    </div>
    )
}
export default About;