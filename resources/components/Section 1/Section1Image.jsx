import Image from "next/image";
import sectionImage from "@/resources/assets/iPhone-13-Pro-Front.png";
import EclipseLoops from "../Header/EclipseLoops"
import sectionImageBlur from "@/resources/assets/section1fade.png"
import styles from "@/resources/css/section1Image.module.css"
export default function Section1Image() {
    return (
        <div className={styles["section-one-image-container"]}>
            <div>
                <Image src={sectionImage} />
                <div>
                    <EclipseLoops />
                </div>
                <Image src={sectionImageBlur} className={styles.blur} />
            </div>
        </div>
    )
}