import Image from "next/image"
import styles  from "./cssmodules/passions.module.css"

const Passions = () => {
    return(
        <div className={styles.main}>
            <div>
              <h1 className={styles.heading}>MY  PASSIONS</h1>
            </div>
            <div className={styles.images}>
                {/* painting */}
                <div>
                    <Image src="/images/painting.jpg" alt="painting" width={400} height={400} className={styles.img}></Image>
                    <h4 className={styles.h4}>painting</h4>
                </div>
                <div>
                    <Image src="/images/mural.jpg" alt="mural" width={400} height={400} className={styles.img}></Image>
                    <h4 className={styles.h4}>Murals</h4>
                </div>
                <div>
                    <Image src="/images/drawing.jpg" alt="drawing" width={400} height={400} className={styles.img}></Image>
                    <h4 className={styles.h4}>Drawing</h4>
                </div>

            </div>

        </div>
    )
}
export default Passions