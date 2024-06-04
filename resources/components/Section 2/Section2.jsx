import Section2Text from "./Section2Text"
import Section2Image from "./Section2Image"
import styles from "@/resources/css/Section2.module.css"
import star from "@/resources/assets/star-1.png"
import star2 from "@/resources/assets/star-2.png"
import Image from "next/image"

export default function Section2() {
    return (
        <div className={styles["sec-2-wrapper"]}>
            <Section2Text />
            <Section2Image />
            <Image src={star} />
            <Image src={star2} />
        </div>
    )
}