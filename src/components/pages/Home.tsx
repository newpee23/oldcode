import { useEffect, useState } from "react";
import { userLogin } from "../../types/authType";
import Navbar from "../organs/Navbar";
import FormHome from "../molecules/home/FormHome";
import DivHr from "../atoms/DivHr";
import Questionnaire from "../organs/Questionnaire";
import Loading from "../atoms/Loading";
import { checkTokenUser } from "../../api/homeApi";
import { useAppSelector } from "../../store/store";
import { allFromMaster } from "../../types/homeType";
import { clearStorageQuestion } from "../function/localStorage";
import "../../assets/css/HomeCss.css"
import { backToLogin } from "../function/function";

function Home() {

  const { loading, message, fromMaster } = useAppSelector((state) => state?.home);
  const [showFromMaster, setFromMaster] = useState<boolean>(false);
  const [loadingauth , setLoadingAuth] = useState<boolean>(true);
  const data = localStorage.getItem('question');

  const checkToken = async () => {
    const user = localStorage.getItem("userLogin");
    if (!user) return;
    const parsedData: userLogin = JSON.parse(user);
    try {
      await checkTokenUser(parsedData.id);
    } catch (error) {
      backToLogin();
    } finally {
      setTimeout(() => {
        setLoadingAuth(false)
      }, 1000);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (fromMaster === null) {
      setFromMaster(false);
    } else if (fromMaster && fromMaster?.length > 0) {
      setFromMaster(true);
    }
  }, [fromMaster]);

  const generateQuestionnaire = (): JSX.Element => {

    const dataFrom: allFromMaster[] = data ? JSON.parse(data) : [];
    message && clearStorageQuestion();

    return showFromMaster ? <Questionnaire dataFrom={dataFrom} /> :
      message ? (
        <div>
          <div className="flex items-center justify-center h-72 text-purple-700 font-semibold text-2xl">
            <span>{message}</span>
          </div>
        </div>
      ) : (data ? <Questionnaire dataFrom={dataFrom} /> :
        <div>
          <div className="flex items-center justify-center h-72 text-purple-700 font-semibold text-2xl">
            <span>ไม่พบข้อมูลแบบสอบถาม</span>
          </div>
        </div>
      );
  };
 
  return (loadingauth ?  <Loading setHeight="" /> :
    <>
      <Navbar />
      <section>
        <FormHome />
        <DivHr divClass="flex justify-center" className="h-px mt-4 mb-6 bg-gray-400 border-0 dark:bg-gray-700 w-10/12 opacity-20" />
        {loading ? (
          <Loading setHeight="60vh" />
        ) : (
          generateQuestionnaire()
        )}
      </section>
    </>
  );
}

export default Home;
