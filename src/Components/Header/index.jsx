import { useCallback, useEffect, useRef } from "react";
import { useGlobalContext } from "../../GlobalApp";
import { FaYoutube } from "react-icons/fa";
import Button from "../Button";
import "./index.scss";

function index() {
    const { Header, setHeaderHeight, logo, logoUrl } = useGlobalContext();
    const Logo = useRef();

    const calculateHeadersHeight = useCallback(() => {
        if (Header.current) {
            const height = Header.current.getBoundingClientRect().height;
            setHeaderHeight(height);
        }
    });

    useEffect(() => {
        calculateHeadersHeight();
    }, []);

    //! HEADER LOGO ANİMATİOND TEXT

    useEffect(() => {
        let text = "";
        let index = 0;
        let interval_write;
        let interval_delete;
        if (Logo.current) {
            const logoEl = Logo.current;
            const recrusion = (text, index) => {
                interval_write = setInterval(() => {
                    const copyLogo = logo;
                    text = copyLogo.substring(0, index);
                    logoEl.innerHTML = `<p>${text}</p>`;
                    index++;

                    if (index === logo.length + 3) {
                        clearInterval(interval_write);

                        interval_delete = setInterval(() => {
                            const copyLogo = logo;
                            text = copyLogo.substring(0, index);
                            index--;
                            logoEl.innerHTML = `<p>${text}</p>`;

                            if (index === -2) {
                                clearInterval(interval_delete);
                                recrusion(text, index);
                            }
                        }, 200);
                    }
                }, 500);
            };

            recrusion(text, index);
        }

        return () => {
            clearInterval(interval_write);
            clearInterval(interval_delete);
        };
    }, [logo]);

    //! -------------------------

    return (
        <header
            className="py-1 px-2 border-b-2 border-gray-300 
            flex justify-between"
            ref={Header}
        >
            <div className="flex items-center gap-1">
                <FaYoutube className=" text-red-600" />
                <a
                    href={logoUrl}
                    target="_blank"
                    className=" font-serif font-semibold text-xl text-white capitalize"
                    style={{ WebkitTextStroke: "1px red" }}
                    ref={Logo}
                ></a>
                <div className="cursorAnimation"></div>
            </div>
            <Button />
        </header>
    );
}

export default index;
