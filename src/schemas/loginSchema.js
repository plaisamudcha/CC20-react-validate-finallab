import * as Yup from "yup";

export const loginSchema = Yup.object({
  herocode: Yup.string()
    .matches(/^[A-Z]{3}-\d{4}$/, "Your hero code isn't correct")
    .required(`Please, put your code`),
  email: Yup.string()
    .email("You email format isn't correct")
    .required(`Please, put your email`),
  password: Yup.string()
    .min(6, `Your password should be at least 6 charaters long`)
    .required(`Please, put your password`),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password do not match")
    .required(`Please, put your confirmpassword`),
  age: Yup.number()
    .typeError(`Put your number`)
    .min(10, `Your age should be greater than 10`)
    .max(120, `Your age should be lower than 120`),
  heroClass: Yup.string().required("Choose your class"),
  terms: Yup.boolean().oneOf([true], "Please accept the terms to our guild"),
});
