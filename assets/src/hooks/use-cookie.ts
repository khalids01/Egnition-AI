import { useState } from "react";
import Cookies, { CookieSetOptions } from "universal-cookie";

const cookies = new Cookies();

interface Props<T> {
  key: string;
  days?: number;
  defaultValue: T;
}

export const useCookie = <T>(props: Props<T>) => {
  const { key, days = 7, defaultValue } = props;
  const [cookieValue, setCookieValue] = useState(() => cookies.get(key));

  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + days * 24 * 60 * 60 * 1000);

  const OPTIONS: CookieSetOptions = {
    path: "/",
    sameSite: "strict",
    expires: expirationDate,
  };

  const setCookie = (value: T) => {
    cookies.set(key, value, OPTIONS);
    setCookieValue(value);
  };

  const getCookie = (): T => {
    if (!cookies.get(key)) {
      setCookie(defaultValue);
    }
    return cookies.get(key);
  };

  const updateCookie = (value: T) => {
    setCookie(value);
  };

  const removeCookie = () => {
    cookies.remove(key, { path: "/" });
    setCookieValue(undefined);
  };

  return {
    setCookie,
    getCookie,
    updateCookie,
    removeCookie,
    cookieValue,
  };
};
