
import Select from "react-select";
import { Dropdown } from '../../types/atomsType';
import { useState } from "react";

const DropDown = (props: Dropdown) => {
  const [isFocused, setIsFocused] = useState(false);

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
      <Select
        isDisabled={props.isDisabled}
        className={props.className}
        options={props.options}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        isClearable={props.isClearable}
        isSearchable={props.isSearchable}
        required={props.required}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#712eda',
          },
        })}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>

  )
}

export default DropDown