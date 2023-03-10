import React from "react";
import Image from "next/image";
import fblogo from "../../Assets/fb_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email address or Phone number is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is Required'),
});

const signin = () => {
  
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission
    setSubmitting(false);
  };
  return (
    <div
      className=" lg:max-w-7xl m-auto sm:flex sm:justify-around sm:items-center md:flex md:justify-around md:items-center lg:flex flex-wrap justify-around items-center sm:space-x-5 md:flex-row "
      style={{ height: "100vh" }}
    >
      <div className="sm:w-2/6 lg:w-3/6">
        <Image src={fblogo} alt="fb_logo" height={70} />
        <div className="p-4">
          <h1 className="text-3xl" style={{ fontFamily: "fontRegular" }}>
            Recent Login
          </h1>
          <p className="text-gray-600">Click your picture or add an account</p>
          <div className="max-w-lg rounded-lg lg:w-2/6 sm:4/6 h-4/5 border border-gray-400 mt-5">
            <div
              className="p-5 flex items-center justify-center rounded-t-lg rounded-r-lg"
              style={{ height: "150px" }}
            >
              <FontAwesomeIcon
                icon={faCirclePlus}
                style={{ fontSize: 40, color: "blue" }}
              />
            </div>
            <div className=" p-5 text-center  bg-white  rounded-b-lg rounded-l-lg">
              <h1
                style={{
                  fontFamily: "fontRegular",
                  color: "#1976F2",
                  fontSize: "20px",
                  background: "transparent",
                }}
              >
                Add Account
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-6/6  lg:w-2/6">
        <div
          className="rounded shadow-lg bg-white p-4 h-auto"
        >
          <div className=" border-b-2 pb-4 border-gray-300">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              // onSubmit={() => handleSubmit(values)}
              onSubmit={(values, actions) => {
                // Handle form submission
                console.log(values);
                actions.setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form className=" space-y-3">
                  <div className=" space-y-3">
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email address or phone number"
                      className="border border-gray-400 w-full p-3 rounded-md"
                      style={{ background: "#E8F0FE" }}
                    />

                    <p className="text-red-600">
                      <ErrorMessage name="email" />
                    </p>
                  </div>
                  <div className=" space-y-3">
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="border border-gray-400 w-full p-3 rounded-md"
                      style={{ background: "#E8F0FE" }}
                    />
                    <p className="text-red-600">
                      <ErrorMessage name="password" />
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-md text-white p-3 text-2xl font-medium"
                    style={{ background: "#1976F2" }}
                  >
                    Log in
                  </button>
                  <p className="text-md text-center text-blue-500">
                    Forgetten password?
                  </p>
                </Form>
              )}
            </Formik>
          </div>
          <div className="mt-6 mb-4">
            <div className="flex items-center justify-center">
              <button className="bg-green-600 text-white rounded-md h-14 p-3 w-3/4 font-medium text-xl">
                {" "}
                Create new account
              </button>
            </div>
          </div>
        </div>
        <p className="text-center mt-4  text-sm"> <span className="font-bold">Create a Page </span> for a celebrity, brand or business </p>
      </div>
    </div>
  );
};

export default signin;
