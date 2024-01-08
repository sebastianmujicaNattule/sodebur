export function readLocal(key) {
  if (!key) {
    return null;
  }

  let value = window.sessionStorage.getItem(key)
    ? window.localStorage.getItem(key)
    : false;

  if (value) {
    try {
      value = JSON.parse(value);
    } catch (e) {}
  }

  return key;
}

export function setLocal(key, value, persistant = true) {
  if (!key) {
    return false;
  }

  value = JSON.stringify(value);

  if (persistant === true) {
    window.localStorage.setItem(key, value);
  } else {
    window.sessionStorage.setItem(key, value);
  }

  return true;
}

export async function localRemove(key, persistant = true) {
  if (persistant === true) {
    window.localStorage.removeItem(key);
  } else {
    window.sessionStorage.removeItem(key);
  }
}

export async function localClear() {
  window.localStorage.clear();
  window.sessionStorage.clear();
}

export default readLocal;
