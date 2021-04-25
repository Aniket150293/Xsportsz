import { put, takeLatest, all } from "redux-saga/effects";
import { url } from "../config/index.js";

const devapi = {
  validateUser: url + "users/validateUser",
  getRegisteredUserList: url + "registereduserdetails/getRegisteredUserList",
  submitRegisteredUser: url + "registereduserdetails/submitRegisteredUser",
  registerSportDetails: url + "registerSport/registerSportDetails",
  submitBankDetailsByUser:
    url + "registereduserdetails/submitBankDetailsByUser",
  forgetPassword: url + "users/forgetPassword",
  checkPasswordDate: url + "users/checkPasswordDate",
  resetPassword: url + "users/resetPassword",
  payment: url + "payment/payment",
  callback: url + "callback/callback",
  getRole: url + "TransferMoneyDetails/getRole",
  getSports: url + "TransferMoneyDetails/getSports",
  getState: url + "registereduserdetails/getState",
  getCountry: url + "registereduserdetails/getCountry",
  getMysport: url + "TransferMoneyDetails/getMysport",
  getSpetialization: url + "TransferMoneyDetails/getSpetialization",
};

function* checkLoginDetails(action) {
  const json = yield fetch(devapi.validateUser, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "LOGIN_DETAILS_RECEIVED", json: json });
}

function* submitRegisteredUser(action) {
  const json = yield fetch(devapi.submitRegisteredUser, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: action.token,
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "SUBMITTED_REGISTERED_USER_DETAILS_SUCCESS", json: json });
}

function* registerSportDetails(action) {
  const json = yield fetch(devapi.registerSportDetails, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: action.token,
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "SPORT_REGISTRATION_SUCCESS", json: json });
}

function* getRegisteredUserList(action) {
  const json = yield fetch(devapi.getRegisteredUserList, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: action.token,
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "GET_REGISTERED_USER_LIST_SUCCESS", json: json });
}

function* forgetPassword(action) {
  const json = yield fetch(devapi.forgetPassword, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: action.token,
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "forgetPasswordSucsses", json: json });
}

function* checkPasswordDate(action) {
  const json = yield fetch(devapi.checkPasswordDate, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: action.token,
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "checkPasswordDateSucsses", json: json });
}

function* resetPassword(action) {
  const json = yield fetch(devapi.resetPassword, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: action.token,
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "resetPasswordSucsses", json: json });
}

function* getHomeDetails(action) {
  const json = yield fetch(devapi.getHomeDetails, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: action.token,
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "getHomeDetailsSucsses", json: json });
}

function* logout() {
  yield put({ type: "LOGOUT_SUCCESS" });
}

function* getRole(action) {
  const json = yield fetch(devapi.getRole, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: action.token,
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "getRolesuccess", json: json });
}

function* getSports(action) {
  const json = yield fetch(devapi.getSports, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: action.token,
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "getSportsSucsses", json: json });
}

function* getMysport(action) {
  const json = yield fetch(devapi.getMysport, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: action.token,
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "getMysportSuccess", json: json });
}

function* getState(action) {
  const json = yield fetch(devapi.getState, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: action.token,
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "getstatesucces", json: json });
}

function* getCountry(action) {
  const json = yield fetch(devapi.getCountry, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: action.token,
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "getcountrysuccess", json: json });
}

function* getSpetialization(action) {
  const json = yield fetch(devapi.getSpetialization, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: action.token,
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "getSpetializationSucsses", json: json });
}

function* payment(action) {
  const json = yield fetch(devapi.payment, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: action.token,
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "paymentParams", json: json });
}

function* callback(action) {
  const json = yield fetch(devapi.callback, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: action.token,
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "paymentStatus", json: json });
}

function* actionWatcher() {
  yield takeLatest("CHECK_LOGIN_DETAILS", checkLoginDetails);
  yield takeLatest("GET_REGISTERED_USER_LIST", getRegisteredUserList);
  yield takeLatest("forgetPassword", forgetPassword);
  yield takeLatest("checkPasswordDate", checkPasswordDate);
  yield takeLatest("resetPassword", resetPassword);
  yield takeLatest("getHomeDetails", getHomeDetails);
  yield takeLatest("payment", payment);
  yield takeLatest("callback", callback);
  yield takeLatest("getRole", getRole);
  yield takeLatest("getSports", getSports);
  yield takeLatest("getMysport", getMysport);
  yield takeLatest("SUBMIT_REGISTERED_USER", submitRegisteredUser);
  yield takeLatest("registerSportDetails", registerSportDetails);
  yield takeLatest("getState", getState);
  yield takeLatest("getCountry", getCountry);
  yield takeLatest("getSpetialization", getSpetialization);
  yield takeLatest("logout", logout);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
