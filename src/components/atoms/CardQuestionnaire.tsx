import { pageCard } from "../../types/homeType";
import { Link } from 'react-router-dom';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import notCompleteImage from "../../assets/images/not_complete.png";
import DivButton from "./DivButton";
import DivHr from "./DivHr";

const CardQuestionnaire = (props: pageCard) => {

    const numberPage = (): JSX.Element => {
        let showNumber = <></>;
        if (props.i === 0) {
            showNumber = <p>หน้าปก</p>
        } else if (props.i === 1) {
            showNumber = <p>หน้า 1-2</p>
        } else {
            showNumber = <p>หน้า {(props.i + 1)}</p>
        }
        return showNumber
    }
    return (
        <div className="flex justify-center items-center ">
            <div className="block w-full sml:max-w-sm bg-white border border-gray-200 rounded-lg shadow relative hover:scale-105 hover:z-50 transform transition-transform duration-300">
                <div className="pt-5 card-bg">
                    <div className="text-center text-xl text-gray-700 mb-2">
                        {numberPage()}
                    </div>
                    <div className="text-center">
                        {props.pageuser ? 
                            <AddTaskOutlinedIcon className="h-20 sml:h-20 w-auto card-icon-bg-save"/>
                        :
                        <img src={notCompleteImage} alt="ไม่มีการบันทึกแบบสอบถาม" className="h-20 sml:h-20 w-auto m-auto"/>
                        }
                    </div>
                    <DivHr divClass="flex justify-center" className="h-px mt-3 bg-gray-400 border-0 dark:bg-gray-700 w-full opacity-20" />
                </div>
                <div className="pb-5 pt-5">
                    {props.pageusername && props.pagetime ?
                        <div className="text-center tracking-tight text-gray-900">
                            <p className="text-sm whitespace-nowrap overflow-hidden overflow-ellipsis pl-5 pr-5">ผู้บันทึก</p>
                            <p className="text-md whitespace-nowrap overflow-hidden overflow-ellipsis pl-5 pr-5">{props.pageusername}</p>
                            <p className="text-sm whitespace-nowrap overflow-hidden overflow-ellipsis pl-5 pr-5">({props.pagetime})</p>
                        </div>
                        :
                        <div className="text-center tracking-tight text-gray-900">
                            <p className="text-md whitespace-nowrap overflow-hidden overflow-ellipsis pl-5 pr-5">&nbsp;</p>
                            <p className="text-md whitespace-nowrap overflow-hidden overflow-ellipsis pl-5 pr-5">&nbsp;</p>
                            <p className="text-sm whitespace-nowrap overflow-hidden overflow-ellipsis pl-5 pr-5">&nbsp;</p>
                        </div>
                    }
                    <div className="mt-5 sml:mt-ค">
                        {props.pageuser ?
                              <Link to={`/Page/edit/${props.i}`}><DivButton textBtn="แก้ไขข้อมูล" type="button" divClass="text-center" className="focus:outline-none text-white bg-btn-save hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2" /></Link>
                            :
                              <Link to={`/Page/insert/${props.i}`}><DivButton textBtn="บันทึกข้อมูล" type="button" divClass="text-center" className="focus:outline-none text-white bg-slate-400 hover:bg-purple-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-md text-sm px-4 py-2" /></Link>
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}
export default CardQuestionnaire;