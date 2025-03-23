import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";
import SmallBanner from "../components/SmallBanner.jsx";
import Banner1 from "../assets/images/banner1-airpods-promax.png";
import Banner2 from "../assets/images/banner2-vision-pro.png";
import Banner3 from "../assets/images/banner3-ps5.png";
import Banner4 from "../assets/images/banner4-macbook-pro.png";
import ShopNowBtn from "../components/ShopNowBtn.jsx";
import ScrollRight from "../assets/icons/scroll-right.svg";
import ScrollLeft from "../assets/icons/scroll-left.svg";
import CategoryCard from "../components/CategoryCard.jsx";
import PhonesCategoryIcon from "../assets/icons/Phones-category.svg";
import SmartWatchesCategoryIcon from "../assets/icons/Smart-Watches-category.svg";
import CamerasCategoryIcon from "../assets/icons/Cameras-category.svg";
import HeadphonesCategoryIcon from "../assets/icons/Headphones-category.svg";
import ComputerCategoryIcon from "../assets/icons/Computer-category.svg";
import GamingCategoryIcon from "../assets/icons/Gaming-category.svg";
import ProductCard from "../components/ProductCard.jsx";
import ProductSlider from "../components/ProductSlider.jsx";
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

  const categoryCards = [
    {
      categoryIcon: PhonesCategoryIcon,
      categoryTitle: "Phones",
    },
    {
      categoryIcon: SmartWatchesCategoryIcon,
      categoryTitle: "Smart Watches",
    },
    {
      categoryIcon: CamerasCategoryIcon,
      categoryTitle: "Cameras",
    },
    {
      categoryIcon: HeadphonesCategoryIcon,
      categoryTitle: "Headphones",
    },
    {
      categoryIcon: ComputerCategoryIcon,
      categoryTitle: "Computers",
    },
    {
      categoryIcon: GamingCategoryIcon,
      categoryTitle: "Gaming",
    },
  ];

  const productCards = [
    { image: Banner1, name: "Airpods Promax", price: "900" },
    { image: Banner1, name: "Airpods Promax", price: "900" },
    { image: Banner1, name: "Airpods Promax", price: "900" },
    { image: Banner1, name: "Airpods Promax", price: "900" },
    { image: Banner1, name: "Airpods Promax", price: "900" },
    { image: Banner1, name: "Airpods Promax", price: "900" },
    { image: Banner1, name: "Airpods Promax", price: "900" },
    { image: Banner1, name: "Airpods Promax", price: "900" },
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
      <section
        id="browse-by-category"
        className="bg-[#FAFAFA] py-16 px-4 flex flex-col gap-12 sm:py-20 sm:px-40"
      >
        <div className="flex flex-row justify-between">
          <h2 className="text-black font-medium text-2xl tracking-wider">
            Browse By Category
          </h2>
          <div className="scrolling flex flex-row gap-9 w-20">
            <img src={ScrollLeft} alt="scroll left" />
            <img src={ScrollRight} alt="scroll right" />
          </div>
        </div>
        <div
          id="category-card-container"
          className="flex flex-row flex-wrap gap-4 justify-center"
        >
          {categoryCards.map((card) => (
            <CategoryCard
              icon={card.categoryIcon}
              title={card.categoryTitle}
            ></CategoryCard>
          ))}
        </div>
      </section>
      <section
        id="products"
        className="bg-white py-14 px-4 sm:px-40 flex flex-col gap-8 "
      >
        <div id="tags">
          <ul className="flex flex-row gap-8 text-[#8B8B8B] font-medium text-md">
            <li>
              <a href="/">New Arrival</a>
            </li>
            <li>
              {" "}
              <a href="/">Best Seller</a>
            </li>
            <li>
              <a href="/">Featured Products</a>
            </li>
          </ul>
        </div>
        <div
          id="products-container"
          className=" flex flex-row justify-center gap-4 flex-wrap"
        >
          {productCards.map((product) => (
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </section>
      <ProductSlider></ProductSlider>
    </div>
  );
}
