const validateForm = (email, password, setEmailerror, setPassworderror) => {
  const isEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!isEmail) {
    setEmailerror(true);
    return;
  }
  if (!isPassword) {
    setPassworderror(true);
    return;
  }

  return null;
};

export default validateForm;
