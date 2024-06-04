import FAQs from "@/resources/components/FAQs/FAQs";
import Footer from "@/resources/components/Footer/Footer";
import HeroBanner from "@/resources/components/Header/HeroBanner";
import Navbar from "@/resources/components/Navbar";
import Promo from "@/resources/components/Promo/Promo";
import Section1 from "@/resources/components/Section 1/Section1";
import Section2 from "@/resources/components/Section 2/Section2";
import Section3 from "@/resources/components/Section 3/Section3";
import Section4 from "@/resources/components/Section 4/Section4";

export default function Home() {
    return (
        <main>
            <Navbar />
            <HeroBanner />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <FAQs />
            <Promo />
            <Footer />
        </main>
    );
}
