import Navbar from "@/resources/components/Navbar/Navbar";
import Footer from "@/resources/components/Footer/Footer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Made By Annyotamo",
    description: "Built using React",
    icons: {
        icon: "./favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                {/* <Footer /> */}
            </body>
        </html>
    );
}
