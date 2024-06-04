import Image from "next/image"
import styles from "./Footer.module.css"
import footerIcon from "@/resources/assets/footer-logo.png"
import footerEmail from "@/resources/assets/footer-email.png"
import footerPhone from "@/resources/assets/footer-number.png"

export default function Contact() {
    return (
        <div className={styles.contact}>
            <Image src={footerIcon} />
            <div>
                <Image src={footerEmail} />
                <p>help@frybix.com</p>
            </div>
            <div>
                <Image src={footerPhone} />
                <p>+1234 456 678 89</p>
            </div>
        </div>)
}