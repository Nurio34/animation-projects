import { useCallback, useEffect, useState } from "react";
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
                <div className=" h-full container ">
                    <form>
                        <div className="layer1"></div>
                        <div className="layer2"></div>
                        <div className="form">
                            <h1 className=" uppercase text-2xl font-bold text-center">
                                login
                            </h1>
                            <label
                                htmlFor="nameInp"
                                className="relative overflow-hidden "
                            >
                                <div className="layer3"></div>
                                <input
                                    type="text"
                                    name="name"
                                    id="nameInp"
                                    placeholder=" Name..."
                                    className=" capitalize"
                                />
                            </label>
                            <label
                                htmlFor="passInp"
                                className=" relative overflow-hidden"
                            >
                                <div className="layer4"></div>
                                <input
                                    type="password"
                                    name="pass"
                                    id="passInp"
                                    placeholder=" Password..."
                                />
                            </label>
                            <input
                                type="submit"
                                value="sign in"
                                className="  py-1 px-2 capitalize bg-white text-black cursor-pointer outline-none"
                            />
                            <div className="flex justify-between uppercase text-xs">
                                <a href="#" className="">
                                    Forget Password
                                </a>
                                <a href="#" className="signup">
                                    signup
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default index;
