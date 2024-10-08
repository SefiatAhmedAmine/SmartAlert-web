import Footer1 from "../components/Footer/Footer1";
import Header from "../components/Home1/Header";
import Banner from "../components/Home1/Banner/index";
import QuickLinkArea from "../components/Home1/QuickLinkArea";
import Topbar from "../components/Home1/Topbar";
import BrandCategory from "../components/Home1/BrandCategory";
import ShopCard from "../components/Home1/ShopCard/index";
import CompareCar from "../components/Home1/CompareCar/index";
import Testimonial from "../components/Home1/Teatimonial/index";
import Modals from "../components/Home1/Modals";
import MostSearchedUsersCar from "../components/Home1/MostSearchedUsedCar/index";
import RecentLaunchedCar from "../components/Home1/RecentLaunchedCar/index";
import WhyChoose from "../components/Home1/WhyChoose/index";
import UpcomingCars from "../components/Home1/UpcomingCars/index";
import RecomandationCar from "../components/Home1/RecommendedCar/index";
import TopRateUsedCars from "../components/Home1/TopRateUsedCars/index";
import Blog from "../components/Home1/Blog/index";
import CarListingLeftSidebar from './car-listing-left-sidebar';
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations()
  return (
    <>
      <Modals />
      <Topbar />
      <Header />
      <Banner />
      <QuickLinkArea />
      {/* <BrandCategory /> */}
      {/* <MostSearchedUsersCar /> */}
      {/* <RecentLaunchedCar /> */}
      <WhyChoose />
      {/* <UpcomingCars /> */}
      {/* <RecomandationCar /> */}
      {/* <TopRateUsedCars /> */}
      {/* <CompareCar /> */}
      {/* <ShopCard /> */}
      {/* <Testimonial /> */}
      {/* <Blog /> */}
      <Footer1 />
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../messages/${context.locale}.json`)).default
    }
  };
}