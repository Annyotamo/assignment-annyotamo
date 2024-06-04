import styles from "@/resources/css/Section1Text.module.css"
import Image from "next/image"
import icon1 from "./section-1-icon-1.png"
import icon2 from "./section-1-icon-2.png"
import icon3 from "./section-1-icon-3.png"


export default function Section1Text() {
    return (
        <div className={styles["section-one-text-container"]}>
            <div>
                <label>FEATURES</label>
                <h1>Uifryu Premium</h1>
            </div>
            <div>
                <Image src={icon1} />
                <h2>Budgeting Intervals</h2>
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>
            <div>
                <Image src={icon2} />
                <h2>Budgeting Intervals</h2>
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>
            <div>
                <Image src={icon3} />
                <h2>Budgeting Intervals</h2>
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>
        </div>
    )
}