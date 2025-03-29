import { ChevronLeft, ChevronUp, ChevronDown } from "lucide-react";
import FilterByPrice from "./FilterByPrice";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
export default function Filters() {
  return (
    <>
      {" "}
      <section className="bg-white px-4 py-8">
        <div className="flex flex-row gap-2 items-center">
          <ChevronLeft color="black" size={40} />
          <span className="text-black text-2xl font-medium">Filters</span>
        </div>
        {/* Filter by price */}
        <Disclosure>
          <DisclosureButton className="w-full flex justify-between gap-2 items-center text-black border-b border-black/30 py-3">
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
      </section>
    </>
  );
}
