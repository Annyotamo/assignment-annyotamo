import Image from "next/image";
import styles from "@/resources/css/Section4.module.css"
import sec4Main from "@/resources/assets/sec-4-main-img.png"
import peopleImg from "@/resources/assets/sec-4-people-image.png"
import star1 from "@/resources/assets/star-1.png"
import star2 from "@/resources/assets/star-2.png"
import imgBlur from "@/resources/assets/sec-4-blur.png"

export default function Section4() {
    return (
        <div className={styles.wrapper}>
            <div>
                <label>TESTIMONIAL</label>
                <h1>What Our Users Say About Us?</h1>
            </div>
            <div className={styles.content}>
                <Image src={sec4Main} />
                <div>
                    <h2>The Best Financial Accounting App Ever!</h2>
                    <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
                    <div>
                        <Image src={peopleImg} />
                        <p>Nick Jonas</p>
                    </div>
                </div>
            </div>
            <Image src={imgBlur} />
            <Image src={star1} />
            <Image src={star2} />
        </div>
    )
}