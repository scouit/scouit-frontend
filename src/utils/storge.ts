type LocalStorgeKeyType = 'access_token' | 'refresh_token';
type SessionStorgeKeyType = '';

export const localStorgeSetItem = (key: LocalStorgeKeyType, value: string) => {
  localStorage.setItem(key, value);
};

export const localStorgeGetItem = (key: LocalStorgeKeyType) => {
  return localStorage.getItem(key);
};

export const localStorgeRemoveItem = (key: LocalStorgeKeyType) => {
  localStorage.removeItem(key);
};

export const localStorgeClear = () => {
  localStorage.clear();
};

export const sessionStorageSetItem = (
  key: SessionStorgeKeyType,
  value: string
) => {
  sessionStorage.setItem(key, value);
};

export const sessionStorageGetItem = (key: SessionStorgeKeyType) => {
  return sessionStorage.getItem(key);
};
