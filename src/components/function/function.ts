import { BASEURL } from "../../api/config";
import { cleanState } from "../../store/slices/authSlices";
import { userLogin } from "../../types/authType";

import { clearLocalStorageSingIn } from "./localStorage";

export const checkLevelUser = (user: userLogin): void => {
  switch (user.level) {
    case "m":
      window.location.replace(BASEURL + "home");
      break;
    case "a":
      window.location.replace(BASEURL + "dashboard");
      break;
    default:
      window.location.replace(BASEURL);
      break;
  }
};

export const backToLogin = async (): Promise<void> => {
  clearLocalStorageSingIn();
  cleanState();
  window.location.replace(BASEURL);
}

// แปลงเวลาจาก DB Y/m/d H:i:s
export const formatDateTimeISOToCustom = (isoDateTime: string): string => {
  const date = new Date(isoDateTime);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

// แปลง new Date() เป็นรูปแบบ "2023-10-05"
export const createDateToday = (): string => {
  const today: Date = new Date();

  const year: number = today.getFullYear();
  const month: string = String(today.getMonth() + 1).padStart(2, '0');
  const day: string = String(today.getDate()).padStart(2, '0');

  const formattedDate: string = `${year}-${month}-${day}`;

  return formattedDate;
}
  // แยกชั่วโมงและนาทีจากเวลาแต่ละตัว
export const compareTimes = (time1: string, time2: string): string => {
  // แยกชั่วโมงและนาทีจากเวลาแต่ละตัว
  const [hour1, minute1] = time1.split(':').map(Number);
  const [hour2, minute2] = time2.split(':').map(Number);

  // เปรียบเทียบชั่วโมง
  if (hour1 < hour2) {
      return `>`;
  } else if (hour1 > hour2) {
      return `<`;
  } else {
      // หากชั่วโมงเท่ากัน เปรียบเทียบนาที
      if (minute1 < minute2) {
          return `<`;
      } else if (minute1 > minute2) {
          return `>`;
      } else {
          return `=`;
      }
  }
}
