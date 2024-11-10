import { GiRobotLeg } from "react-icons/gi"
import styles  from "./cssmodules/hero.module.css"
import Image from "next/image"


const Hero = () => {
    return(
        <div className={styles.main}>
            {/* left-side */}
            <div className={styles.leftside}>

                <h3 className={styles.h3}>Welcome to my world, <br /> where I create <br /> beautiful things</h3>
                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. At <br /> consectetur lorem donec massa sapien faucibus.</p>
                <button className={styles.button}>Find out more</button>
            </div>
            {/* right-side */}
            <div className={styles.rightside}>
                <Image src="/images/girl1.jpg" alt="artist" width={450} height={550} className={styles.img}></Image>
            </div>
        </div>
    )
}

export default Hero