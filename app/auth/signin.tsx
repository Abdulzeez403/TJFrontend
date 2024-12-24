"use client";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../src/components/input";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../src/redux/store";
import { login } from "../src/redux/auth/api";
import Button from "../src/components/button";

const SignInForm: React.FC = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (credentials: typeof initialValues) => {
    try {
      await dispatch(login(credentials));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        <h4 className="text-red-300 text-center">{error}</h4>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, values, errors }) => (
            <Form>
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
              <Button type="submit" text="Sign in" isLoading={loading} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignInForm;
