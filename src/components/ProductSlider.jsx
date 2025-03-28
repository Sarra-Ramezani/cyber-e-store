import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ShopNowBtn from "./ShopNowBtn";
import PS5 from "../assets/images/banner3-ps5.png";

export default function ProductSlider() {
  return (
    <div className="w-full flex flex-col sm:flex-row">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
        spaceBetween={5}
        slidesPerView={1}
        allowTouchMove={true}
        breakpoints={{
          800: { slidesPerView: 4 },
        }}
      >
        <SwiperSlide>
          <div className="w-[80%]  bg-white flex flex-col gap-4 justify-center sm:items-start items-center py-14 px-8">
            <img className="w-2/3" src={PS5} alt="" />
            <h3 className="font-light text-black text-5xl">PS5</h3>
            <p className="font-medium text-[#909090] text-sm text-wrap text-center">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <ShopNowBtn className="border-black text-black py-4 w-[60%]"></ShopNowBtn>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[80%]  bg-[#F9F9F9] flex flex-col gap-4 justify-center sm:items-start items-center py-14 px-8">
            <img className="w-2/3" src={PS5} alt="" />
            <h3 className="font-light text-black text-5xl">PS5</h3>
            <p className="font-medium text-[#909090] text-sm text-wrap text-center">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <ShopNowBtn className="border-black text-black py-4 w-[60%]"></ShopNowBtn>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[80%]  bg-[#EAEAEA] flex flex-col gap-4 justify-center sm:items-start items-center py-14 px-8">
            <img className="w-2/3" src={PS5} alt="" />
            <h3 className="font-light text-black text-5xl">PS5</h3>
            <p className="font-medium text-[#909090] text-sm text-wrap text-center">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <ShopNowBtn className="border-black text-black py-4 w-[60%]"></ShopNowBtn>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[80%]  bg-[#2C2C2C] flex flex-col gap-4 justify-center sm:items-start items-center py-14 px-8">
            <img className="w-2/3" src={PS5} alt="" />
            <h3 className="font-light text-white text-5xl">PS5</h3>
            <p className="font-medium text-[#909090] text-sm text-wrap text-center">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <ShopNowBtn className="border-black text-black py-4 w-[60%] "></ShopNowBtn>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
