export const TOKEN = {
  ACCESS: 'access_token',
  REFRESH: 'refresh_token',
};

export const isLogin = () => {
  return localStorage.getItem(TOKEN.ACCESS) ? true : false;
};
