import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import FiltersIcon from "../assets/icons/Filters.svg";
import Pagination from "../components/Pagination.jsx";
import ProductCardsContainer from "../components/ProductCardsContainer.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import Filters from "../components/Filters.jsx";
import { NavLink } from "react-router";
export default function Products() {
  const productsCount = 85;
  return (
    <section>
      <Header></Header>
      {/* breadcrumbs */}
      <div className="sm:flex sm:flex-row hidden gap-4 py-10 px-40">
        <Breadcrumbs></Breadcrumbs>
      </div>
      {/* Main section */}
      <div className=" sm:flex sm:px-10  ">
        <div className="sm:w-1/3">
          <Filters></Filters>
        </div>
        <div className="bg-white flex flex-col gap-11 px-4 pb-10 sm:w-2/3">
          {/* filters, sorting and products result*/}
          <div className="flex flex-row flex-wrap sm:flex-row-reverse gap-4 justify-center sm:justify-between ">
            <NavLink to={"/login"}>
              <button className="w-40 sm:hidden text-black text-md font-normal border-[0.5px] border-[#D4D4D4] rounded-lg p-4 flex flex-row justify-between">
                Filters
                <img src={FiltersIcon} alt="Filters icon" />
              </button>
            </NavLink>
            <span className="relative w-40 text-black text-md font-normal border-[0.5px] border-[#D4D4D4] rounded-lg p-4 flex flex-row justify-between align-middle gap-1 ">
              <span>By</span>
              <select name="sort by" id="" className="appearance-none">
                <option value="rating">Rating</option>{" "}
                <option value="price-lh">Price Low to High</option>
                <option value="price-hl">Price High to Low</option>
                <option value="best-seller">Best Sellers</option>
                <option value="newest">Newest Arrivals</option>
              </select>
              <span className="absolute right-4 bottom-6 border-l border-b border-[#9F9F9F] w-3 h-3 rotate-[-45deg]"></span>
            </span>
            <form
              action=""
              className="flex flex-row w-full sm:w-1/2 gap-2 text-black font-medium items-center"
            >
              <label className="text-[#6C6C6C] text-md " htmlFor="input">
                Products Result :
              </label>
              <input
                type="text"
                className="text-lg w-full"
                value={productsCount}
                disabled
              />
            </form>
          </div>
          <ProductCardsContainer></ProductCardsContainer>
          <Pagination></Pagination>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
}
