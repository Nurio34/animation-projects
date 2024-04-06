import { useCallback, useEffect } from "react";
import { useGlobalContext } from "../../GlobalApp";
import Home from "../../Pages/Home";
import { Route, Routes } from "react-router-dom";
import Border1 from "../../Pages/Projects/1-Border";
import DiamondGrid from "../../Pages/Projects/2-DiamondGrid";
import MixBlendMode from "../../Pages/Projects/3-MixBlendMode";
import "./index.scss";

function index() {
    const { headerHeight, footerHeight } = useGlobalContext();

    const setMinMainHeight = useCallback(() => {
        const pageHeight = window.innerHeight;
        return pageHeight - headerHeight;
    });

    return (
        <main
            className=" overflow-hidden"
            style={{ minHeight: setMinMainHeight() }}
        >
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/border1"} element={<Border1 />} />
                <Route path={"/diamondgrid"} element={<DiamondGrid />} />
                <Route path={"/mixblendmode"} element={<MixBlendMode />} />
            </Routes>
        </main>
    );
}

export default index;
