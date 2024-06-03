import styles from "../css/Navbar.module.css"
import logoImage from "../assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
    return (
        <div className={styles["navbar-container"]}>
            <div>
                <Image src={logoImage} />
                <ul>
                    <li>About Us</li>
                    <Link href="/pricing"><li>Pricing</li></Link>
                    <li>Features</li>
                    <li>Home</li>
                </ul>
            </div>
            <button>Download</button>
        </div>
    )
}