export type pageType = {
    status: string;
    i: string;
}

export type pageComponents = {
    status: string;
}

export interface FormDataP0 {
    p0F1: string;
    p0F2: string;
    p0F3: number;
    p0F4: string;
    p0F5: string;
    p0F6: string;
    p0F6Name: string;
    p0F7: string;
    p0F7Name: string;
    p0F8: string;
    p0F8Name: string;
    p0F9T: number;
    p0F9: string;
    p0F10: string;
    p0F11T: number;
    p0F11: string;
    p0F12: string;
    p0F13: string;
    p0F14: string;
    p0F15: string;
    p0F16: string;
    p0F17: string;
    p0F18T: number;
    p0F18: string;
    p0F19: string;
    p0F20T: number;
    p0F20: string;
    p0F21: string;
    p0F22: string;
    p0F23: string;
    p0F24: string;
}

export interface ErrFromDataP0 {
    isChecked : string;
}

export interface initialStatePage {
    addressAll: addressData[];
    address: addressData[];
    ban : banData[];
    loading : boolean;
    message : string;
}

export type banData = {
    value: number;
    label: string;
}
export type addressData = {
    id : number;
    name: string;
    ampherName: string;
    ban: string;
    banProvince: string;
    mo: string;
    provinceName: string;
    tombonName: string;
    tambon_code: string;
    ampher_code: string;
    province_code: string;
}

export interface FromP0Err {
    [key: string]: boolean|string;
    p0F1Status: boolean;
    p0F1Txt: string;
    p0F2Status: boolean;
    p0F2Txt: string;
    p0F3Status: boolean;
    p0F3Txt: string;
    p0F4Status: boolean;
    p0F4Txt: string;
    p0F9TStatus: boolean;
    p0F9TTxt: string;
    p0F9Status: boolean;
    p0F9Txt: string;
    p0F10Status: boolean;
    p0F10Txt: string;
    p0F11TStatus: boolean;
    p0F11TTxt: string;
    p0F11Status: boolean;
    p0F11Txt: string;
    p0F12Status: boolean;
    p0F12Txt: string;
    p0F13Status: boolean;
    p0F13Txt: string;
    p0F14Status: boolean;
    p0F14Txt: string;
    p0F15Status: boolean;
    p0F15Txt: string;
    p0F16Status: boolean;
    p0F16Txt: string;
    p0F17Status: boolean;
    p0F17Txt: string;
    p0F18TStatus: boolean;
    p0F18TTxt: string;
    p0F18Status: boolean;
    p0F18Txt: string;
    p0F19Status: boolean;
    p0F19Txt: string;
    p0F20TStatus: boolean;
    p0F20TTxt: string;
    p0F20Status: boolean;
    p0F20Txt: string;
    p0F21Status: boolean;
    p0F21Txt: string;
    p0F22Status: boolean;
    p0F22Txt: string;
    p0F23Status: boolean;
    p0F23Txt: string;
    p0F24Status: boolean;
    p0F24Txt: string; 
}

export interface resultSubmitP0 {
    message: string | messageSubmitP0;
    status: boolean;
}

export type messageSubmitP0 = {
    p0F1Txt: string;
    p0F2Txt: string;
    p0F9TTxt: string;
    p0F11TTxt: string;
    p0F13Txt: string;
    p0F14Txt: string;
    p0F15Txt: string;
    p0F16Txt: string;
    p0F17Txt: string;
    p0F18TTxt: string;
    p0F23Txt: string;
}
