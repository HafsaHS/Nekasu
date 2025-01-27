import React from "react";
import { useField, useFormikContext } from "formik";
import { CountryDropdown } from "react-country-region-selector";
import World from "../assets/images/World.png";
import DownArrow from "../assets/images/downArrow.png";

const FormikCountrySelect = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { setFieldValue } = useFormikContext();

  return (
    <div className="relative bg-[#D9D9D9] rounded-lg w-[247px]">
      <div className="absolute left-2 top-1/2 -translate-y-1/2">
        <img src={World} alt="world" />
      </div>

      <CountryDropdown
        defaultOptionLabel={label}
        className="w-full h-14 pl-16 pr-4 bg-[#D9D9D9] appearance-none font-inter text-base font-light text-black/30"
        value={field.value}
        onChange={(val) => {
          helpers.setValue(val);
          setFieldValue("region", "");
        }}
        onBlur={() => helpers.setTouched(true)}
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <img src={DownArrow} alt="Down Arrow" />
      </div>
      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default FormikCountrySelect;
