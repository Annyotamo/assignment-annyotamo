import Image from "next/image";
import heroImage from "./hero-banner-image.png"
import HeroText from "./HeroText";
import styles from "@/resources/css/HeroBanner.module.css"
import star from "@/resources/assets/star-2.png"
export default function HeroBanner() {
    return (
        <div className={styles.wrapper}>
            <HeroText />
            <Image src={heroImage} />
            <Image src={star} />
            <Image src={star} />
        </div>
    )
}