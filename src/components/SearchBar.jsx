import SearchIcon from "../assets/icons/search.svg";
export default function SearchBar({ className = "" }) {
  return (
    <span
      className={`rounded-lg bg-[#F5F5F5] h-[56px] flex flex-row items-center gap-2 p-4 ${className}`}
    >
      <img src={SearchIcon} alt="search icon" />
      <input
        type="search"
        name="Search"
        id=""
        placeholder="Search"
        className="  placeholder:text-gray-500 placeholder:text-sm"
      />{" "}
    </span>
  );
}
