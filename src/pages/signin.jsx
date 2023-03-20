import React,{useState} from "react";
import Image from "next/image";
import fblogo from "../../Assets/fb_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus,faClose } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";



const months = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const days = [...Array(31)].map((_, i) => {
  const value = (i + 1).toString().padStart(2, "0");
  return { value, label: value };
});

const years = [...Array(100)].map((_, i) => {
  const value = (2023 - i).toString();
  return { value, label: value };
});

const genders = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email address or Phone number is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is Required"),
});

const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
  .required("Enter firstname"),
  surname: Yup.string()
  .required("Enter surname"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email address or Phone number is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is Required"),
  day: Yup.number() 
    .integer()
    .min(1, 'Invalid day')
    .max(31, 'Invalid day')
    .required('Date Required'),
  month: Yup.number()
    .integer()
    .min(1, 'Invalid month')
    .max(12, 'Invalid month')
    .required('Month Required'),
  year: Yup.number()
    .integer()
    .min(1900, 'Invalid year')
    .max(9999, 'Invalid year')
    .required('Year Required'),

  gender: Yup.string().required('Required'),
});

const Signin = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    console.log(e);
  };

  const router = useRouter()

  const handleLoginSubmit = (e) => {
    console.log(e);
    router.push('home')
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
        <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div className=" border-b-2 pb-4 border-gray-300">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              // onSubmit={() => handleSubmit(values)}

              onSubmit={(values) => handleLoginSubmit(values)}
            >
              {({ isSubmitting }) => (
                <Form className=" space-y-3">
                  <div className=" space-y-3">
                    <Field
                      type="email | number"
                      name="email"
                      id="email"
                      placeholder="Email address or phone number"
                      className="border border-gray-400 w-full p-3 rounded-md"
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
              <button
                className="bg-green-600 text-white rounded-md h-14 p-3 w-3/4 font-medium text-xl hover:bg-green-700"
                onClick={() => setShowModal(true)}
              >
                {" "}
                Create new account
              </button>
            </div>
          </div>
        </div>
        <p className="text-center mt-4  text-sm">
          {" "}
          <span className="font-bold">Create a Page </span> for a celebrity,
          brand or business{" "}
        </p>
      </div>

      <>
        {showModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-30"
                onClick={() => setShowModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg  mx-auto bg-white rounded-md shadow-lg">
                  <div className="flex justify-between border-b-2 border-gray-400  mb-2 p-4">
                    <div>
                      <h1
                        className="text-3xl "
                        style={{ fontFamily: "fontBold" }}
                      >
                        Sign Up
                      </h1>
                      <p
                        className="text-sm"
                        style={{ fontFamily: "fontRegular" }}
                      >
                        It&apos;s quick and easy
                      </p>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        className="font-sm cursor-pointer"
                        onClick={() => setShowModal(false)}
                        icon={faClose}
                        style={{ fontSize: 25, color: "grey" }}
                      />
                    </div>
                  </div>
                  <div className="m-4">
                    <Formik
                      initialValues={{
                        firstname: "",
                        surname: "",
                        email: "",
                        password: "",
                      }}
                      validationSchema={SignupSchema}
                      onSubmit={(values) => handleSubmit(values)}
                      // onSubmit={(values, actions) => {
                      //   // Handle form submission
                      //   console.log(values);
                      //   actions.setSubmitting(false);
                      // }}
                    >
                      {({ isSubmitting, errors, touched }) => (
                        <Form className="space-y-3">
                          <div className="flex space-x-3">
                            <div className=" w-full">
                              <Field
                                type="text"
                                name="firstname"
                                id="firstname"
                                placeholder="First name"
                                className="border border-gray-400 w-full p-2 rounded-md bg-gray-100"
                              />

                              <p className="text-red-600">
                                <ErrorMessage name="firstname" />
                              </p>
                            </div>

                            <div className=" w-full">
                              <Field
                                type="text"
                                name="surname"
                                id="surname"
                                placeholder="Surname"
                                className="border border-gray-400 w-full p-2 rounded-md bg-gray-100"
                              />

                              <p className="text-red-600">
                                <ErrorMessage name="surname" />
                              </p>
                            </div>
                          </div>
                          <div className=" space-y-3">
                            <Field
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Email address or phone number"
                              className="border border-gray-400 w-full p-2 rounded-md bg-gray-100"
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
                              placeholder="New password"
                              className="border border-gray-400 w-full p-2 rounded-md bg-gray-100"
                            />
                            <p className="text-red-600">
                              <ErrorMessage name="password" />
                            </p>
                          </div>

                          <div>
                            <label className="text-sm text-gray-600" htmlFor="dob">Date of birth</label>
                            <div className="flex space-x-4">
                              <div className="w-full">
                                <Field
                                  as="select"
                                  id="day"
                                  name="day"
                                  className="border-2 border-gray-500 w-full rounded-md p-2"
                                >
                                  <option value=""> Day </option>
                                  {days.map(({ value, label }) => (
                                    <option key={value} value={value}>
                                      {label}
                                    </option>
                                  ))}
                                </Field>{" "}
                                <p className="text-red-600">
                                  <ErrorMessage name="day" />
                                </p>
                              </div>
                              <div className=" w-full">
                                <Field
                                  as="select"
                                  id="month"
                                  name="month"
                                  className="border-2 border-gray-500 w-full rounded-md p-2"
                                >
                                  <option value="">Month</option>
                                  {months.map(({ value, label }) => (
                                    <option key={value} value={value}>
                                      {label}
                                    </option>
                                  ))}
                                </Field>{" "}
                                <p className="text-red-600">
                                  <ErrorMessage name="month" />
                                </p>
                              </div>
                              <div className=" w-full">
                                <Field
                                  as="select"
                                  id="year"
                                  name="year"
                                  className="border-2 border-gray-500 w-full rounded-md p-2"
                                >
                                  <option value=""> Year </option>
                                  {years.map(({ value, label }) => (
                                    <option key={value} value={value}>
                                      {label}
                                    </option>
                                  ))}
                                </Field>
                                <p className="text-red-600">
                                  <ErrorMessage name="year" />
                                </p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <label className="text-sm text-gray-600" htmlFor="gender">Gender</label>
                            <div role="group" aria-labelledby="gender" className="flex space-x-4">
                              <div className="border-2 p-2 rounded-md border-gray-400 w-full">
                              <label className="flex justify-between">
                                 
                                  Male
                                  <Field
                                    type="radio"
                                    name="gender"
                                    value="male"
                                  />
                                </label>
                              </div>
                              <div className="border-2 p-2 rounded-md border-gray-400 w-full">
                                <label className="flex justify-between">
                                 
                                  Female
                                  <Field
                                    type="radio"
                                    name="gender"
                                    value="female"
                                  />
                                </label>
                              </div>
                              <div className="border-2 p-2 rounded-md border-gray-400 w-full">
                              <label className="flex justify-between">
                                
                                  Custom
                                  <Field
                                    type="radio"
                                    name="gender"
                                    value="custom"
                                  />
                                </label>
                              </div>

                              <ErrorMessage name="gender" />
                            </div>
                          </div>

                          <div className="space-y-3">
                            <p className=" text-xs">
                              People who use our service may have uploaded your
                              contact information to Facebook. Learn more.
                            </p>
                            <p className=" text-xs">
                              By clicking Sign Up, you agree to our Terms,
                              Privacy Policy and Cookies Policy. You may receive
                              SMS notifications from us and can opt out at any
                              time.
                            </p>
                          </div>
                          <div className="flex items-center justify-center mx-4">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-green-600 text-white rounded-md h-10  w-2/4 font-medium text-xl hover:bg-green-700"
                            // style={{ background: "#1976F2" }}
                          >
                            Sign up
                          </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>
    </div>
  );
};

export default Signin;
