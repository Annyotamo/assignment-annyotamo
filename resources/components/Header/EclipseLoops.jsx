import LinedEclipse from "@/resources/assets/Lined-eclipse.png"
import Image from "next/image"
import styles from "@/resources/css/EclipseLoops.module.css"

export default function EclipseLoops() {
    return (
        <div className={styles["eclipses-container"]}>
            <Image src={LinedEclipse} />
            <Image src={LinedEclipse} />
            <Image src={LinedEclipse} />
        </div>
    )
}