import React, { useRef, useState } from 'react';
import { useAppDispatch } from '../../../store/store';
import { findQuestionnaire, setLoadingHome } from '../../../store/slices/homeSlices';
import { userLogin } from '../../../types/authType';
import { backToLogin } from '../../function/function';
import DivTextMesErr from '../../atoms/DivTextMesErr';

type Props = {}

function FormHome({ }: Props) {
    const [remark, setRemark] = useState<boolean>(true);
    const inputRef = useRef<HTMLInputElement | null>(null);
  
    const user = localStorage.getItem('userLogin');
    const dispatch = useAppDispatch();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (user) {
            let parsedData: userLogin = JSON.parse(user);
            if (inputRef.current?.value) {
                // Validate the input value to ensure it's a 5-digit number
                const inputValue = inputRef.current.value;
                if (/^\d{0,5}$/.test(inputValue)) {
                    // Perform your dispatch here
                    try {
                        dispatch(setLoadingHome(true));
                        await dispatch(findQuestionnaire({ f_id: inputValue, id: parsedData.id }));
                    } catch (error) {
                        setTimeout(() => {
                            dispatch(setLoadingHome(false));
                        }, 1000);
                    } finally {
                        setTimeout(() => {
                            dispatch(setLoadingHome(false));
                        }, 1000);
                    }
                } else {
                    setRemark(false); // Show an error message if the input is not valid
                }
            }
        } else {
            backToLogin();
        }
        // console.log('Submitted search query:', inputRef.current?.value);
    };

    const handleInputChange = () => {
        if (inputRef.current) {
            const searchQuery:string = inputRef.current.value;
            if (!/^\d{5}$/.test(searchQuery)) {
                 setRemark(false);
            } else {
                setRemark(true);
            }
        }
    };

    return (
        <>
            <div className="text-center mt-6 text-lg">
                <span>ค้นหารหัสแบบสอบถาม 5 หลัก</span>
            </div>
            <div className="p-5 block md:flex md:justify-center">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                        Search
                    </label>
                    <div className="relative w-full md:w-[450px]">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="number" id="search" className={`drop-shadow-2xlblock w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg drop-shadow-md bg-gray-50 focus:ring-purple-500-500 ${remark ? 'focus:border-purple-500' : 'focus:border-red-500'} `}  placeholder="กรุณากรอกหัสแบบสอบถาม"  required ref={inputRef} onChange={handleInputChange} />
                        <button disabled={!remark} type="submit" className={`text-white absolute right-2.5 bottom-2.5 ${remark ? 'bg-purple-500 hover:bg-purple-700' : 'bg-red-600 hover:bg-red-800'} focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 `} >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        
            {!remark && <b><DivTextMesErr className="text-center text-sm text-red-600" text="**กรุณาป้อนรหัสแบบสอบถาม 5 หลักที่ไม่มีทศนิยม"/></b>}
        </>
    )
}

export default FormHome