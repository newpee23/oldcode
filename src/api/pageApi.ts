import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { SERVER_APP_API } from "./config";
import { FormDataP0, resultSubmitP0 } from "../types/pageType";
import { userLogin } from "../types/authType";
import { logOutPage } from "./logoutApi";

// สร้างตัวแปรเพื่อใช้ในการยกเลิก
const cancelSource: CancelTokenSource = axios.CancelToken.source();

const getTokenFromLocalStorage = () => {
  return localStorage?.getItem("tokenAuth") || '';
}

const getUserFromLocalStorage = () => {
  return localStorage?.getItem('userLogin') || '';
}

const getFIdFromLocalStorage = () => {
  return localStorage?.getItem('questionId') || '';
}

export const getDataEditPage0 = async (): Promise<resultSubmitP0> => {
 
  const fId = getFIdFromLocalStorage();
  const token = getTokenFromLocalStorage();

  if (!token || !fId) {
    logOutPage();
  }

  try {
    const response: AxiosResponse = await axios.get(
      SERVER_APP_API + `/findPage0/${fId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "token-request": token,
        },
        cancelToken: cancelSource.token,
      }
    );

    return response.data as resultSubmitP0;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return { message: `เกิดข้อผิดพลาด: ${error.message}`, status: false };
    } else {
      return { message: `เกิดข้อผิดพลาดไม่รู้จัก`, status: false };
    }
  }
};

export const savePage0 = async (data: FormDataP0): Promise<resultSubmitP0> => {
  const user = getUserFromLocalStorage();
  const fId = getFIdFromLocalStorage();
  const token = getTokenFromLocalStorage();

  if (!user || !fId) {
    logOutPage();
  }

  const parsedData: userLogin = JSON.parse(user);
  const requestData: { data: FormDataP0; member_id: number, fId: string } = { "data": data, "member_id": parsedData.id, "fId": fId };

  try {
    const response: AxiosResponse = await axios.post(
      SERVER_APP_API + `/insert/savePage0`,
      requestData,
      {
        headers: {
          "Content-Type": "application/json",
          "token-request": token,
        },
        cancelToken: cancelSource.token,
      }
    );

    return response.data as resultSubmitP0;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return { message: `เกิดข้อผิดพลาด: ${error.message}`, status: false };
    } else {
      return { message: `เกิดข้อผิดพลาดไม่รู้จัก`, status: false };
    }
  }
};

