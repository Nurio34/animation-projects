import { useCallback, useEffect } from "react";
import { useGlobalContext } from "../../GlobalApp";
import { FaYoutube } from "react-icons/fa";
import Button from "../Button";

function index() {
    const { Header, setHeaderHeight, logo, logoUrl } = useGlobalContext();

    const calculateHeadersHeight = useCallback(() => {
        if (Header.current) {
            const height = Header.current.getBoundingClientRect().height;
            setHeaderHeight(height);
        }
    });

    useEffect(() => {
        calculateHeadersHeight();
    }, []);

    return (
        <header
            className="py-1 px-2 border-b-2 border-gray-300 
            flex justify-between"
            ref={Header}
        >
            <a
                href={logoUrl}
                target="_blank"
                className="flex items-center gap-1 font-serif font-semibold text-xl text-white"
                style={{ WebkitTextStroke: "1px red" }}
            >
                <FaYoutube className=" text-red-600" />
                {logo || "Animations"}
            </a>
            <Button />
        </header>
    );
}

export default index;
