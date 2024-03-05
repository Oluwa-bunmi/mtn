import * as yup from "yup";
export const authSchema = yup.object().shape({
  Username: yup
    .string()
    .min(5, "Message must be at least 5 characters")
    .required("Required"),
  Password: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .required("Required"),
  TerminalId: yup
    .string()
    .min(12, "TerminalId must be atleast 12 characters long"),
});

export const paymentSchema = yup.object().shape({
  Customer: yup.object().shape({
    Name: yup
      .string()
      .min(5, "Name must be at least 5 characters")
      .required("Required"),
    Phone: yup
      .string()
      .min(2, "Phone number provided is not complete")
      .required("Required"),
    TokenUserId: yup.string().min(5, "TokenUserId provided is not complete"),
    TokenId: yup.string().min(5, "TokenId provided is not complete"),
    TokenPin: yup.string().min(2, "TokenPin provided is not complete"),
    Email: yup.string().email("Invalid email").required("Required"),
  }),
  Customization: yup.object().shape({
    Title: yup.string().required("Required"),
    Description: yup.string().required("Required"),
    LogoUrl: yup.string().min(4, "Link incomplete"),
  }),
  MetaData: yup.object().shape({
    ValueKind: yup.string().min(1, "Value too short"),
  }),
  RequestHeader: yup.object().shape({
    Signature: yup
      .string()
      .min(15, "Signature provided is not complete")
      .required("Required"),
    MerchantId: yup.string().required("Required"),
    TerminalId: yup.string().min(4, "Value too short"),
    TimeStamp: yup.string().required("Required"),
  }),
  TraceId: yup.string().required("Required"),
  ProductId: yup.string().required("Required"),
  Currency: yup.string().required("Required"),
  ReturnUrl: yup.string().required("Required"),
  FeeBearer: yup.string().max(1, "Value should either be M OR C"),
  Amount: yup
    .number()
    .positive("Please enter a positive number")
    .required("Please enter a number"),
});
