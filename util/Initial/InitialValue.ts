import { ICompanyDetails, ICompanyForm, ICreateEmployee } from "types/iForm";

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
  salary: "",
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

export const initialCompanyDetails: ICompanyDetails = {
  count: 0,
  female: 0,
  male: 0,
  costsSalary: 0,
};
