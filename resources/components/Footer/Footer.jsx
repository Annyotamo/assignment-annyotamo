import Image from "next/image";
import styles from "./Footer.module.css"
import copyright from "@/resources/assets/footer-copyright.png"
import FooterContent from "./FooterContent";

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <FooterContent />
            <Image src={copyright} />
        </footer>
    )
}