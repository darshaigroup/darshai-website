export const sanitizeInput = (str) => {
  return str.replace(/[<>]/g, "");
};

export const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};