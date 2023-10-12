import { Opprovince } from "../../types/atomsType";
import { dataSingUp, dataSingUpErr } from "../../types/authType";
import { ErrFromDataP0, FormDataP0, FromP0Err } from "../../types/pageType";

export const dataInsertP0: FormDataP0 = {
    p0F1: "",
    p0F2: "",
    p0F3: 0,
    p0F4: "",
    p0F5: "",
    p0F6: "",
    p0F6Name: "",
    p0F7: "",
    p0F7Name: "",
    p0F8: "",
    p0F8Name: "",
    p0F9T: 0,
    p0F9: "",
    p0F10: "",
    p0F11T: 0,
    p0F11: "",
    p0F12: "",
    p0F13: "",
    p0F14: "",
    p0F15: "",
    p0F16: "",
    p0F17: "",
    p0F18T: 0,
    p0F18: "",
    p0F19: "",
    p0F20T: 0,
    p0F20: "",
    p0F21: "",
    p0F22: "",
    p0F23: "",
    p0F24: ""
}

export const dataErrPage0: ErrFromDataP0 = {
    isChecked: "",
}

export const prefixName: Opprovince[] = [
    {
      value: 1,
      label: "นาย"
    },
    {
      value: 2,
      label: "นาง"
    },
    {
      value: 3,
      label: "นางสาว"
    },
    {
      value: 4,
      label: "เด็กชาย"
    },
    {
      value: 5,
      label: "เด็กหญิง"
    }
];

export const dataFromSingUp: dataSingUp = {
  m_fname: "",
  m_lname: "",
  m_idcard: "",
  m_email: "",
  m_username: "",
  m_password: "",
  m_phone: "",
  m_address: "",
  m_level: "m"
}

export const dataFromSingUpErr: dataSingUpErr= {
  m_fnameStatus: false,
  m_fnameTxt: '',
  m_lnameStatus: false,
  m_lnameTxt: '',
  m_usernameStatus: false,
  m_usernameTxt: '',
  m_passwordStatus: false,
  m_passwordTxt: '',
  m_idcardStatus: false,
  m_idcardTxt: '',
  m_emailStatus: false,
  m_emailTxt: '',
  m_phoneStatus: false,
  m_phoneTxt: ''
};

export const dataFromP0Err:FromP0Err = {
  p0F1Status: false,
  p0F1Txt: '',
  p0F2Status: false,
  p0F2Txt: '',
  p0F3Status: false,
  p0F3Txt: '',
  p0F4Status: false,
  p0F4Txt: '',
  p0F9TStatus: false,
  p0F9TTxt: '',
  p0F9Status: false,
  p0F9Txt: '',
  p0F10Status: false,
  p0F10Txt: '',
  p0F11TStatus: false,
  p0F11TTxt: '',
  p0F11Status: false,
  p0F11Txt: '',
  p0F12Status: false,
  p0F12Txt: '',
  p0F13Status: false,
  p0F13Txt: '',
  p0F14Status: false,
  p0F14Txt: '',
  p0F15Status: false,
  p0F15Txt: '',
  p0F16Status: false,
  p0F16Txt: '',
  p0F17Status: false,
  p0F17Txt: '',
  p0F18TStatus: false,
  p0F18TTxt: '',
  p0F18Status: false,
  p0F18Txt: '',
  p0F19Status: false,
  p0F19Txt: '',
  p0F20TStatus: false,
  p0F20TTxt: '',
  p0F20Status: false,
  p0F20Txt: '',
  p0F21Status: false,
  p0F21Txt: '',
  p0F22Status: false,
  p0F22Txt: '',
  p0F23Status: false,
  p0F23Txt: '',
  p0F24Status: false,
  p0F24Txt: '',
}