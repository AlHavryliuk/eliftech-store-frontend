import { failureToasts } from 'utils/notification/toasts';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^(\+380\d{9})$/;

export const regiserCredentialIsValid = credential => {
  const fullField = Object.values(credential).length === 5;
  if (!fullField) return false;

  const { name, email, phone, password } = credential;

  if (!name.length >= 2) {
    failureToasts(`Name length must be more than 1`);
    return false;
  }
  if (!password.length >= 6) {
    failureToasts(`Name length must be more than 1`);
    return false;
  }
  if (!emailRegex.test(email)) {
    failureToasts(`Not valid email`);
    return false;
  }
  if (!phoneRegex.test(phone)) {
    failureToasts(`Phone must be at formate '+380XXXXXXXXX'`);
    return false;
  }

  return true;
};
