import HeroSlider from "../header/HeroSlider";
import Category from "./homePage/category/Category";
import Discount from "./homePage/discount/Discount";
import Marquees from "./homePage/Marquees";
import Testimonial from "./homePage/Testimonial";

const Main = () => {
  return (
    <>
      <HeroSlider />
      <section className="my-10">
        <Marquees />
      </section>

        <section className="mt-32 max-w-[1350px] mx-auto">
            <Category/>
        </section>
        <section className="mt-32 max-w-[1350px] mx-auto px-4">
            <Discount/>
        </section>
        <section className="mt-32 max-w-[1350px] mx-auto px-4">
            <Testimonial/>
        </section>
    </>
  );
};

export default Main;
