import { lazy } from "react";

const Details = lazy(() => import("./Details"));
const Home = lazy(() => import("./Home"));

const useScreens = () => {
    return {
        Details,
        Home
    };
}

export default useScreens;