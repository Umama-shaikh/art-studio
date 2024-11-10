import styles from "./contact-me.module.css"
import Image from "next/image"
import SocialMedia from "@/components/social-media"

export default function ContactMe(){
    return(
        <div>
            <div><h1 className={styles.heading1}>CONTACT</h1></div>


            <div className={styles.flexContainer}>
                {/* left side */}
                <div className={styles.leftside}>
                    <h2 className={styles.heading2}>Let's talk about <br /> your idea</h2>

                    <div className={styles.imgContainer}>
                        <Image src="/images/painting2.jpg" alt="doodling"   width={570}
                        height={950} className={styles.img}></Image>
                    </div>
                </div>
                {/* right side */}
                <div className={styles.rightside}>
                    <h3 className={styles.heading3}>READY TO TAKE YOUR SPACE <br />
                     TO THE NEXT LEVEL?</h3>
                     <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa <br /> sapien faucibus.</p>
                     <div className={styles.icon}>
                         <SocialMedia/>
                     </div>
                    <form className={styles.form}>
                        <label className={styles.label}>Name and surname</label>
                        <input type="text" className={styles.input} />

                        <label className={styles.label}>E-mail</label>
                        <input type="email" className={styles.input} />

                        <label className={styles.label}>Message theme:</label>
                        <input type="text" className={styles.input} />

                        <label className={styles.label}>Message:</label>
                        <textarea className={styles.textarea}></textarea>
                        <div className={styles.buttonContainer}>
                            <button type="submit" className={styles.button}>SEND</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}