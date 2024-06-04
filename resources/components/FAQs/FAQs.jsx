import FaqUnit from "./FaqUnit";
import styles from "./FAQs.module.css";
import star from "@/resources/assets/star-2.png"
import Image from "next/image";


export default function FAQs() {
    return (
        <div className={styles.wrapper}>
            <div>
                <label>FAQ</label>
                <h2>Frequently asked questions</h2>
            </div>
            <div className={styles.faqs}>
                <div>
                    <FaqUnit cl="red" />
                    <FaqUnit cl="white" />
                </div>
                <div>
                    <FaqUnit cl="white" />
                    <FaqUnit cl="red" />
                </div>
                <div>
                    <FaqUnit cl="red" />
                    <FaqUnit cl="white" />
                </div>
            </div>
            <Image src={star} />
        </div>
    )
}