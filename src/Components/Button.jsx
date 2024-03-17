import React, { useCallback } from "react";
import { useGlobalContext } from "../GlobalApp";

function Button() {
    const { isTutorial, setIsTutorial } = useGlobalContext();

    const adjustIsTutorial = useCallback(() => {
        setIsTutorial(!isTutorial);
    });

    return (
        <button
            className={`py-1 px-2 border border-black rounded-md text-white
                ${isTutorial ? "bg-red-600" : "bg-green-600"}
            `}
            onClick={adjustIsTutorial}
        >
            {isTutorial ? "Close" : "Watch"} Tutorial
        </button>
    );
}

export default Button;
