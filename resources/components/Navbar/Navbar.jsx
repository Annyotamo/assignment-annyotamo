import styles from "./Navbar.module.css"
import logoImage from "@/resources/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
    return (
        <div className={styles["navbar-container"]}>
            <div>
                <Image src={logoImage} alt="UI-Fry Logo" />
                <ul>
                    <li>About Us</li>
                    <li>Pricing</li>
                    <Link href="/features"><li>Features</li></Link>
                    <li>Home</li>
                </ul>
            </div>
            <button>Download</button>
        </div>
    )
}