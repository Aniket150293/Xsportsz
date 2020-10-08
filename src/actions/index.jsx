
export const checkLoginDetails = (data) =>
(
  {
    type: 'CHECK_LOGIN_DETAILS',
    data : data
  }
);

export const submitTransferMoneyDetails = (data,token) =>
(
  {
    type: 'submitTransferMoneyDetails',
    data : data,
    token: token
  }
);

export const getRegisteredUserList = (data,token) =>
(
  {
    type: 'GET_REGISTERED_USER_LIST',
    data : data,
    token: token
  }
);

export const registerBankByAdmin = (data,token) =>
(
  {
    type: 'REGISTER_BANK_BY_ADMIN',
    token: token,
    data : data
  }
);

export const submitRegisteredUser = (data,token) =>
(
  {
    type: 'SUBMIT_REGISTERED_USER',
    data : data,
    token: token
  }
);


export const submitBankDetailsByUser = (data,token) =>
(
  {
    type: 'SUBMIT_USER_BANK_DETAILS',
    token: token,
    data : data
  }
);

export const getMasterBankList = (data,token) =>
(
  {
    type: 'MASTER_BANK_LIST',
    token: token,
    data : data
  }
);


export const submitRegisteredBankAdmin = (data,token) =>
(
  {
    type: 'SUBMIT_BANK_ADMIN_DETAILS',
    token: token,
    data : data
  }
);


export const getRegisteredUsersBankList = (data,token) =>
(
  {
    type: 'USER_BANK_LIST',
    token: token,
    data : data
  }
);

export const getBankSpecificUserList = (data,token) =>
(
  {
    type: 'BANK_SPECIFIC_USER_LIST',
    token: token,
    data : data
  }
);

export const getBalence = (data,token) =>
(
  {
    type: 'getBalence',
    token: token,
    data : data
  }
);

export const getAccounts = (data,token) =>
(
  {
    type: 'getAccounts',
    token: token,
    data : data
  }
);

export const downloadRegisteredCustomerList = (data,token) =>
(
  {
    type: 'DOWNLOAD_REGISTERED_CUSTOMER_LIST',
    token: token,
    data : data
  }
);

export const searchAccount = (data,token) =>
(
  {
    type: 'searchAccount',
    token: token,
    data : data
  }
);

export const forgetPassword = (data,token) =>
(
  {
    type: 'forgetPassword',
    token: token,
    data : data
  }
);

export const resetPassword = (data,token) =>
(
  {
    type: 'resetPassword',
    token: token,
    data : data
  }
);

export const getHomeDetails = (data,token) =>
(
  {
    type: 'getHomeDetails',
    token: token,
    data : data
  }
);

export const logout = () =>
(
  {
    type: 'logout',
  }
);




export const getSports = (data,token) =>
(
  {
    type: 'getSports',
    token: token,
    data : data
  }
);

export const getSpetialization = (data,token) =>
(
  {
    type: 'getSpetialization',
    token: token,
    data : data
  }
);