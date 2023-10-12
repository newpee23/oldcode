import { useState } from "react";
import InputFieldAuth from "../../atoms/InputFieldAuth"
import DivButton from "../../atoms/DivButton";
import DivHr from "../../atoms/DivHr";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { login, setLoadingAuth } from "../../../store/slices/authSlices";

import AlertErr from "../../atoms/AlertErr";

const FormSingIN = () => {

  const dispatch = useAppDispatch();
  const [formDataSingIN, setFormDataSingIN] = useState({ username: '', password: '' });
  const [txtalert , setTxtAlert] = useState<string>('');
  const { message } = useAppSelector((state) => state?.auth);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    
    if (formDataSingIN.username.trim() !== "" && formDataSingIN.password.trim() !== "") {
      try {
        dispatch(setLoadingAuth(true));
        await dispatch(login(formDataSingIN));
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
      setTxtAlert("กรุณากรอก Username และ Password");
    }
  }
  
  return (

    <div>
      <form onSubmit={handleSubmit}>
        <InputFieldAuth name="username" value={formDataSingIN.username} label="Username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" type="text" onChange={(e) => setFormDataSingIN({ ...formDataSingIN, username: e.target.value })} placeholder="Username" required={true} />
        <InputFieldAuth name="password" value={formDataSingIN.password} label="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" type="password" onChange={(e) => setFormDataSingIN({ ...formDataSingIN, password: e.target.value })} placeholder="Password (Minimum 6 characters)" required={true} />
        <DivHr divClass="flex justify-center" className="h-px mt-4 mb-6 bg-gray-200 border-0 w-10/12" />
        {message &&  <AlertErr text={message}/>}{txtalert &&  <AlertErr text={txtalert}/>}
        <DivButton divClass="" type="submit" textBtn="Sing In" className="text-white w-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg font-medium rounded text-lg px-5 py-2.5 text-center mr-2 mb-2" />
      </form>
    </div>

  )
}

export default FormSingIN