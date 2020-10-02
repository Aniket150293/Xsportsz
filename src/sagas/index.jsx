import { put, takeLatest, all } from 'redux-saga/effects';

const url="http://localhost:3000/";
const devapi =
{
    'validateUser' : url+'users/validateUser',
    'getRegisteredUserList' : url+'registereduserdetails/getRegisteredUserList',
    'submitRegisteredUser' : url+'registereduserdetails/submitRegisteredUser',
    'registerBankByAdmin' : url+'admindetails/registerBankByAdmin',
    'submitBankDetailsByUser':url+'registereduserdetails/submitBankDetailsByUser',
    'getRegisteredUsersBankList':url+'registereduserdetails/getRegisteredUsersBankList',
    'getMasterBankList':url+'registereduserdetails/getMasterBankList',
    'submitRegisteredBankAdmin':url+'admindetails/submitRegisteredBankAdmin',
    'getBankSpecificUserList':url+'dashboard/getBankSpecificUserList',
    'submitTransferMoneyDetails' :url+'TransferMoneyDetails/submitTransferMoneyDetails',
    'getBalence' :url+'TransferMoneyDetails/getBalence',
    'getAccounts' : url+'TransferMoneyDetails/getAccounts',
    'searchAccount' : url+'TransferMoneyDetails/searchAccount',
    'forgetPassword' : url+'users/forgetPassword',
    'resetPassword' : url+'users/resetPassword',
    'getHomeDetails' : url+'dashboard/getHomeDetails',

}

function* checkLoginDetails(action) {
  const json = yield fetch(
    devapi.validateUser,
    {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(action.data)
    }
    )
    .then(response =>
        response.json()
    );
  yield put({ type: "LOGIN_DETAILS_RECEIVED", json: json });
}

function* submitRegisteredUser(action) {
  const json = yield fetch(
    devapi.submitRegisteredUser,
    {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : action.token
      },
      body : JSON.stringify(action.data)
    }
    )
    .then(response =>
        response.json()
    );
  yield put({ type: "SUBMITTED_REGISTERED_USER_DETAILS_SUCCESS", json: json });
}

function* registerBankByAdmin(action) {
  const json = yield fetch(
    devapi.registerBankByAdmin,
    {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : action.token
      },
      body : JSON.stringify(action.data)
    }
    )
    .then(response =>
        response.json()
    );
  yield put({ type: "REGISTERED_BANK_BY_ADMIN_SUCCESS", json: json });
}

function* getRegisteredUserList(action) {
  const json = yield fetch(
    devapi.getRegisteredUserList,
    {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : action.token
      },
      body : JSON.stringify(action.data)
    }
    )
    .then(response =>
        response.json()
    );
  yield put({ type: "GET_REGISTERED_USER_LIST_SUCCESS", json: json });
}

function* submitBankDetailsByUser(action) {
  const json = yield fetch(
    devapi.submitBankDetailsByUser,
    {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : action.token
      },
      body : JSON.stringify(action.data)
    }
    )
    .then(response =>
        response.json()
    );
  yield put({ type: "SUBMIT_USER_BANK_DETAILS_SUCCESS", json: json });
}

function* getRegisteredUsersBankList(action) {
  const json = yield fetch(
    devapi.getRegisteredUsersBankList,
    {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : action.token
      },
      body : JSON.stringify(action.data)
    }
    )
    .then(response =>
        response.json()
    );
  yield put({ type: "GET_USER_BANK_SUCCESS", json: json });
}

function* getMasterBankList(action) {
  const json = yield fetch(
    devapi.getMasterBankList,
    {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : action.token
      },
      body : JSON.stringify(action.data)
    }
    )
    .then(response =>
        response.json()
    );
  yield put({ type: "MASTER_BANK_LIST_SUCCESS", json: json });
}

function* submitRegisteredBankAdmin(action) {
  const json = yield fetch(
    devapi.submitRegisteredBankAdmin,
    {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : action.token
      },
      body : JSON.stringify(action.data)
    }
    )
    .then(response =>
        response.json()
    );
  yield put({ type: "SUBMITTED_BANK_ADMIN_DETAILS_SUCCESS", json: json });
}

