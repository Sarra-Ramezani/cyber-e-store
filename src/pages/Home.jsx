import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";
import SmallBanner from "../components/SmallBanner.jsx";
import Banner1 from "../assets/images/banner1-airpods-promax.png";
import Banner2 from "../assets/images/banner2-vision-pro.png";
import Banner3 from "../assets/images/banner3-ps5.png";
import Banner4 from "../assets/images/banner4-macbook-pro.png";
import ShopNowBtn from "../components/ShopNowBtn.jsx";

export default function Home() {
  const banners = [
    {
      id: 1,
      className: "bg-[#EDEDED] sm:w-1/2 ",
      img: Banner1,
      imgALT: "Airpods promax",
      title: "Apple AirPods Max",
      description: "Computational audio. Listen, it's powerful",
      headingFont: "sm:text-3xl",
    },
    {
      id: 2,
      className: "bg-[#353535] sm:w-1/2 ",
      img: Banner2,
      imgALT: "Apple Vision Pro",
      title: "Apple Vision Pro",
      description: "An immersive way to experience entertainment",
      headingFont: "sm:text-3xl",
    },
    {
      id: 3,
      className: "bg-white sm:w-full sm:text-sm",
      img: Banner3,
      imgALT: "Playstation 5",
      title: "Playstation 5",
      description:
        "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.",
      headingFont: "sm:text-5xl",
    },
  ];
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="banners-container  flex flex-col sm:flex-row sm:h-[600px]">
        <section className="left-banner-container flex flex-col sm:flex-row-reverse sm:flex-wrap sm:w-[50%]">
          {banners.map((banner) => (
            <SmallBanner
              id={banner.id}
              className={`  ${banner.className} `}
              img={banner.img}
              imgALT={banner.imgALT}
              title={banner.title}
              description={banner.description}
              headingFont={banner.headingFont}
            />
          ))}
        </section>
        <section className="right-banner-container sm:w-[50%] ">
          <SmallBanner
            id={4}
            className="bg-[#EDEDED] sm:flex-row-reverse sm:h-[600px] sm:overflow-hidden"
            img={Banner4}
            imgALT="Macbook Air"
            title="Macbook Air"
            description="The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display."
            button={
              <ShopNowBtn className="border-black py-4 w-1/2 text-black self-start" />
            }
          />
        </section>
      </div>
    </div>
  );
}
