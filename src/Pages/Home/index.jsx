import React, { useEffect } from "react";
import { useGlobalContext } from "../../GlobalApp";

function index() {
    const { setLogo } = useGlobalContext();

    const adjustLogo = () => {
        setLogo("Animations");
    };

    useEffect(() => {
        adjustLogo();
    }, []);

    return <div>HomePage</div>;
}

export default index;
