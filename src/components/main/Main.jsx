import HeroSlider from "../header/HeroSlider";
import Category from "./homePage/category/Category";
import Marquees from "./homePage/Marquees";

const Main = () => {
  return (
    <>
      <HeroSlider />
      <section className="my-10">
        <Marquees />
      </section>

        <section className="my-28 max-w-[1350px] mx-auto">
            <Category/>
        </section>
    </>
  );
};

export default Main;
