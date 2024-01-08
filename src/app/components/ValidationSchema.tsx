import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Invalid phone number")
      .required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });