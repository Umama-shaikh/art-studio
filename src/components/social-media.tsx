import styles  from "./cssmodules/social-media.module.css"
import { FaFacebook,  FaPinterest,  FaInstagram, FaTiktok } from "react-icons/fa";


const SocialMedia = () => {
    return(
        <div className={styles.main}>
            
            <FaInstagram className={styles.insta}/>
            <FaFacebook className={styles.fb}/>
            <FaPinterest className={styles.pin}/>
            <FaTiktok className={styles.tiktok}/>
        </div>
    )
}

export default SocialMedia;
