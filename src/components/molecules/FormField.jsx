import PropTypes from "prop-types";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const FormField = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  disabled,
  error,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div>
      <Label>{label}</Label>
      <div className="relative">
        <Input
          type={type === "password" && isPasswordVisible ? "text" : type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          className={`pr-10 ${error ? "border-red-500" : ""}`}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {isPasswordVisible ? (
              <AiFillEye className="h-5 w-5" />
            ) : (
              <AiFillEyeInvisible className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.string,
};

export default FormField;
