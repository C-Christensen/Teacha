import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../input/input-field";
import Btn from "../button/button";
import "./signup-form.styles.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const onSubmit = (values: any) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Please enter a username"),
  email: Yup.string()
    .email("Please, enter a valid email formart")
    .required("Please enter your email"),
  password: Yup.string()
    .required("Please enter a password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/,
      "Must Contain 7 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .when("password", {
      is: (password) => (password && password.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match"),
    }),
});

function ValidatedSignUp() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <form className="signup-form">
        <InputField
          name="name"
          className="signup-input"
          type="name"
          label="Full Name"
          placeholder="Username"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name ? (
          <div className="error-message">{formik.errors.name}</div>
        ) : null}

        <InputField
          name="email"
          className="signup-input"
          type="email"
          label="Email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email ? (
          <div className="error-message">{formik.errors.email}</div>
        ) : null}

        <InputField
          name="password"
          className="signup-input"
          type="password"
          label="Password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password ? (
          <div className="error-message">{formik.errors.password}</div>
        ) : null}

        <InputField
          name="confirmPassword"
          className="signup-input"
          type="password"
          label="Confirm Password"
          placeholder="Confirm Password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
        {formik.errors.confirmPassword ? (
          <div className="error-message">{formik.errors.confirmPassword}</div>
        ) : null}
      </form>

      <Btn
        navigation="../dashboard/Dashboard"
        className="signup-button"
        title="Sign Up"
      />
    </div>
  );
}

export default ValidatedSignUp;
