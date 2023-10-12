export type userLogin ={
    id: number;
    fname: string;
    lname: string;
    level: string;
}

export type initialStateAuth = {
    userLogin: userLogin | undefined ;
    loading: boolean;
    message: string | undefined;
}

export type dataLogin = {
    username: string;
    password: string;
}

export type resDataLogin = {
    message: string | undefined;
    token: string | undefined;
    userLogin:  userLogin | undefined ;
}

export type dataSingUp = {
    m_fname: string;
    m_lname: string;
    m_idcard: string;
    m_email: string;
    m_username: string;
    m_password: string;
    m_phone: string;
    m_address: string;
    m_level: string;
}

export type dataSingUpErr = {
    m_fnameStatus: boolean;
    m_fnameTxt: string;
    m_lnameStatus: boolean;
    m_lnameTxt: string;
    m_idcardStatus: boolean;
    m_idcardTxt: string;
    m_emailStatus: boolean;
    m_emailTxt: string;
    m_usernameStatus: boolean;
    m_usernameTxt: string;
    m_passwordStatus: boolean;
    m_passwordTxt: string;
    m_phoneStatus: boolean;
    m_phoneTxt: string;
}
