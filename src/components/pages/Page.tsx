import { useCallback, useEffect } from "react"
import { useParams } from "react-router-dom";
import { pageType } from "../../types/pageType";
import Page0 from "../organs/Page0";
import ErrorPage from "./ErrorPage";
import Page1 from "../organs/Page1";
import Page3 from "../organs/Page3";
import Page4 from "../organs/Page4";
import Page5 from "../organs/Page5";
import Page6 from "../organs/Page6";
import Page7 from "../organs/Page7";
import Page8 from "../organs/Page8";
import Page9 from "../organs/Page9";
import Page10 from "../organs/Page10";
import Page11 from "../organs/Page11";
import Page12 from "../organs/Page12";
import Page13 from "../organs/Page13";
import Page14 from "../organs/Page14";
import Page15 from "../organs/Page15";
import Page16 from "../organs/Page16";
import Page17 from "../organs/Page17";
import Page18 from "../organs/Page18";
import Navbar from "../organs/Navbar";

import { useAppDispatch, useAppSelector } from "../../store/store"
import { findBan, setLoadingPage } from "../../store/slices/pageSlices"
import Loading from "../atoms/Loading";

const Page = () => {

    const dispatch = useAppDispatch();
    const { loading } = useAppSelector((state) => state?.page);
    const { i } = useParams<pageType>();
    const { status } = useParams<pageType>();
    const fId = localStorage.getItem('questionId');

    const loadPageComponent = (): JSX.Element => {
        switch (i) {
            case "0":
                return status ? <Page0 status={status} /> : <ErrorPage />;
            case "1":
                return status ? <Page1 status={status} /> : <ErrorPage />;
            case "2":
                return status ? <Page3 status={status} /> : <ErrorPage />;
            case "3":
                return status ? <Page4 status={status} /> : <ErrorPage />;
            case "4":
                return status ? <Page5 status={status} /> : <ErrorPage />;
            case "5":
                return status ? <Page6 status={status} /> : <ErrorPage />;
            case "6":
                return status ? <Page7 status={status} /> : <ErrorPage />;
            case "7":
                return status ? <Page8 status={status} /> : <ErrorPage />;
            case "8":
                return status ? <Page9 status={status} /> : <ErrorPage />;
            case "9":
                return status ? <Page10 status={status} /> : <ErrorPage />;
            case "10":
                return status ? <Page11 status={status} /> : <ErrorPage />;
            case "11":
                return status ? <Page12 status={status} /> : <ErrorPage />;
            case "12":
                return status ? <Page13 status={status} /> : <ErrorPage />;
            case "13":
                return status ? <Page14 status={status} /> : <ErrorPage />;
            case "14":
                return status ? <Page15 status={status} /> : <ErrorPage />;
            case "15":
                return status ? <Page16 status={status} /> : <ErrorPage />;
            case "16":
                return status ? <Page17 status={status} /> : <ErrorPage />;
            case "17":
                return status ? <Page18 status={status} /> : <ErrorPage />;
            default:
                return <ErrorPage />;
        }
    }

    const finddataEffect = useCallback(async () => {
        try {
            dispatch(setLoadingPage(true));
            await dispatch(findBan());
            // console.log(ban)
        } catch (error: unknown) {
            setTimeout(() => {
                dispatch(setLoadingPage(false));
            }, 1000);
        } finally {
            setTimeout(() => {
                dispatch(setLoadingPage(false));
            }, 1000);
        }
    }, []);

    const getEffect = () => {
        switch (i) {
            case '0':
                finddataEffect();
                break;

            default:
                break;
        }
    }

    useEffect(() => {
        getEffect();
    }, []);

    return (loading ? <Loading setHeight={""} /> :
        <section>
            <Navbar />
            <div className="m-3 sml:m-5 lgl:m-8 lgl:mb-5 p-3 sml:p-5 bg-white border rounded-lg shadow border-l-4 border-r-4 border-r-violet-700 border-l-violet-700">
                <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-purple-800">ระบบบันทึกข้อมูลสภาพการดำรงชีวิตประชากรชาวเขาภาคเหนือ</h5>
                <p className="font-normal text-gray-700">ของประชากรหมู่บ้านเป้าหมาย ตามแผนปฏิบัติการด้านการแก้ไขปัญหายาเสพติดชายแดนภาคเหนือแบบเบ็ดเสร็จ (พ.ศ.2562 – 2565)</p>
            </div>
            <div className="m-3 sml:m-5 sml:mt-0 lgl:m-8 lgl:mb-5 lgl:mt-0 p-3 sml:p-5 bg-white border rounded-lg shadow border-l-4 border-r-4 border-r-violet-700 border-l-violet-700">
                <p className="font-semibold text-purple-800">แบบสอบถามเลขที่ {fId}</p>
            </div>
            {loadPageComponent()}
        </section>
    )
}

export default Page;