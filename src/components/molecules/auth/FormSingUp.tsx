import { ChangeEvent, useState } from "react";
import { dataFromSingUp, dataFromSingUpErr } from "../../function/initialDataFrom";
import InputFieldAuth from "../../atoms/InputFieldAuth";
import DivTextarea from "../../atoms/DivTextarea";
import DivHr from "../../atoms/DivHr";
import DivButton from "../../atoms/DivButton";
import { dataSingUp, dataSingUpErr } from "../../../types/authType";

import { useAppDispatch, useAppSelector } from "../../../store/store";
import { setLoadingAuth, signUp } from "../../../store/slices/authSlices";
import AlertErr from "../../atoms/AlertErr";
import { validateForm } from "../../function/validateForm";


const FormSingUp = () => {

    const dispatch = useAppDispatch();
    const [formDataSingUp, setFormDataSingUp] = useState<dataSingUp>(dataFromSingUp);
    const [formErr, setFromErr] = useState<dataSingUpErr>(dataFromSingUpErr);
    const { message } = useAppSelector((state) => state?.auth);
    const [txtalert , setTxtAlert] = useState<string>('');
    const handleInputChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {

        const { name, value } = e.target;
        setFormDataSingUp((prevData) => ({
            ...prevData,
            [name]: value.trim(),
        }));

    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        
        const newFormErr = validateForm(formDataSingUp);
        setFromErr(newFormErr);
   
        if (
            newFormErr.m_emailStatus === false &&
            newFormErr.m_fnameStatus === false &&
            newFormErr.m_idcardStatus === false &&
            newFormErr.m_lnameStatus === false &&
            newFormErr.m_passwordStatus === false &&
            newFormErr.m_phoneStatus === false &&
            newFormErr.m_usernameStatus === false
          ) {
            try {
                dispatch(setLoadingAuth(true));
                await dispatch(signUp(formDataSingUp));
              } catch (error: unknown) {
                setTimeout(() => {
                  dispatch(setLoadingAuth(false));
                }, 1000);
              } finally {
               
                setTimeout(() => {
                  dispatch(setLoadingAuth(false));
                }, 1000);
              }
          }else{
            setTxtAlert("กรุณากรอกข้อมูลให้ครบถ้วน");
          }

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="text-left">
                <div className="grid grid-cols-1 sml:grid-cols-2">
                    <div className="mr-1">
                        <InputFieldAuth name="m_fname" value={formDataSingUp.m_fname} label="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" type="text" onChange={(e) => handleInputChange(e)} placeholder="Name" required={true} maxLength={60} minLength={1} />
                        {formErr.m_fnameTxt && (<div className="mt-[-10px] mb-2"><span className="text-xs text-red-700"><b>{formErr.m_fnameTxt}</b></span></div>)}
                    </div>
                    <div className="ml-1">
                        <InputFieldAuth name="m_lname" value={formDataSingUp.m_lname} label="Surname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" type="text" onChange={(e) => handleInputChange(e)} placeholder="Surname" required={true} maxLength={60} minLength={1} />
                        {formErr.m_lnameTxt && (<div className="mt-[-10px] mb-2"><span className="text-xs text-red-700"><b>{formErr.m_lnameTxt}</b></span></div>)}
                    </div>
                </div>
                <InputFieldAuth name="m_username" value={formDataSingUp.m_username} label="Username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" type="text" onChange={(e) => handleInputChange(e)} placeholder="Username" required={true} maxLength={60} minLength={1} />
                {formErr.m_usernameTxt && (<div className="mt-[-10px] mb-2"><span className="text-xs text-red-700"><b>{formErr.m_usernameTxt}</b></span></div>)}
                <InputFieldAuth name="m_password" value={formDataSingUp.m_password} label="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" type="password" onChange={(e) => handleInputChange(e)} placeholder="Password (Minimum 6 characters)" maxLength={40} minLength={6} required={true} />
                {formErr.m_passwordTxt && (<div className="mt-[-10px] mb-2"><span className="text-xs text-red-700"><b>{formErr.m_passwordTxt}</b></span></div>)}
                <div className="grid grid-cols-1 sml:grid-cols-2">
                    <div className="mr-1 text-left">
                        <InputFieldAuth name="m_idcard" value={formDataSingUp.m_idcard} label="IdCard" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" type="text" onChange={(e) => handleInputChange(e)} placeholder="IdCard (13 Characters only)" required={true} maxLength={13} minLength={1} />
                        {formErr.m_idcardTxt && (<div className="mt-[-10px] mb-2"><span className="text-xs text-red-700"><b>{formErr.m_idcardTxt}</b></span></div>)}
                    </div>
                    <div className="ml-1">
                        <InputFieldAuth name="m_phone" value={formDataSingUp.m_phone} label="Phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" type="text" onChange={(e) => handleInputChange(e)} placeholder="Phone (10 Characters only)" required={true} maxLength={10} minLength={1} />
                        {formErr.m_phoneTxt && (<div className="mt-[-10px] mb-2"><span className="text-xs text-red-700"><b>{formErr.m_phoneTxt}</b></span></div>)}
                    </div>
                </div>
                <InputFieldAuth name="m_email" value={formDataSingUp.m_email} label="Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" type="email" onChange={(e) => handleInputChange(e)} placeholder="Email" required={true} maxLength={60} minLength={1} />
                {formErr.m_emailTxt && (<div className="mt-[-10px] mb-2"><span className="text-xs text-red-700"><b>{formErr.m_emailTxt}</b></span></div>)}
                <DivTextarea row={2} label="Address" name="m_address" placeholder="Address" onChange={(e) => handleInputChange(e)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-600 focus:border-purple-600" />
                <DivHr divClass="flex justify-center" className="h-px mt-4 mb-6 bg-gray-200 border-0 w-10/12" />
                {message &&  <AlertErr text={message}/>}{txtalert &&  <AlertErr text={txtalert}/>}
                <DivButton divClass="" type="submit" textBtn="Sign Up" className="text-white w-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg font-medium rounded text-lg px-5 py-2.5 text-center mr-2 mb-2" />
            </form>
        </div>
    )
}

export default FormSingUp