export interface IRegister {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  confirmPassword: string;
  password: string;
}

export interface IUserDetails {
  firstName: string;
  lastName: string;
  gender: string;
  phoneNumber: string;
  country: string;
  image: string;
  city: string;
  birthDate: Date | null | number;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ICompanyForm {
  nameCompany: string;
  aboutCompany: string;
  typeCompany: string;
  phoneNumber: string;
  image?: string;
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
  image: string;
  birthDate: Date | null | number;
  startWork: Date | null | number;
  endWork: Date | null | number;
}
