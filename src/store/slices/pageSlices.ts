import { addressData, initialStatePage } from "../../types/pageType";
import axios, { AxiosError, AxiosResponse, CancelTokenSource } from "axios";
import { SERVER_APP_API } from "../../api/config";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const initialState: initialStatePage = {
    ban: [],
    addressAll: [],
    address: [],
    loading: false,
    message: ""
};

const token = localStorage?.getItem("tokenAuth");
// สร้างตัวแปรเพื่อใช้ในการยกเลิก
const cancelSource: CancelTokenSource = axios.CancelToken.source();

// ดึงข้อมูล Ban ชื่อหมู่บ้าน
export const findBan = createAsyncThunk<addressData[]|string>(
    "findBan/loadAsync", async (): Promise<addressData[]|string> => {
      try {
        const response: AxiosResponse = await axios.get(
          SERVER_APP_API + `/findBan`,
          {
            headers: {
              "Content-Type": "application/json",
              "token-request": token,
            },
            cancelToken: cancelSource.token,
          }
        );
       
        if(response.data.message){
          return response.data.message as string;
        }
        return response.data;
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
        return [];
      }
    }
);

const pageSlice = createSlice({
    name: "page",
    initialState: initialState,
    reducers: {  
      setLoadingPage: (state, action: PayloadAction<boolean>): void => {
        state.loading = action.payload;
      },
      setAddressP0: (state, action: PayloadAction<number>) => {
        const address = state.addressAll.find((item) => item.id === action.payload);
        state.address = address ? [address] : []; // ตั้ง state.address หากเจอไม่เจอก็ให้ค่าเป็น [] ว่าง
      }
    },
    extraReducers: (builder) => {
      // findBan
      builder.addCase(findBan.fulfilled, (state,action) => {
        if(Array.isArray(action.payload)){
          state.addressAll = action.payload;
          const formattedBan = action.payload.map(item => ({
            value: item.id,
            label: item.banProvince
          }));
          state.ban = formattedBan;
        }else{
          if(typeof action.payload === 'string'){
            state.message = action.payload;
          }
          state.addressAll = [];
        }
      });
      builder.addCase(findBan.rejected, (state, action) => {
        state.message = action.error.message || "";
      });
    },
  });
  
// Action creators
export const { setLoadingPage , setAddressP0 } = pageSlice.actions;
export default pageSlice.reducer;