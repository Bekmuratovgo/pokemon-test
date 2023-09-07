import { Route, Routes } from "react-router-dom";
import App from "./App";
import CardDetail from "./pages/CardDetail/CardDetail";

const Router = () => {
    return (
        <Routes>
            <Route path={'/'} element={<App />} />
            <Route path={'details/:name'} element={<CardDetail />}  />
        </Routes> 
    );
};

export default Router;