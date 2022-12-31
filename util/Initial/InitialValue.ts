import { ICompanyForm, ICreateEmployee } from "types/iForm";

export const initialEmployeeForm: ICreateEmployee = {
  email: "",
  firstName: "",
  lastName: "",
  patronymic: "",
  role: "",
  skills: "",
  phoneNumber: "",
  gender: "",
  country: "",
  city: "",
  image: "",
  streetAddress: "",
  birthDate: null,
  startWork: null,
  endWork: null,
};

export const initialCompany: ICompanyForm = {
  nameCompany: "",
  aboutCompany: "",
  typeCompany: "",
  phoneNumber: "",
  image: null,
  email: "",
  website: "",
  createdDate: null,
};
