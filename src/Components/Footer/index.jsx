import { useCallback, useEffect } from "react";
import { useGlobalContext } from "../../GlobalApp";
import { Link } from "react-router-dom";
import "./index.scss";

function index() {
    const { Footer, setFooterHeight } = useGlobalContext();

    const calculateFootersHeight = useCallback(() => {
        if (Footer.current) {
            const height = Footer.current.getBoundingClientRect().height;
            setFooterHeight(height);
        }
    });

    useEffect(() => {
        calculateFootersHeight();
    }, []);

    return (
        <footer
            className="py-1 px-2 border-t-2 border-gray-300 
            flex flex-col flex-wrap max-h-24"
            ref={Footer}
        >
            <Link to={"/"}>Home</Link>
            <Link to={"/border1"}>Border1</Link>
            <Link to={"/diamondgrid"}>DiamondGrid</Link>
            <Link to={"/mixblendmode"}>MixBlendMode</Link>
        </footer>
    );
}

export default index;
