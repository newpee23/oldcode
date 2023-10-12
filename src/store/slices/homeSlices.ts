import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse, CancelTokenSource } from "axios";
import { SERVER_APP_API } from "../../api/config";
import { allFromMaster, initialStateHome } from "../../types/homeType";
import { setLocalQuestion, setLocalQuestionId } from "../../components/function/localStorage";

const initialState: initialStateHome = {
  fromMaster: null,
  message: "",
  loading: false,
};
const token = localStorage?.getItem("tokenAuth");
// สร้างตัวแปรเพื่อใช้ในการยกเลิก
const cancelSource: CancelTokenSource = axios.CancelToken.source();

// findQuestionnaire
export const findQuestionnaire = createAsyncThunk<allFromMaster[] | string, { f_id: string; id: number }>(
  "findQuestionnaire/loadAsync", async ({ f_id, id }): Promise<allFromMaster[] | string> => {
    try {
      const response: AxiosResponse = await axios.get(
        SERVER_APP_API + `/findQuestionnaire/${f_id}/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            "token-request": token,
          },
          cancelToken: cancelSource.token,
        }
      );
      setLocalQuestionId(f_id);
      if(response.data.message){
        return response.data.message as string;
      }
 
      const dataResponse: allFromMaster[] = response.data;
      return dataResponse;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.status === 401) {
          // console.log("Unauthorized error:", axiosError.response.data);
          const responseDataAsString: string = JSON.stringify(
            axiosError.response.data
          );
          return responseDataAsString;
        } else {
          // กระทำเมื่อเกิดข้อผิดพลาดอื่น ๆ
          console.error("Other error:", axiosError);
        }
      } else {
        // กระทำเมื่อเกิดข้อผิดพลาดที่ไม่ใช่ axios error
        console.error("Non-Axios error:", error);
      }
      return "";
    }
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    // cleanState function
    cleanStateHome: (): initialStateHome => {
      return {
        ...initialState,
      };
    },
    // setLoading
    setLoadingHome: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload; // ตั้งค่าค่า loading ด้วยค่าที่รับมาจาก action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(findQuestionnaire.pending, (state) => {
      state.message = '';
    });
    builder.addCase(findQuestionnaire.fulfilled, (state, action) => {
      if (Array.isArray(action.payload)) {
        // state.allFrom = action.payload;
        setLocalQuestion(action.payload);
        state.fromMaster = action.payload;
      }else{
        if(typeof action.payload === 'string'){
          state.message = action.payload;
        }
        setLocalQuestion([]);
        state.fromMaster = null;
      }
      
    });
    builder.addCase(findQuestionnaire.rejected, (state, action) => {
      state.message = action.error.message || "";
    });
  },
});

// Action creators
export const { cleanStateHome , setLoadingHome } = homeSlice.actions;
export default homeSlice.reducer;
