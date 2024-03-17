import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import { BrowserRouter } from "react-router-dom";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

function GlobalApp({ children }) {
    const Header = useRef();
    const [headerHeight, setHeaderHeight] = useState(0);
    const Main = useRef();
    const Footer = useRef();
    const [footerHeight, setFooterHeight] = useState(0);
    const [logo, setLogo] = useState("");
    const [logoUrl, setLogoUrl] = useState("");
    const [isTutorial, setIsTutorial] = useState(false);

    //! PREVENT ARROW KEYS AND SPACE TO SCROLL PAGE
    const preventDefaultBehaviours = useCallback((e) => {
        if (
            e.code === "ArrowDown" ||
            e.code === "ArrowUp" ||
            e.code === "Space"
        ) {
            e.preventDefault();
        }
    });

    useEffect(() => {
        window.addEventListener("keydown", preventDefaultBehaviours);
        return () =>
            window.removeEventListener("keydown", preventDefaultBehaviours);
    }, []);
    //! ------------------------------------------------

    return (
        <BrowserRouter>
            <GlobalContext.Provider
                value={{
                    Header,
                    headerHeight,
                    setHeaderHeight,
                    Footer,
                    footerHeight,
                    setFooterHeight,
                    logo,
                    setLogo,
                    logoUrl,
                    setLogoUrl,
                    isTutorial,
                    setIsTutorial,
                }}
            >
                {children}
            </GlobalContext.Provider>
        </BrowserRouter>
    );
}

export default GlobalApp;
