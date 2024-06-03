import Section2Text from "./Section2Text"
import Section2Image from "./Section2Image"
import styles from "@/resources/css/Section2.module.css"

export default function Section2() {
    return (
        <div className={styles["sec-2-wrapper"]}>
            <Section2Text />
            <Section2Image />
        </div>
    )
}