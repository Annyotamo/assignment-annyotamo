import styles from "@/resources/css/HeroImage.module.css"
import Image from "next/image"
import HeroIcon1 from "@/resources/assets/iPhone-13-Pro-Front.png"
import HeroIcon2 from "@/resources/assets/iPhone-13-Pro-Front-1.png"
import HeroIcon3 from "@/resources/assets/iPhone-13-Pro-Front-2.png"
import LinedEclipse from "@/resources/assets/Lined-eclipse.png"
import blur2 from "@/resources/assets/blur-2.png"

export default function HeroImage() {
    return (
        <div className={styles["hero-img-container"]}>
            <Image src={HeroIcon1} />
            <Image src={HeroIcon2} />
            <Image src={HeroIcon3} />
            <Image src={LinedEclipse} />
            <Image src={LinedEclipse} />
            <Image src={LinedEclipse} />
            <Image src={blur2} />
        </div>
    )
}