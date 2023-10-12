import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { SERVER_APP_API } from "./config";

// สร้างตัวแปรเพื่อใช้ในการยกเลิก
const cancelSource: CancelTokenSource = axios.CancelToken.source();
const token = localStorage?.getItem("tokenAuth");

export const logOutPage = async (): Promise<string> => {
  try {
    const response: AxiosResponse = await axios.post(
      SERVER_APP_API + "/LogoutUser",
      {
        headers: {
          "Content-Type": "application/json",
          "token-request": token,
        },
        cancelToken: cancelSource.token,
      }
    );
    return response.data.message;

  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      // กรณีเกิด AxiosError คุณสามารถจัดการกับ error ได้ตามที่คุณต้องการ
      return `เกิดข้อผิดพลาด: ${error.message}`;
    } else {
      // กรณีเกิด error ที่ไม่ใช่ AxiosError คุณสามารถจัดการกับ error นี้ได้
      return "เกิดข้อผิดพลาดไม่รู้จัก";
    }
  }
};
