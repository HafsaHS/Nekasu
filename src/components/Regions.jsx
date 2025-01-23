import { useField } from "formik";
import React from "react";
import { RegionDropdown } from "react-country-region-selector";

// Custom Formik Country Select component
const FormikRegionSelect = ({ label, country, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div>
      <RegionDropdown
        className="w-[247px] h-[56px] rounded-sm p-3 bg-gray-100"
        country={country}
        value={field.value}
        onChange={(val) => helpers.setValue(val)}
        onBlur={() => helpers.setTouched(true)}
      />
      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default FormikRegionSelect;
