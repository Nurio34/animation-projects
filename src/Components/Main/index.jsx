import { useCallback, useEffect } from "react";
import { useGlobalContext } from "../../GlobalApp";
import Home from "../../Pages/Home";
import Border1 from "../../Pages/Projects/1-Border";
import { Route, Routes } from "react-router-dom";

function index() {
    const { headerHeight, footerHeight } = useGlobalContext();

    const setMinMainHeight = useCallback(() => {
        const pageHeight = window.innerHeight;
        return pageHeight - headerHeight;
    });

    return (
        <main
            className=" overflow-y-auto"
            style={{ height: setMinMainHeight() }}
        >
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/border1"} element={<Border1 />} />
            </Routes>
        </main>
    );
}

export default index;
