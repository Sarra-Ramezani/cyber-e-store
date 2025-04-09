import { ChevronLeft, ChevronUp, ChevronDown } from "lucide-react";
import FilterByPrice from "./FilterByPrice";
import FilterByBrand from "./FilterByBrand";
import FilterByMemory from "./FilterByMemory";
import FilterByBattery from "./FilterByBattery";
import FilterByScreenType from "./FilterByScreenType";
import FilterByScreenDiagonal from "./FilterByScreenDiagonal";
import FilterByProtectionGlass from "./FilterByProtectionGlass";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
export default function Filters(hidden) {
  return (
    <>
      <section className={`bg-white ${hidden} px-4 py-8 sm:flex sm:flex-col `}>
        <div className="flex flex-row sm:hidden gap-2 items-center">
          <ChevronLeft color="black" size={40} />
          <span className="text-black text-2xl font-medium ">Filters</span>
        </div>
        {/* Filter by price */}
        <Disclosure>
          <DisclosureButton className="w-full flex justify-between gap-2 items-center text-black border-b border-black/30 py-3  text-start">
            Price
            <ChevronDown
              className={`transform transition-transform duration-500 ${
                open ? "rotate-180" : "rotate-0"
              }`}
            ></ChevronDown>
          </DisclosureButton>
          <DisclosurePanel className="text-black">
            <FilterByPrice />
          </DisclosurePanel>
        </Disclosure>

        {/* Filter by Brand */}
        <Disclosure>
          <DisclosureButton className="w-full flex justify-between gap-2 items-center text-black border-b border-black/30 py-3  text-start">
            Brand
            <ChevronDown
              className={`transform transition-transform duration-500 ${
                open ? "rotate-180" : "rotate-0"
              }`}
            ></ChevronDown>
          </DisclosureButton>
          <DisclosurePanel className="text-black">
            <FilterByBrand />
          </DisclosurePanel>
        </Disclosure>
        {/* Filter bt battery capacity */}
        <Disclosure>
          <DisclosureButton className="w-full flex justify-between gap-2 items-center text-black border-b border-black/30 py-3  text-start">
            Battery Capacity
            <ChevronDown
              className={`transform transition-transform duration-500 ${
                open ? "rotate-180" : "rotate-0"
              }`}
            ></ChevronDown>
          </DisclosureButton>
          <DisclosurePanel className="text-black">
            <FilterByBattery />
          </DisclosurePanel>
        </Disclosure>
        {/* Filter by screen type */}
        <Disclosure>
          <DisclosureButton className="w-full flex justify-between gap-2 items-center text-black border-b border-black/30 py-3  text-start">
            Screen Type
            <ChevronDown
              className={`transform transition-transform duration-500 ${
                open ? "rotate-180" : "rotate-0"
              }`}
            ></ChevronDown>
          </DisclosureButton>
          <DisclosurePanel className="text-black">
            <FilterByScreenType />
          </DisclosurePanel>
        </Disclosure>

        {/* Filter By Screen Diagonal */}
        <Disclosure>
          <DisclosureButton className="w-full flex justify-between gap-2 items-center text-black border-b border-black/30 py-3  text-start">
            Screen Diagonal
            <ChevronDown
              className={`transform transition-transform duration-500 ${
                open ? "rotate-180" : "rotate-0"
              }`}
            ></ChevronDown>
          </DisclosureButton>
          <DisclosurePanel className="text-black">
            <FilterByScreenDiagonal />
          </DisclosurePanel>
        </Disclosure>
        {/* Filter By Protection glass */}
        <Disclosure>
          <DisclosureButton className="w-full flex justify-between gap-2 items-center text-black border-b border-black/30 py-3  text-start">
            Protection Glass
            <ChevronDown
              className={`transform transition-transform duration-500 ${
                open ? "rotate-180" : "rotate-0"
              }`}
            ></ChevronDown>
          </DisclosureButton>
          <DisclosurePanel className="text-black">
            <FilterByProtectionGlass />
          </DisclosurePanel>
        </Disclosure>

        {/* Filter By Memory */}
        <Disclosure>
          <DisclosureButton className="w-full flex justify-between gap-2 items-center text-black border-b border-black/30 py-3  text-start">
            Built-in Memory
            <ChevronDown
              className={`transform transition-transform duration-500 ${
                open ? "rotate-180" : "rotate-0"
              }`}
            ></ChevronDown>
          </DisclosureButton>
          <DisclosurePanel className="text-black">
            <FilterByMemory />
          </DisclosurePanel>
        </Disclosure>
      </section>
    </>
  );
}
