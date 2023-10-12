import axios, { AxiosError, AxiosResponse, CancelTokenSource } from "axios";
import { SERVER_APP_API } from "./config";
import { backToLogin } from "../components/function/function";
import { allFromMaster } from "../types/homeType";

// สร้างตัวแปรเพื่อใช้ในการยกเลิก
const cancelSource: CancelTokenSource = axios.CancelToken.source();
const token = localStorage?.getItem("tokenAuth");

export const checkTokenUser = async (id:number): Promise<void> => {
    try {
      const response: AxiosResponse =  await axios.get(SERVER_APP_API+`/member/${id}`,{
        headers: {
          "Content-Type": "application/json",
          "token-request": token,
        },
        cancelToken: cancelSource.token,
      });
      if(response.data === "No Token, Authorization Denied"){
        backToLogin();
      }
      return;
    } catch (error: unknown) {
        console.log(error);
        backToLogin();
    }
};

export const checkFidQuestion = async ({fId,memberId}:{fId:string , memberId:number}): Promise<allFromMaster[] | boolean> => {
  try {
    const response: AxiosResponse =  await axios.get(SERVER_APP_API+`/findQuestionnaire/${fId}/${memberId}`,{
      headers: {
        "Content-Type": "application/json",
        "token-request": token,
      },
      cancelToken: cancelSource.token,
    });
    if(response.data.message){
      return false;
    }
    const dataResponse: allFromMaster[] = response.data;
    if(dataResponse.length === 0){
      return false;
    }
    return true;
  } catch (error: unknown) {
    console.log(error);
    return false;
  }
}