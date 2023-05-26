const getErrorMessage = code => {
  switch (code) {
    case 401:
    case '401':
      return 'Invalid credentials, please try again';
    case 404:
    case '404':
      return 'Requested resource not found';
    case 409:
    case '409':
      return 'A user with such an email or mobile phone is already registered ';
    case 500:
    case '500':
      return 'Server error, please try again later';
    default:
      return 'Something went wrong, please try again later';
  }
};

export default getErrorMessage;
