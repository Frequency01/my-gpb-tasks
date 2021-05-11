import { call, put, takeEvery } from "redux-saga/effects";
import { showLoader, hideLoader, showAlert } from "./actions";
import {
  REQUETST_REPAIRS_LIST,
  FETCH_REPAIRS_LIST,
  REQUEST_SELECTED_REPAIR,
  FETCH_SELECTED_REPAIR,
} from "./types";

export function* sagaWatcher() {
  yield takeEvery(REQUETST_REPAIRS_LIST, repairsListSagaWorker);
  yield takeEvery(REQUEST_SELECTED_REPAIR, selectedRepairSagaWorker);
}

function* repairsListSagaWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchRepairs);
    yield put({ type: FETCH_REPAIRS_LIST, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put(showAlert("Произошла ошибка!"));
    yield put(hideLoader());
  }
}

async function fetchRepairs() {
  const response = await fetch("http://localhost:7070/api/services");

  return await response.json();
}

function* selectedRepairSagaWorker(action) {
  try {
    yield put(showLoader());
    const payload = yield call(fetchRepairDetails, action.payload);
    yield put({ type: FETCH_SELECTED_REPAIR, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put(showAlert("Произошла ошибка!"));
    yield put(hideLoader());
  }
}

async function fetchRepairDetails(id) {
  const response = await fetch(`http://localhost:7070/api/services/${id}`);
  console.log(response);
  return await response.json();
}
