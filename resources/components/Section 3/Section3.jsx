import Section3Image from "./Section3Image";
import Section3Text from "./Section3Text";
import styles from "@/resources/css/Section3.module.css"
import star from "@/resources/assets/star-1.png"
import Image from "next/image";
export default function Section3() {
    return (
        <div className={styles.wrapper}>
            <Section3Image />
            <Section3Text />
            <Image src={star} />
        </div>
    )
}