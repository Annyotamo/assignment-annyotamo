import Image from "next/image";
import Section1Image from "./Section1Image";
import Section1Text from "./Section1Text";
import styles from "@/resources/css/Section1.module.css"
import section1ImageBlur from "@/resources/assets/section-1-img-blur.png"

export default function Section1() {
    return (
        <div className={styles["section-one-container"]}>
            <Section1Image />
            <Section1Text />
            <Image src={section1ImageBlur} />
        </div>
    )
}