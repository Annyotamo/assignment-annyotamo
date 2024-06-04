import promoImage from "@/resources/assets/promo.png"
import Image from "next/image";
import styles from "./Promo.module.css";
import imgBlur from "@/resources/assets/promo-blur.png"
import star from "@/resources/assets/star-2.png"

export default function Promo() {
    return (
        <div className={styles.wrapper}>
            <Image src={promoImage} />
            <Image src={imgBlur} />
            <Image src={star} />
        </div>
    )
}