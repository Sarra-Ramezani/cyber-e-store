import ShopNowBtn from "./ShopNowBtn";
import IphoneHero from "../assets/images/hero-banner.png";
export default function HeroSection() {
  return (
    <section className="bg-[#211C24] flex flex-col items-center text-center  px-4 pt-20 md:flex-row md:p-32 md:pb-0 md:justify-between md:gap-10">
      <div className="banner-text flex flex-col items-center md:items-start md:w-[65%]  gap-4 md:text-left md:pb-32">
        <p className="text-white/40 font-semibold text-2xl">Pro.Beyond.</p>
        <h1 className="text-white font-[100] text-7xl tracking-[0.01] md:text-8xl ">
          IPhone 14 <span className="font-semibold">Pro</span>
        </h1>
        <p className="text-[#909090] font-medium text-lg">
          Created to change everything for the better. For everyone
        </p>
        <ShopNowBtn className="border-white py-4 px-14 mt-12" />
      </div>
      <div
        className="flex justify-center overflow-clip relative mt-[-200px] w-[80%] md:w-[35%] md:overflow-visible md:place-self-stretch md:aspect-square
"
      >
        <img
          className="relative top-40  md:w-[100%] md:top-0  "
          src={IphoneHero}
          alt="iphone 14 pro"
        />
      </div>
    </section>
  );
}
