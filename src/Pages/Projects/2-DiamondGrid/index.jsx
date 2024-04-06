import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../GlobalApp";
import DiamondPiece from "./components/DiamondPiece";

function index() {
    //! RESET THE HEADER

    const { setLogo, setLogoUrl, isTutorial } = useGlobalContext();

    const setHeaderLogo = () => {
        setLogo("Mix Blend Mode");
        setLogoUrl("https://www.youtube.com/watch?v=Lt0nNisq_S8&t=239s");
    };

    useEffect(() => {
        setHeaderLogo();
    });

    //! ------------------

    const [id, setId] = useState(1);

    useEffect(() => {
        let time;

        time = setTimeout(() => {
            setId((pre) => pre + 1);
        }, 3000);

        return () => clearTimeout(time);
    }, [id]);

    //! ------------------

    return (
        <>
            <div className="grid grid-cols-4 grid-rows-4 w-full aspect-square rotate-45">
                {[...Array(16)].map((_, index) => (
                    <DiamondPiece key={index} index={index} id={id} />
                ))}
            </div>
        </>
    );
}

export default index;
