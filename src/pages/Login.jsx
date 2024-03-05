import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/mtn-logo.svg";
import success from "../assets/congratulation.png";
import { authSchema } from "../schemas";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState("");
  const [key, setKey] = useState("");
  const initialValues = {
    Password: "",
    Username: "",
    TerminalId: "",
  };
  const onSubmit = async (payload, actions) => {
    try {
      const res = await Axios.post(Request.login, payload);
      if (res.data.Status === "Success") {
        console.log(res);
        setToken(res.data.Token);
        setKey(res.data.Key);
        setIsOpen(true);
      } else {
        toast.error("Unsuccessful. Please try again.", {
          position: "top-right",
        });
      }
    } catch (error) {
      
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
      });
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  const {
    values,
    touched,
    handleChange,
    handleBlur,
    errors,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: authSchema,
    onSubmit,
  });
  return (
    <>
      <div className="grid lg:grid-cols-2 items-center bg-[#FBFBFB]">
        <div className="py-[30px] px-5 md:px-32 lg:px-24">
          <Link to="/">
            <img src={logo} alt="mtn" className="w-[76px] block mx-auto mb-7" />
          </Link>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="Username" className="text-dark">
                Username
              </label>
              <input
                type="text"
                id="Username"
                name="Username"
                placeholder="Skaikru"
                value={values.Username}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.Username && touched.Username
                    ? "border border-red-500"
                    : ""
                }`}
              />
              {errors.Username && touched.Username && (
                <p className="text-red-500 text-sm text-right font-medium">
                  {errors.Username}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-dark">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="Password"
                placeholder="#1ooGr@0ndar$"
                value={values.Password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.Password && touched.Password
                    ? "border border-red-500"
                    : ""
                }`}
              />
              {errors.Password && touched.Password && (
                <p className="text-red-500 text-sm text-right font-medium">
                  {errors.Password}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="terminalId" className="text-dark">
                Terminal Id
              </label>
              <input
                type="text"
                id="terminalId"
                name="TerminalId"
                placeholder="231167543AR2"
                value={values.TerminalId}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.TerminalId && touched.TerminalId
                    ? "border border-red-500"
                    : ""
                }`}
              />
              {errors.TerminalId && touched.TerminalId && (
                <p className="text-red-500 text-sm text-right font-medium">
                  {errors.TerminalId}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="disabled:opacity-75 disabled:cursor-not-allowed mt-4 w-full bg-primary text-white text-[18px] px-8 py-4 rounded-md transition ease-in-out delay-300"
            >
              Login
            </button>
          </form>
        </div>
        <div className="hidden bg-primry lg:flex justify-center h-screen">
          <div className="h-screen w-[700px]">
            <img
              className="w-full h-full object-cover"
              src="https://img.freepik.com/premium-photo/happy-excited-phone-with-black-woman-studio-text-message-notification-social-media-news-deal-winner-celebration-with-girl-yellow-background-offer-giveaway-surprise_590464-167002.jpg?w=740"
              alt="illustration"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-modalBg z-[9999] items-center flex justify-center transition-all duration-500">
          <div className="w-[317px] md:w-[699px] p-8 text-center border text-white border-primary mx-auto rounded">
            <img
              src={success}
              alt="Success"
              className="w-[200px] mx-auto block"
            />

            <h2 className="text-[16px] my-2 md:text-[32px] font-semibold font-mont">
              Congratulations
            </h2>
            <p className="text-[18px]">Token: {token}</p>
            <p className="text-[18px]">Key: {key}</p>
            <Link to="/">
              <button className="mt-8 font-mont text-[16px] h-[53px] bg-primary w-full rounded">
                Back
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
