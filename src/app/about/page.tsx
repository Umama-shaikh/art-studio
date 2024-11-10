import styles  from "./aboutme.module.css"
import Image from "next/image"


export default function Aboutme(){
    return(
       <div>
        {/* for above side of about me */}
        <div className={styles.aboutme}>
            <div><h1 className={styles.heading1}>Welcome!</h1></div>
            {/* for above side flex */}
            <div className={styles.main1}>
                {/* Image */}
                <div className={styles.leftside1}> <Image src='/images/aboutme.jpg' alt="artist" width={550} height={650} className={styles.img1}></Image></div>
                {/* aboutme above side */}
                <div className={styles.rightside1}>
                    <h1 className={styles.heading2}>ABOUT ME</h1>
                    <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet. In eu mi bibendum neque egestas congue quisque. Metus vulputate eu scelerisque felis imperdiet proin. Quis commodo odio aenean sed. Lorem mollis aliquam ut porttitor leo a. Consectetur purus ut faucibus pulvinar elementum. At risus viverra adipiscing at in. Felis bibendum ut tristique et. Risus nullam eget felis eget nunc lobortis mattis. In fermentum et sollicitudin ac orci phasellus egestas tellus. Cursus vitae congue mauris rhoncus aenean. Amet est placerat in egestas. Praesent tristique magna sit amet purus gravida.</p>
                </div>
            </div>
        </div>

        {/* below side of div */}
        <div>
            <div className={styles.main2}>
                {/* leftside */}
                <div className={styles.leftside2}>
                    <p className={styles.p1}>Lectus sit amet est placerat in. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Bibendum at varius vel pharetra vel turpis. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Phasellus egestas tellus rutrum tellus. Cursus metus aliquam eleifend mi in nulla posuere. Interdum varius sit amet mattis vulputate enim. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Aenean euismod elementum nisi quis eleifend quam. Nunc sed velit dignissim sodales. Morbi tincidunt ornare massa eget egestas purus. Eu non diam phasellus vestibulum lorem sed risus. Porttitor eget dolor morbi non. Scelerisque in dictum non consectetur. Ut enim blandit volutpat maecenas volutpat. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Amet risus nullam eget felis eget. Sem nulla pharetra diam sit amet nisl suscipit adipiscing.</p>

                    <p className={styles.p1}>Id consectetur purus ut faucibus pulvinar elementum integer enim. Et netus et malesuada fames ac. Eros donec ac odio tempor orci. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Sed velit dignissim sodales ut eu sem integer vitae justo. Amet purus gravida quis blandit turpis cursus in. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Magna sit amet purus gravida quis blandit turpis cursus in. Vitae congue eu consequat ac felis. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Enim sed faucibus turpis in eu. Erat velit scelerisque in dictum non consectetur a erat. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Ac turpis egestas maecenas pharetra. Volutpat blandit aliquam etiam erat velit.</p>
                </div>
                {/* right side */}
                <div className={styles.rightside2}>
                    <Image src="/images/painting.jpg" alt="painting" width={375} height={300} className={styles.img2}></Image>
                    <Image src="/images/girl03.jpg" alt="artist" width={450} height={400} className={styles.img3}></Image>
                </div>

            </div>
        </div>
       </div>
    )
}