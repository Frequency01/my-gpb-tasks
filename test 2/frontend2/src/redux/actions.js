import {
  REQUETST_REPAIRS_LIST,
  REQUEST_SELECTED_REPAIR,
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
} from "./types";

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function fetchRepairs() {
  return {
    type: REQUETST_REPAIRS_LIST,
  };
}

export function showAlert(text) {
  return { type: SHOW_ALERT, payload: text };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

export function fetchRepairDetails(id) {
  return {
    type: REQUEST_SELECTED_REPAIR,
    payload: id,
  };
}
