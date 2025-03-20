import HamburgerButton from "../assets/icons/hamburger-btn.svg";
import SearchBar from "./SearchBar";
import NavigationBar from "./NavigationBar";
import FavoritesIcon from "../assets/icons/favorites.svg";
import CartIcon from "../assets/icons/cart.svg";
import UserIcon from "../assets/icons/user.svg";

export default function Header() {
  return (
    <div className="h-[5.5rem] bg-white flex flex-row justify-between items-center px-4 py-6] lg:px-40">
      <img
        className="w-[66px]"
        src="../../public/cyber-logo.svg"
        alt="cyber logo"
      />
      <SearchBar className="hidden sm:flex"></SearchBar>
      <NavigationBar className="hidden sm:flex"></NavigationBar>
      <div className="flex flex-row hidden sm:flex sm:gap-0 lg:gap-6">
        <img src={FavoritesIcon} alt="favorites icon" />
        <img src={CartIcon} alt="cart icon" />
        <img src={UserIcon} alt="user icon" />
      </div>
      <button className="size-10 sm:hidden">
        <img src={HamburgerButton} alt="hamburger button" />
      </button>
    </div>
  );
}
