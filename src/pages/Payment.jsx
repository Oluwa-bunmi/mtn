import { Link } from "react-router-dom";
import logo from "../assets/mtn-logo.svg";
import success from "../assets/congratulation.png";
import { paymentSchema } from "../schemas";
import Request from "../lib/request";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
const Payment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [paypageLink, setPaypageLink] = useState("");
  const [responseMsg, setResponseMsg] = useState("");
  const initialValues = {
    Customer: {
      Email: "",
      Name: "Anthony",
      Phone: "2349132059016",
      TokenUserId: "2349132059016",
      TokenId: "W812-11ad-123",
      TokenPin: "1234",
    },
    Customization: {
      LogoUrl: "https://testpay.mtn.ng/assets/icons/momo.svg",
      Title: "CAPTIVE",
      Description: "MTN Products Subscription",
    },
    MetaData: {
      ValueKind: "1",
    },
    RequestHeader: {
      MerchantId: "",
      TerminalId: "",
      TimeStamp: "",
      Signature: "",
    },
    TraceId: "",
    Currency: "NGN",
    ProductId: "RACT_NG_Data_307",
    Amount: 201.0,
    FeeBearer: "M",
    ReturnUrl: "https://engage1.mtn.ng/zerod-web/r/thankyou?package=100MB",
   
  };
  const onSubmit = async (payload, actions) => {
    try {
      const res = await Axios.post(Request.invoke_payment, payload);
      if (res.data.responseHeader.responseMessage === "Successful") {
        setTransactionId(res.data.transactionId);
        setPaypageLink(res.data.payPageLink);
        setResponseMsg(res.data.responseHeader.responseMessage);
        console.log(res);
      } else {
        console.log(res);
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
    validationSchema: paymentSchema,
    onSubmit,
  });
  return (
    <>
      <div className="grid lg:grid-cols-2 items-center bg-[#FBFBFB]">
        <div className="py-[30px] px-5 md:px-32 lg:px-24 lg:h-screen lg:overflow-scroll">
          <Link to="/">
            <img src={logo} alt="mtn" className="w-[76px] block mx-auto mb-7" />
          </Link>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="name" className="text-dark">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="Customer.Name"
                value={values.Customer.Name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.Customer &&
                  errors.Customer.Name &&
                  touched.Customer &&
                  touched.Customer.Name
                    ? "border border-red-500"
                    : ""
                }`}
              />

              {errors.Customer &&
                errors.Customer.Name &&
                touched.Customer &&
                touched.Customer.Name && (
                  <p className="text-red-500 text-sm text-right font-medium">
                    {errors.Customer.Name}
                  </p>
                )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-dark">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="Customer.Email"
                value={values.Customer.Email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.Customer &&
                  errors.Customer.Email &&
                  touched.Customer &&
                  touched.Customer.Email
                    ? "border border-red-500"
                    : ""
                }`}
              />
              {errors.Customer &&
                errors.Customer.Email &&
                touched.Customer &&
                touched.Customer.Email && (
                  <p className="text-red-500 text-sm text-right font-medium">
                    {errors.Customer.Email}
                  </p>
                )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-dark">
                Phone
              </label>
              <input
                type="number"
                id="phone"
                name="Customer.Phone"
                value={values.Customer.Phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.Customer &&
                  errors.Customer.Phone &&
                  touched.Customer &&
                  touched.Customer.Phone
                    ? "border border-red-500"
                    : ""
                }`}
              />
              {errors.Customer &&
                errors.Customer.Phone &&
                touched.Customer &&
                touched.Customer.Phone && (
                  <p className="text-red-500 text-sm text-right font-medium">
                    {errors.Phone}
                  </p>
                )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="token" className="text-dark">
                Token User Id
              </label>
              <input
                type="number"
                id="token"
                name="Customer.TokenUserId"
                value={values.Customer.TokenUserId}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.Customer &&
                  errors.Customer.TokenUserId &&
                  touched.Customer &&
                  touched.Customer.TokenUserId
                    ? "border border-red-500"
                    : ""
                }`}
              />
              {errors.Customer &&
                errors.Customer.TokenUserId &&
                touched.Customer &&
                touched.Customer.TokenUserId && (
                  <p className="text-red-500 text-sm text-right font-medium">
                    {errors.Customer.TokenUserId}
                  </p>
                )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="tokenId" className="text-dark">
                Token Id
              </label>
              <input
                type="string"
                id="tokenId"
                name="Customer.TokenId"
                value={values.Customer.TokenId}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.Customer &&
                  errors.Customer.TokenId &&
                  touched.Customer &&
                  touched.Customer.TokenId
                    ? "border border-red-500"
                    : ""
                }`}
              />
              {errors.Customer &&
                errors.Customer.TokenId &&
                touched.Customer &&
                touched.Customer.TokenId && (
                  <p className="text-red-500 text-sm text-right font-medium">
                    {errors.Customer.TokenId}
                  </p>
                )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="tokenPin" className="text-dark">
                Token Pin
              </label>
              <input
                type="string"
                id="tokenPin"
                name="Customer.TokenPin"
                value={values.Customer.TokenPin}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.Customer &&
                  errors.Customer.TokenPin &&
                  touched.Customer &&
                  touched.Customer.TokenPin
                    ? "border border-red-500"
                    : ""
                }`}
              />
              {errors.Customer &&
                errors.Customer.TokenPin &&
                touched.Customer &&
                touched.Customer.TokenPin && (
                  <p className="text-red-500 text-sm text-right font-medium">
                    {errors.Customer.TokenPin}
                  </p>
                )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="LogoUrl" className="text-dark">
                Logo Url
              </label>
              <input
                type="text"
                id="LogoUrl"
                name="Customization.LogoUrl"
                value={values.Customization.LogoUrl}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.Customization &&
                  errors.Customization.LogoUrl &&
                  touched.Customization &&
                  touched.Customization.LogoUrl
                    ? "border border-red-500"
                    : ""
                }`}
              />

              {errors.Customization &&
                errors.Customization.LogoUrl &&
                touched.Customization &&
                touched.Customization.LogoUrl && (
                  <p className="text-red-500 text-sm text-right font-medium">
                    {errors.Customization.LogoUrl}
                  </p>
                )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="title" className="text-dark">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="Customization.Title"
                value={values.Customization.Title}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.Customization &&
                  errors.Customization.Title &&
                  touched.Customization &&
                  touched.Customization.Title
                    ? "border border-red-500"
                    : ""
                }`}
              />

              {errors.Customization &&
                errors.Customization.Title &&
                touched.Customization &&
                touched.Customization.Title && (
                  <p className="text-red-500 text-sm text-right font-medium">
                    {errors.Customization.Title}
                  </p>
                )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="description" className="text-dark">
                Description
              </label>
              <input
                type="text"
                id="description"
                name="Customization.Description"
                value={values.Customization.Description}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.Customization &&
                  errors.Customization.Description &&
                  touched.Customization &&
                  touched.Customization.Description
                    ? "border border-red-500"
                    : ""
                }`}
              />

              {errors.Customization &&
                errors.Customization.Description &&
                touched.Customization &&
                touched.Customization.Description && (
                  <p className="text-red-500 text-sm text-right font-medium">
                    {errors.Customization.Description}
                  </p>
                )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="ValueKind" className="text-dark">
                Value Kind
              </label>
              <input
                type="text"
                id="ValueKind"
                name="MetaData.ValueKind"
                value={values.MetaData.ValueKind}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.MetaData &&
                  errors.MetaData.ValueKind &&
                  touched.MetaData &&
                  touched.MetaData.ValueKind
                    ? "border border-red-500"
                    : ""
                }`}
              />

              {errors.Customization &&
                errors.MetaData.ValueKind &&
                touched.Customization &&
                touched.MetaData.ValueKind && (
                  <p className="text-red-500 text-sm text-right font-medium">
                    {errors.MetaData.ValueKind}
                  </p>
                )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="merchantId" className="text-dark">
                Merchant Id
              </label>
              <input
                type="text"
                id="merchantId"
                name="RequestHeader.MerchantId"
                value={values.RequestHeader.MerchantId}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.RequestHeader &&
                  errors.RequestHeader.MerchantId &&
                  touched.RequestHeader &&
                  touched.RequestHeader.MerchantId
                    ? "border border-red-500"
                    : ""
                }`}
              />
              {errors.RequestHeader &&
                errors.RequestHeader.MerchantId &&
                touched.RequestHeader &&
                touched.RequestHeader.MerchantId && (
                  <p className="text-red-500 text-sm text-right font-medium">
                    {errors.RequestHeader.MerchantId}
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
                name="RequestHeader.TerminalId"
                value={values.RequestHeader.TerminalId}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.RequestHeader &&
                  errors.RequestHeader.TerminalId &&
                  touched.RequestHeader &&
                  touched.RequestHeader.TerminalId
                    ? "border border-red-500"
                    : ""
                }`}
              />
              {errors.RequestHeader &&
                errors.RequestHeader.TerminalId &&
                touched.RequestHeader &&
                touched.RequestHeader.TerminalId && (
                  <p className="text-red-500 text-sm text-right font-medium">
                    {errors.RequestHeader.TerminalId}
                  </p>
                )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="productId" className="text-dark">
                Product Id
              </label>
              <input
                type="text"
                id="productId"
                name="ProductId"
                value={values.ProductId}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.ProductId && touched.ProductId
                    ? "border border-red-500"
                    : ""
                }`}
              />
              {errors.ProductId && touched.ProductId && (
                <p className="text-red-500 text-sm text-right font-medium">
                  {errors.ProductId}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="traceId" className="text-dark">
                Trace Id
              </label>
              <input
                type="text"
                id="traceId"
                name="TraceId"
                value={values.TraceId}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.TraceId && touched.TraceId
                    ? "border border-red-500"
                    : ""
                }`}
              />
              {errors.TraceId && touched.TraceId && (
                <p className="text-red-500 text-sm text-right font-medium">
                  {errors.TraceId}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="currency" className="text-dark">
                Currency
              </label>
              <input
                type="text"
                id="currency"
                name="Currency"
                value={values.Currency}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.Currency && touched.Currency
                    ? "border border-red-500"
                    : ""
                }`}
              />
              {errors.Currency && touched.Currency && (
                <p className="text-red-500 text-sm text-right font-medium">
                  {errors.Currency}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="amount" className="text-dark">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                name="Amount"
                value={values.Amount}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.Amount && touched.Amount ? "border border-red-500" : ""
                }`}
              />
              {errors.Amount && touched.Amount && (
                <p className="text-red-500 text-sm text-right font-medium">
                  {errors.Amount}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="returnUrl" className="text-dark">
                Return Url
              </label>
              <input
                type="text"
                id="returnUrl"
                name="ReturnUrl"
                value={values.ReturnUrl}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.ReturnUrl && touched.ReturnUrl
                    ? "border border-red-500"
                    : ""
                }`}
              />
              {errors.ReturnUrl && touched.ReturnUrl && (
                <p className="text-red-500 text-sm text-right font-medium">
                  {errors.ReturnUrl}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="feeBearer" className="text-dark">
                Fee Bearer
              </label>
              <input
                type="text"
                id="feeBearer"
                name="FeeBearer"
                value={values.FeeBearer}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.FeeBearer && touched.FeeBearer
                    ? "border border-red-500"
                    : ""
                }`}
              />
              {errors.FeeBearer && touched.FeeBearer && (
                <p className="text-red-500 text-sm text-right font-medium">
                  {errors.FeeBearer}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="signature" className="text-dark">
                Signature
              </label>
              <input
                type="text"
                id="signature"
                name="RequestHeader.Signature"
                value={values.RequestHeader.Signature}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.RequestHeader &&
                  errors.RequestHeader.Signature &&
                  touched.RequestHeader &&
                  touched.RequestHeader.Signature
                    ? "border border-red-500"
                    : ""
                }`}
              />
              {errors.RequestHeader &&
                errors.RequestHeader.Signature &&
                touched.RequestHeader &&
                touched.RequestHeader.Signature && (
                  <p className="text-red-500 text-sm text-right font-medium">
                    {errors.RequestHeader.Signature}
                  </p>
                )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="timeStamp" className="text-dark">
                Time Stamp
              </label>
              <input
                type="text"
                id="timeStamp"
                name="RequestHeader.TimeStamp"
                value={values.RequestHeader.TimeStamp}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-4 border border-gray bg-transparent p-[14px] rounded-md outline-none text-gray ${
                  errors.RequestHeader &&
                  errors.RequestHeader.TimeStamp &&
                  touched.RequestHeader &&
                  touched.RequestHeader.TimeStamp
                    ? "border border-red-500"
                    : ""
                }`}
              />
              {errors.RequestHeader &&
                errors.RequestHeader.TimeStamp &&
                touched.RequestHeader &&
                touched.RequestHeader.TimeStamp && (
                  <p className="text-red-500 text-sm text-right font-medium">
                    {errors.RequestHeader.TimeStamp}
                  </p>
                )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="disabled:opacity-75 disabled:cursor-not-allowed mt-4 w-full bg-primary text-white text-[18px] px-8 py-4 rounded-md transition ease-in-out delay-300"
            >
              Submit
            </button>
          </form>
          {/* </div> */}
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
              {responseMsg}
            </h2>
            {/* <p className="text-[18px]">Token: {responseMsg}</p> */}
            <p className="text-[18px]">Transaction Id: {transactionId}</p>
            <p className="text-[18px]">Paypage link: {paypageLink}</p>
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

export default Payment;
