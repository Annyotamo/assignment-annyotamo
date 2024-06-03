import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import styles from "@/resources/css/HeroBanner.module.css"

export default function HeroBanner() {
    return (
        <div className={styles['hero-banner-container']}>
            <HeroText />
            <HeroImage />
        </div>
    )
}