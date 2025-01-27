import React from "react";
import downArrow from "../assets/images/downArrow.png";

export default function FilterSort() {
  return (
    <div className="flex gap-4 flex-row">
      <select className="w-[107px] h-[32.4px] border border-black">
        <option selected>Filter by</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <select className="w-[107px] h-[32.4px] border border-black">
        <option selected>
          Sort by
          {/* <img src="downArrow" alt="downArrow" className="w-[8px] h-[8px]" /> */}
        </option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  );
}
