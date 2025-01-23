import { useField } from "formik";
import { Select, Option } from "@material-tailwind/react";

const FormikSelect = ({ label, options, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div className="w-[247px] h-[56px] rounded-sm p-3">
      <Select
        label={label}
        value={field.value}
        onChange={(value) => helpers.setValue(value)}
        onBlur={() => field.onBlur(field.name)}
        error={meta.touched && meta.error ? true : false}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
      {meta.touched && meta.error && (
        <div className="text-sm text-red-500 mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default FormikSelect;
