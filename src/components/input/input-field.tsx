import React from "react";
import "./input-field.css";

interface InputFieldProps {
  label: string;
  placeholder?: string;
  type?: string;
  className?: string;
  name?: string;
  value?: any;
  onChange?: any;
  ref?: any;
}

const InputField = (props: InputFieldProps) => {
  return (
    <div className="custom-input">
      <input
        id={props.label}
        className={props.className}
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.label}
        ref={props.ref}
        onChange={props.onChange}
      />
      <label htmlFor={props.label}>{props.label}</label>
    </div>
  );
};

export default InputField;
