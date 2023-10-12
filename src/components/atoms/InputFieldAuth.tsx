import { useState } from 'react';
import { InputAuth } from '../../types/InputFieldType';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const InputFieldAuth = (props: InputAuth) => {

  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // ฟังก์ชันเมื่อ Input Field ได้รับการ focus
  const handleFocus = () => {
    setIsFocused(true);
  };

  // ฟังก์ชันเมื่อ Input Field ถูก blur (เมื่อหยุด focus)
  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`grid mb-3 md:grid-cols-1 text-left ${isFocused && 'input-focused'}`}>
      {props.label && (
        <>
          <label className="block mb-2 text-sm font-medium text-gray-900 label">
            {props.label}&nbsp;{props.required && <span className="text-red-700"><b>*</b></span>}
          </label>
        </>
      )}
      <input
        type={isPasswordVisible ? 'text' : props.type}
        name={props.name}
        value={props.value}
        className={props.className}
        placeholder={props.placeholder}
        required={props.required || false}
        onChange={props.onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        readOnly={props.readonly || false}
        maxLength={props.maxLength}
        minLength={props.minLength}
      />
      
      {props.type === "password" &&
        <div className="relative text-right">
          {isPasswordVisible ? (<VisibilityOffIcon onClick={() => setIsPasswordVisible(false)} className="z-50 h-5 w-auto bg-icon-password cursor-pointer absolute top-[-30px] right-[14px]" />)
            : (<VisibilityIcon onClick={() => setIsPasswordVisible(true)} className="z-50 h-5 w-auto bg-icon-password cursor-pointer absolute top-[-30px] right-[14px]" />)}
        </div>
      }
    </div>
  )
}

export default InputFieldAuth;