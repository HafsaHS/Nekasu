import { useField } from "formik";
import DownArrow from "../assets/images/downArrow.png";

const FormikSelect = ({ label, options, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div className="relative">
      <select
        label={label}
        className="bg-[#D9D9D9] rounded w-[247px] h-[56px] border-0 focus-within:border-0 px-3 font-inter text-base font-light text-black/30 appearance-none"
        value={field.value}
        onChange={(value) => helpers.setValue(value)}
        onBlur={() => field.onBlur(field.name)}
        error={meta.touched && meta.error ? true : false}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute right-[17px] top-1/2 -translate-y-1/2">
        <img src={DownArrow} alt="Down Arrow" />
      </div>
      {meta.touched && meta.error && (
        <div className="text-sm text-red-500 mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default FormikSelect;
