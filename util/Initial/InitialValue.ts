import { ICompany, ICreateEmployee } from "types/iForm";

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

export const initialCompany: ICompany = {
  nameCompany: "",
  aboutCompany: "",
  typeCompany: "",
  phoneNumber: "",
  email: "",
  website: "",
  createdDate: null,
};
