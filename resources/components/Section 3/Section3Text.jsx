import Image from "next/image";
import sec3Icon from "@/resources/assets/sec-3-icon.png"
import styles from "@/resources/css/Section3Text.module.css"
export default function Section3Text() {
    return (
        <div className={styles["text-wrapper"]}>
            <div>
                <Image src={sec3Icon} />
                <h1>Fully Customizable</h1>
            </div>
            <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
        </div>
    )
}