// RouterConfig.tsx
import { Navigate, createBrowserRouter } from "react-router-dom";
import { userLogin } from "../types/authType";
import SingIn from "../components/pages/SingIn";
import ErrorPage from "../components/pages/ErrorPage";
import Home from "../components/pages/Home";

import Dashboard from "../components/pages/Dashboard";
import Page from "../components/pages/Page";

type routersType = {
    path: string;
    element: JSX.Element;
}
let routerData: routersType[] = [];

const token = localStorage.getItem('tokenAuth');
const user = localStorage.getItem('userLogin');

if (user) {
    let parsedData: userLogin = JSON.parse(user);
    switch (parsedData.level) {

        case "m":
            routerData = [
                {
                    path: "/",
                    element: token ? <Home /> : <Navigate to="/SingIn" />,// ถ้าไม่มี tokenAuth จะเปลี่ยนเส้นทางไปที่หน้า App
                },
                {
                    path: "/Home",
                    element:  token ? <Home /> : <Navigate to="/SingIn" />,
                },
                {
                    path: "/SingIn",
                    element:  <SingIn />,
                },
                {
                    path: "/Page/:status/:i",
                    element: token ? <Page /> : <Navigate to="/SingIn" />,
                },
                {
                    path: "*", // เมื่อมีการเข้าถึงเส้นทางที่ไม่ถูกกำหนดไว้ข้างต้น
                    element: <ErrorPage />, // นำทางไปหน้า ErrorPage
                }
            ];
            break;

        case "a":
            routerData = [
                {
                    path: "/",
                    element: token ? <Dashboard /> : <Navigate to="/SingIn" />,// ถ้าไม่มี tokenAuth จะเปลี่ยนเส้นทางไปที่หน้า App
                },
                {
                    path: "/Dashboard",
                    element: token ? <Dashboard /> : <Navigate to="/SingIn" />,
                },
                {
                    path: "/SingIn",
                    element: <SingIn />,
                },
                {
                    path: "*", // เมื่อมีการเข้าถึงเส้นทางที่ไม่ถูกกำหนดไว้ข้างต้น
                    element: <ErrorPage />, // นำทางไปหน้า ErrorPage
                }
            ];
            break;

        default:
            routerData = [
                {
                    path: "/",
                    element: <SingIn />,
                },
                {
                    path: "*", // เมื่อมีการเข้าถึงเส้นทางที่ไม่ถูกกำหนดไว้ข้างต้น
                    element: <ErrorPage />, // นำทางไปหน้า ErrorPage
                }
            ];
            break;
    }
} else {
    routerData = [
        {
            path: "/",
            element: <SingIn />,
        },
        {
            path: "*", // เมื่อมีการเข้าถึงเส้นทางที่ไม่ถูกกำหนดไว้ข้างต้น
            element: token ? <ErrorPage /> : <Navigate to="/" />, // นำทางไปหน้า ErrorPage
        }
    ];
}

const router = createBrowserRouter(routerData);
export default router;