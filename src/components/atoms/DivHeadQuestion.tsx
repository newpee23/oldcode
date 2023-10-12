import { useState } from 'react'
import AutorenewIcon from '@mui/icons-material/Autorenew';

type Props = {
    head: string;
    status: string;
}

const DivHeadQuestion = (props: Props) => {
    const [isRotating, setIsRotating] = useState(false);

    const handleLoopClick = () => {
        if (props.status === 'edit') {
            setIsRotating(true);
            setTimeout(() => {
                setIsRotating(false);
            }, 3000); // หมุนเป็นเวลา 3 วินาที
        }
    };

    return (
        <div className="flex justify-between rounded-t-xl card-bg">
            <div className="text:md md:text-lg p-3 sml:p-5 tracking-tight text-gray-700 ">{props.head}</div>
            {props.status === 'edit' && 
            <div className="p-3 sml:p-5 color-violet-700 cursor-pointer" onClick={handleLoopClick}>
                <AutorenewIcon className={isRotating ? 'animate-spin' : ''} />
            </div>}
        </div>
    )
}

export default DivHeadQuestion