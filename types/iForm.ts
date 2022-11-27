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
