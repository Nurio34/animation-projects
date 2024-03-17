import { useCallback, useEffect } from "react";
import { useGlobalContext } from "../../GlobalApp";
import { Link } from "react-router-dom";

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
        <footer className="py-1 px-2 border-t-2 border-gray-300" ref={Footer}>
            <Link to={"/border1"}>Border1</Link>
        </footer>
    );
}

export default index;
