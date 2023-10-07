import CryptoJS from "crypto-js";

export interface iSignUp {
  hashPassword: string;
  salt: string;
}

export interface iLogin {
  hashPassword: string;
}

const saltArray = CryptoJS.lib.WordArray.random(16);
const salt = saltArray.toString();

export const signUpService = async (password: string) => {
  const passwordWithSalt = password + salt;

  const hash = CryptoJS.SHA256(passwordWithSalt).toString();

  return { salt: salt, hashPassword: hash };
};

export const loginService = async (password: string, salt: any) => {
  const passwordWithSalt = password + salt;

  const hash = CryptoJS.SHA256(passwordWithSalt).toString();

  return { salt: salt, hashPassword: hash };
};
