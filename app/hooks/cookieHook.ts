// hooks/cookieHook.ts
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const setCookie = (cookie: { [key: string]: string }) => {
  Object.keys(cookie).forEach((key) => {
    cookies.set(key, cookie[key], { path: "/" });
  });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string) => {
  cookies.remove(name, { path: "/" });
};
