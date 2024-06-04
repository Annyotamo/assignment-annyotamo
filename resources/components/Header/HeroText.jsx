import Image from "next/image";
import VectorArrow from "@/resources/assets/vector right arrow.png"
import VectorPlay from "@/resources/assets/vector play.png"
import heroBlur from "@/resources/assets/image.png"
import headerImg2 from "@/resources/assets/header-image-2.png"
import styles from "@/resources/css/HeroText.module.css"

export default function HeroText() {
    return (
        <div className={styles.wrapper}>
            <div className={styles["hero-text-container"]}>
                <Image src={heroBlur} />
                <div>
                    <h1>Make The Best Financial Decisions</h1>
                    <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                </div>
                <div className={styles["hero-buttons"]}>
                    <button>
                        <span>Get started </span>
                        <Image src={VectorArrow} />
                    </button>
                    <button>
                        <Image src={VectorPlay} />
                        <span>Watch video</span>
                    </button>
                </div>
            </div>
            <Image src={headerImg2} width={530} />
        </div>
    )
}