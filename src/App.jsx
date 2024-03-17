import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "./GlobalApp";

function App() {
    //! SET PAGE TOP=0 WHEN GOİNG DİFFERENT PAGE
    const [path, setPath] = useState("/");
    const currentPath = useLocation().pathname;

    if (path !== currentPath) {
        console.log("ok");
        setPath(currentPath);
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }
    //! ----------------------

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default App;
