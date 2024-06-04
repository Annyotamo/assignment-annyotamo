import styles from "./Footer.module.css"
import Contact from "./Contact"
export default function FooterContent() {
    return (
        <div className={styles["footer-content"]}>
            <Contact />
            <div>
                <h4>Links</h4>
                <p>Home</p>
                <p>About Us</p>
                <p>Bookings</p>
                <p>Blog</p>
            </div>
            <div>
                <h4>Legal</h4>
                <p>Terms of use</p>
                <p>Privacy policy</p>
                <p>Cookie policy</p>
            </div>
            <div>
                <h4>Product</h4>
                <p>Take tour</p>
                <p>Live chat</p>
                <p>Reviews</p>
            </div>
            <div>
                <h4>Newsletter</h4>
                <p>Stay up to date</p>
                <div>
                    <button>Your email</button>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}