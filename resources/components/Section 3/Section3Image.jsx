import sec3Image from "@/resources/assets/sec-3-main-img.png"
import styles from "@/resources/css/Section3Image.module.css"
import Image from "next/image"
import EclipseLoops from "../Header/EclipseLoops"
import visaCard from "@/resources/assets/sec-3-visa-card.png"
import imgBlur from "@/resources/assets/s3-blur.png"
export default function Section3Image() {
    return (
        <div className={styles.wrapper}>
            <div>
                <EclipseLoops />
                <Image src={sec3Image} />
                <Image src={visaCard} />
                <Image src={imgBlur} />
            </div>
        </div>
    )
}