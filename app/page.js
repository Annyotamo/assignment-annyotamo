import HeroBanner from "@/resources/components/Header/HeroBanner";
import HeroImage from "@/resources/components/Header/HeroImage";
import HeroText from "@/resources/components/Header/HeroText";
import Navbar from "@/resources/components/Navbar";
import Section1 from "@/resources/components/Section 1/Section1";
import Section2 from "@/resources/components/Section 2/Section2";

export default function Home() {
    return (
        <main>
            <Navbar />
            <HeroBanner />
            <Section1 />
            <Section2 />
        </main>
    );
}
