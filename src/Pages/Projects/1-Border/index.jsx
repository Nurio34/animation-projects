import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../GlobalApp";
import "./index.scss";

function index() {
    //! RESET THE HEADER
    const { setLogo, setLogoUrl, isTutorial } = useGlobalContext();

    const setHeaderLogo = () => {
        setLogo("Online Tutorials");
        setLogoUrl("https://www.youtube.com/watch?v=Lt0nNisq_S8&t=239s");
    };

    useEffect(() => {
        setHeaderLogo();
    });
    //! ------------------

    return (
        <div className="Border1 h-full">
            {isTutorial ? (
                //! IFRAME OF TUTORIAL
                <div className=" h-full">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/Lt0nNisq_S8?si=k-E9xoOu_sZu7mez"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            ) : (
                //! -----------------
                <div className="h-full grid place-content-center ">
                    <form className=" w-[300px] h-[500px]  place-self-center">
                        <div className="layer1">
                            <div className="layer1"></div>
                            <div className="layer2"></div>
                            <div className="layer3"></div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default index;
