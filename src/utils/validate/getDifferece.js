export const getDifference = (credential, user) => {
  const { address, phone } = credential;
  const difference = {};

  if (user.address.trim() !== address.trim()) {
    difference.address = address;
  }

  if (user.phone.trim() !== phone.trim()) {
    difference.phone = phone;
  }
  return difference;
};
