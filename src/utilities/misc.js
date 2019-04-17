export const getIsoDate = () => new Date(Date.now()).toISOString().split('T')[0];

export const validateEmailFormat = email => {
  const reg = /\S+@\S+\.\S+/;
  return reg.test(email);
};