function* getBankSpecificUserList(action) {
  const json = yield fetch(
    devapi.getBankSpecificUserList,
    {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : action.token
      },
      body : JSON.stringify(action.data)
    }
    )
    .then(response =>
        response.json()
    );
  yield put({ type: "BANK_SPECIFIC_USER_LIST_SUCCESS", json: json });
}


function* submitTransferMoneyDetails(action) {
  const json = yield fetch(
    devapi.submitTransferMoneyDetails,
    {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : action.token
      },
      body : JSON.stringify(action.data)
    }
    )
    .then(response =>
        response.json()
    );
  yield put({ type: "submitTransferMoneyDetails_SUCCESS", json: json });
}

function* getBalence(action) {
  const json = yield fetch(
    devapi.getBalence,
    {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : action.token
      },
      body : JSON.stringify(action.data)
    }
    )
    .then(response =>
        response.json()
    );
  yield put({ type: "getBalenceSucsses", json: json });
}

function* getAccounts(action) {
  const json = yield fetch(
    devapi.getAccounts,
    {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : action.token
      },
      body : JSON.stringify(action.data)
    }
    )
    .then(response =>
        response.json()
    );
  yield put({ type: "getAccountsSucsses", json: json });
}

function* searchAccount(action) {
  const json = yield fetch(
    devapi.searchAccount,
    {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : action.token
      },
      body : JSON.stringify(action.data)
    }
    )
    .then(response =>
        response.json()
    );
  yield put({ type: "searchAccountSucsses", json: json });
}

function* forgetPassword(action) {
  const json = yield fetch(
    devapi.forgetPassword,
    {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : action.token
      },
      body : JSON.stringify(action.data)
    }
    )
    .then(response =>
        response.json()
    );
  yield put({ type: "forgetPasswordSucsses", json: json });
}

function* resetPassword(action) {
  const json = yield fetch(
    devapi.resetPassword,
    {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : action.token
      },
      body : JSON.stringify(action.data)
    }
    )
    .then(response =>
        response.json()
    );
  yield put({ type: "resetPasswordSucsses", json: json });
}

function* getHomeDetails(action) {
  const json = yield fetch(
    devapi.getHomeDetails,
    {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : action.token
      },
      body : JSON.stringify(action.data)
    }
    )
    .then(response =>
        response.json()
    );
  yield put({ type: "getHomeDetailsSucsses", json: json });
}

function* logout() {
   yield put({ type: "LOGOUT_SUCCESS"})
  }
 ;




function* actionWatcher() {
  yield takeLatest('CHECK_LOGIN_DETAILS', checkLoginDetails);
  yield takeLatest('GET_REGISTERED_USER_LIST', getRegisteredUserList);
  yield takeLatest('SUBMIT_REGISTERED_USER', submitRegisteredUser);
  yield takeLatest('REGISTER_BANK_BY_ADMIN', registerBankByAdmin);
  yield takeLatest('SUBMIT_USER_BANK_DETAILS', submitBankDetailsByUser);
  yield takeLatest('USER_BANK_LIST', getRegisteredUsersBankList);
  yield takeLatest('MASTER_BANK_LIST', getMasterBankList);
  yield takeLatest('SUBMIT_BANK_ADMIN_DETAILS', submitRegisteredBankAdmin);
  yield takeLatest('BANK_SPECIFIC_USER_LIST', getBankSpecificUserList);
  yield takeLatest('submitTransferMoneyDetails', submitTransferMoneyDetails);
  yield takeLatest('getBalence', getBalence);
  yield takeLatest('getAccounts', getAccounts);
  yield takeLatest('searchAccount', searchAccount);
  yield takeLatest('forgetPassword', forgetPassword);
  yield takeLatest('resetPassword', resetPassword);
  yield takeLatest('getHomeDetails', getHomeDetails);

  yield takeLatest('logout', logout);

}




export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
