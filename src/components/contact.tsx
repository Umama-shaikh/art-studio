import styles  from "./cssmodules/contact.module.css"
import Link from "next/link"


const Contact = () =>{
    return(
        <div className={styles.main}>
            <div >
                <h2 className={styles.h2}>Write to me and we will find the <br />perfect solutions for you!</h2>
            </div>
            <div>
                <button className={styles.button}>
                    <Link href="#" className={styles.link}>CONTACT</Link>
                </button>
            </div>
        </div>
    )
}
export default Contact;