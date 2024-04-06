import React from "react";

function DiamondPiece({ index, id }) {
    const hide = [0, 1, 4, 3, 12, 11, 14, 15];

    return (
        <div
            id={index}
            className=" overflow-hidden border-4 border-transparent"
        >
            <img
                src={`https://picsum.photos/id/${(index + 1) * id}/200`}
                alt=""
                className={`scale-150 object-cover pointer-events-none  -rotate-45
                ${hide.includes(index) ? " hidden" : " block"}
                `}
            />
        </div>
    );
}

export default DiamondPiece;
