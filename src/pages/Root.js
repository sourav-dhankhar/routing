import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

const Root = () => {
    return <>
        <MainNavigation></MainNavigation>
        <Outlet></Outlet>
    </>
}

export default Root;