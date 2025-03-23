import FavoriteIcon from "../assets/icons/favorites.svg";
import BuyNowBtn from "./BuyNowBtn";
export default function ProductCard({ image, name, price }) {
  return (
    <div className="bg-[#F6F6F6] py-6  px-3 flex flex-col gap-2 items-center text-center rounded-lg w-[40%] sm:w-[23%]">
      <img className="self-end w-10" src={FavoriteIcon} alt="favorite icon" />
      <img className="w-2/3" src={image} alt="" />
      <p className="text-black text-md font-medium ">{name}</p>
      <p className="text-black text-2xl font-semibold">{`$${price}`}</p>
      <BuyNowBtn />
    </div>
  );
}
