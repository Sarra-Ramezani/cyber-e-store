import SearchBar from "./SearchBar";

export default function FilterByMemory() {
  const productMemory = "16GB";
  const numOfProducts = 100;
  return (
    <div className="relative flex flex-col gap-6 mt-6 overflow-y-scroll h-[410px]">
      <div className="sticky bg-white top-0">
        <SearchBar />
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          name="Brand"
          id={productMemory}
          value={productMemory}
          className=" appearance-none size-4 border rounded-[3px] checked:bg-black "
        />
        <label htmlFor={productMemory}>{productMemory}</label>
        <span className="font-normal text-[12px] text-black/40">
          {numOfProducts}
        </span>
      </div>
    </div>
  );
}
