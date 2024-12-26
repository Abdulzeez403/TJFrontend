"use client";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../src/components/input";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../src/redux/store";
import { register } from "../src/redux/auth/api";
import Button from "../src/components/button";

const SignUpForm: React.FC = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, success } = useSelector(
    (state: RootState) => state.auth
  );

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      await dispatch(register(values));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <h4 className="text-red-300 text-center">{error}</h4>
        <h4 className="text-green-500 text-center">{success}</h4>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, values, errors }) => (
            <Form>
              <Input
                label="Name"
                name="name"
                placeholder="Abdulazeez Sodiq"
                type="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
              />
              <Input
                label="Email"
                name="email"
                placeholder="Email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
              />
              <Input
                label="Password"
                name="password"
                placeholder="Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password}
              />
              <Input
                label="ConfirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.confirmPassword}
              />

              <Button type="submit" text="Sign up" isLoading={loading} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUpForm;
