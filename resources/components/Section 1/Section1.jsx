import Image from "next/image";
import Section1Text from "./Section1Text";
import styles from "@/resources/css/Section1.module.css"
import imgBlur1 from "@/resources/assets/s1-blur-1.png"
import sec1Main from "@/resources/assets/sec1-main.png"
import imgBlur2 from "@/resources/assets/s1-blur-2.png"
import star from "@/resources/assets/star-2.png"

export default function Section1() {
    return (
        <div className={styles["section-one-container"]}>
            <Image src={sec1Main} />
            <Section1Text />
            <Image src={imgBlur1} />
            <Image src={imgBlur2} />
            <Image src={star} />
        </div>
    )
}