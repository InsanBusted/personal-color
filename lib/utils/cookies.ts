import Cookies from "js-cookie";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveToCookies = (key: string, value: any, days = 7) => {
  Cookies.set(key, JSON.stringify(value), {
    expires: days,
  });
};

export const getFromCookies = <T>(key: string): T | null => {
  const data = Cookies.get(key);
  return data ? JSON.parse(data) : null;
};

// HAPUS COOKIE
export const removeCookie = (key: string) => {
  Cookies.remove(key);
};
