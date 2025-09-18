"use client";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import HeroSection from "./HeroSection";
import ProductShowcaseSection from "./ProductShowcaseSection";
import HydrationEssentialsSection from "./HydrationEssentialsSection";
import { motion } from "framer-motion";
import AboutUsSection from "./AboutUsSection";
import FAQSection from "./FAQSection";
import ContactSection from "./ContactSection";

const pageVariants = {
  // initial: { opacity: 0 },
  // animate: {
  //   opacity: 1,
  //   transition: {
  //     duration: 0.6,
  //     staggerChildren: 0.1,
  //     delayChildren: 0.2,
  //   },
  // },
};

const sectionVariants = {
  // initial: { opacity: 0, y: 20 },
  // animate: {
  //   opacity: 1,
  //   y: 0,
  //   transition: { duration: 0.8, ease: "easeOut" },
  // },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <motion.main variants={pageVariants} initial="initial" animate="animate">
        <motion.div variants={sectionVariants}>
          <HeroSection />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <ProductShowcaseSection />
          <HydrationEssentialsSection />
          <AboutUsSection />
          <FAQSection />
          <ContactSection />
        </motion.div>
      </motion.main>
      <Footer />
    </>
  );
}
