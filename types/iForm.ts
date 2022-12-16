import { date } from "yup";

export interface IRegister {
  firstName: string;
  lastName: string;
  email: string;
  confirmPassword: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ICreateCompany {
  nameCompany: string;
  aboutCompany: string;
  typeCompany: string;
  phoneNumber: string;
  email: string;
  website: string;
  createdDate: Date | null | number;
}

export interface ICreateEmployee {
  email: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  role: string;
  skills: string;
  phoneNumber: string;
  gender: string;
  country: string;
  city: string;
  streetAddress: string;
  image: any;
  birthDate: Date | null | number;
  startWork: Date | null | number;
  endWork: Date | null | number;
}
