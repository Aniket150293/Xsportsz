export const checkLoginDetails = (data) => ({
  type: "CHECK_LOGIN_DETAILS",
  data: data,
});

export const getRegisteredUserList = (data, token) => ({
  type: "GET_REGISTERED_USER_LIST",
  data: data,
  token: token,
});

export const submitRegisteredUser = (data, token) => ({
  type: "SUBMIT_REGISTERED_USER",
  data: data,
  token: token,
});

export const downloadRegisteredCustomerList = (data, token) => ({
  type: "DOWNLOAD_REGISTERED_CUSTOMER_LIST",
  token: token,
  data: data,
});

export const forgetPassword = (data, token) => ({
  type: "forgetPassword",
  token: token,
  data: data,
});

export const checkPasswordDate = (data, token) => ({
  type: "checkPasswordDate",
  token: token,
  data: data,
});

export const resetPassword = (data, token) => ({
  type: "resetPassword",
  token: token,
  data: data,
});

export const getHomeDetails = (data, token) => ({
  type: "getHomeDetails",
  token: token,
  data: data,
});

export const logout = () => ({
  type: "logout",
});

export const getRole = (data, token) => ({
  type: "getRole",
  token: token,
  data: data,
});

export const getSports = (data, token) => ({
  type: "getSports",
  token: token,
  data: data,
});

export const registerSportDetails = (data, token) => ({
  type: "registerSportDetails",
  token: token,
  data: data,
});

export const getState = (data, token) => ({
  type: "getState",
  token: token,
  data: data,
});

export const getCountry = (data, token) => ({
  type: "getCountry",
  token: token,
  data: data,
});

export const getMysport = (data, token) => ({
  type: "getMysport",
  token: token,
  data: data,
});

export const getSpetialization = (data, token) => ({
  type: "getSpetialization",
  token: token,
  data: data,
});

export const payment = (data, token) => ({
  type: "payment",
  token: token,
  data: data,
});

export const callback = (data, token) => ({
  type: "callback",
  token: token,
  data: data,
});
