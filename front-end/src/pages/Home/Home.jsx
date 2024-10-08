import Footer from "../../components/shared/Footer/Footer";
import Header from "../../components/shared/Header/Header";
import style from "./Home.module.css";
import BaseTheory from "./Sections/BaseTheory/BaseTheory";
import Hero from "./Sections/Hero/Hero";
import JourneyOfAWord from "./Sections/JourneyOfAWord/JourneyOfAWord";
import Testimonials from "./Sections/Testimonials/Testimonials";

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <Header />
      <Hero />
      <JourneyOfAWord />
      <BaseTheory />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
