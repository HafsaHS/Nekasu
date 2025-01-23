import React from "react";
import { Form, useField, useFormikContext } from "formik";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

// Custom Formik Country Select component
const FormikCountrySelect = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { setFieldValue } = useFormikContext();

  return (
    <div>
      <CountryDropdown
        className="w-[247px] h-[56px] rounded-sm"
        value={field.value}
        onChange={(val) => {
          helpers.setValue(val);
          // Reset region when country changes
          setFieldValue("region", "");
        }}
        onBlur={() => helpers.setTouched(true)}
      />
      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default FormikCountrySelect;
