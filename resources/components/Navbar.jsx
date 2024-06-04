import styles from "../css/Navbar.module.css"
import logoImage from "../assets/Logo.png";
import Image from "next/image";
export default function Navbar() {
    return (
        <div className={styles["navbar-container"]}>
            <div>
                <Image src={logoImage} />
                <ul>
                    <li>About Us</li>
                    <li>Pricing</li>
                    <li>Features</li>
                    <li>Home</li>
                </ul>
            </div>
            <button>Download</button>
        </div>
    )
}