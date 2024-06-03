import Image from "next/image";
import EclipseLoops from "../Header/EclipseLoops";
import sec2Img from "@/resources/assets/iPhone-13-Pro-Front-1.png"
import styles from "@/resources/css/Section2Image.module.css"
import sec2Card from "@/resources/assets/sec-2-small-img.png"
import secBlur from "@/resources/assets/sec-2-blur-img.png"

export default function Section2Image() {
    return (
        <div className={styles.wrapper}>
            <div>
                <EclipseLoops />
            </div>
            <Image src={sec2Img} />
            <Image src={sec2Card} />
            <Image src={secBlur} />
        </div>
    )
}