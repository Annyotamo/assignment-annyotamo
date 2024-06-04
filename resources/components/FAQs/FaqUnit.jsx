import styles from "./FAQs.module.css"
export default function FaqUnit({ cl }) {
    return (
        <div className={styles[cl]}>
            <h3>The best financial accounting app ever!</h3>
            <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
        </div>
    )
}