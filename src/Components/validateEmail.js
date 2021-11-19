export const validateEmail = (email) => {
  let message;

  if (!email) {
    message = "Email can't be blank";
    return message;
  }
  if (!email.includes("@")) {
    message = "Email is missing @";
    return message;
  }

  const emailSplit = email.split("@");

  emailSplit.forEach((split, index) => {
    if (split.length <= 1) {
      message = "Not a valid email";
      return message;
    }
    if (index > 0 && !split.includes(".")) {
      message = "Not a valid email";
      return message;
    }
    if (index >= 2) {
      message = "Not a valid email";
      return message;
    }
  });
  return message || undefined;
};
