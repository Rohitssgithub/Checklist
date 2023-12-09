// import About from "../Page/About/About";
// import Setting from "../Component/setting/Setting";
// import UserProfile from "../Component/User/UserProfile";
// import SingleMoviePage from "../Component/SIngleMoviePage";
// import UserSettings from "../Component/User/UserSetting";
import LoginForm from "../component/Login/Login";
import RegisterForm from "../component/RegistrationForm/Registration";
import ForgetPassword from "../component/ForgetPassword/ForgetPassword";
import NewPassword from "../component/NewPassword/NewPassword";
import OtpReceiver from "../component/OtpReciver/Otpreceiver";
import Home from "../Pages/Home/Home";

export const PATH = {
    publicRoutes: {
        LOGIN: {
            path: '/login',
            element: <LoginForm />
        },
        REGISTER: {
            path: "/register",
            element: <RegisterForm />
        },
        FORGOT_PASSWORD: {
            path: "/forget-password",
            element: <ForgetPassword />
        },
        OTP_RECIVER: {
            path: '/otp-recive',
            element: <OtpReceiver />
        },
        NEW_PASSWORD_GENERATE: {
            path: '/new-password-generate',
            element: <NewPassword />
        },
    },
    privateRoutes: {
        HOME: {
            path: "/home",
            element: <Home />,
            pageName: "Home",
            sidebar: {
                show: true,
            }
        },
    },
}

