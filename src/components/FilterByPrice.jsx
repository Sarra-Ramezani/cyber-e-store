import React, { useState } from "react";
import { Range } from "react-range";

export default function FilterByPrice() {
  const [values, setValues] = useState([0, 100000]);
  const minRange = 0;
  const maxRange = 100000;
  return (
    <div className="w-full p-4 flex flex-col gap-4 ">
      {/* range manually */}
      <div className="flex justify-between items-center text-black/50 text-sm font-light">
        <div className="flex flex-col gap-2 items-center justify-center">
          <label htmlFor="minPrice" className="w-full text-start">
            From
          </label>
          <input
            id="minPrice"
            type="number"
            value={values[0]}
            min={minRange}
            max={maxRange}
            onChange={(e) =>
              setValues([
                values[0],
                Math.max(Number(e.target.value)),
                values[0] + 1,
              ])
            }
            className="w-full text-center border-[0.5px] rounded-sm p-2 "
          />
        </div>
        <span className="text-6xl font-extralight text-black/15">-</span>
        <div className="flex flex-col gap-2 items-center">
          <label htmlFor="maxPrice" className="w-full text-end">
            To
          </label>
          <input
            id="maxPrice"
            type="number"
            value={values[1]}
            min={values[0]}
            max={maxRange}
            onChange={(e) =>
              setValues([
                values[0],
                Math.max(Number(e.target.value)),
                values[0] + 1,
              ])
            }
            className="w-full text-center border-[0.5px] rounded-sm p-2 "
          />
        </div>
      </div>
      {/* range slider */}
      <Range
        step={1} // Step size
        min={0} // Min value
        max={100000} // Max value
        values={values} // Current values
        onChange={setValues} // Update state on change
        renderTrack={({ props, children }) => (
          <div {...props} className="h-1 bg-gray-300 rounded-full relative">
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="size-3 hover:size-4 bg-black rounded-full shadow-md"
          />
        )}
      />
    </div>
  );
}
