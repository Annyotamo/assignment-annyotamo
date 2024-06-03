import Image from "next/image";
import styles from "@/resources/css/Section2Text.module.css"
import sec2TextIcon from "@/resources/assets/sec-2-icon-bell.png"

export default function Section2Text() {
    return (
        <div className={styles["sec-2-text"]}>
            <label>ADVANTAGES</label>
            <h1>Why Choose Uifry?</h1>
            <div>
                <Image src={sec2TextIcon} />
                <h3>Clever Notifications</h3>
            </div>
            <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
        </div>
    )
}