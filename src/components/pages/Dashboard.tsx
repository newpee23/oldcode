import { useEffect } from "react";
import { userLogin } from "../../types/authType";
import Navbar from "../organs/Navbar";
import { checkTokenUser } from "../../api/homeApi";

type Props = {}

 const Dashboard = ({}: Props) => {
  const user = localStorage.getItem("userLogin");
  const checkToken = async () => {
    if (!user) return;
    const parsedData: userLogin = JSON.parse(user);
    await checkTokenUser(parsedData.id);
  };

  useEffect(() => {
    checkToken();
  }, []);
  return (
    <>
    <Navbar/>
    <div>Dashbord</div>
    </>
  )
}

export default Dashboard;