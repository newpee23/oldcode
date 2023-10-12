import { useState } from 'react'
import { InputSingUp } from '../../types/InputFieldType';

const DivTextarea = (props: InputSingUp) => {
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
            <textarea
                id="message"
                name="m_address"
                rows={props.row}
                value={props.value}
                onChange={props.onChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-600 focus:border-purple-600"
                placeholder="Address"
                onFocus={handleFocus}
                onBlur={handleBlur}
                required={props.required || false}
                readOnly={props.readonly || false}
            ></textarea>
        </div>
    )
}

export default DivTextarea