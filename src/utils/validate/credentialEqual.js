export const credentialEqual = (credential, user) => {
  if (!credential || !user) {
    return false; 
  }

  const { email, name, phone, address } = credential;

  const isEqual =
    user.email.trim().toLowerCase() === email.trim().toLowerCase() &&
    user.name.trim() === name.trim() &&
    user.phone.trim() === phone.trim() &&
    user.address.trim() === address.trim();

  return isEqual;
};
