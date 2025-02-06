import { useField } from "formik";
import DownArrow from "../assets/images/downArrow.png";

const FormikSelect = ({ label, options, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div className="relative w-full">
      {/* <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label> */}
      <div className="relative">
        <select
          {...field}
          className="w-full min-w-[200px] h-14 px-3 py-2 bg-[#D9D9D9] rounded
            font-inter text-base font-light text-black/30
            appearance-none
            focus:outline-none focus:ring-2 focus:ring-green-500
            disabled:opacity-50 disabled:cursor-not-allowed"
          value={field.value}
          onChange={(e) => helpers.setValue(e.target.value)}
          onBlur={() => field.onBlur(field.name)}
        >
          <option value="" disabled selected>
            Select {label}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <img src={DownArrow} alt="Down Arrow" className="w-4 h-2" />
        </div>
      </div>
      {meta.touched && meta.error && (
        <div className="text-sm text-red-500 mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default FormikSelect;
