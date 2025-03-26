import React from "react";

const style: React.CSSProperties = {
    border: "var(--gap-s) solid var(--color-3)",
    borderRightColor: "var(--color-1)",
    animation: "spin 1s infinite",
    width: "var(--gap)",
    height: "var(--gap)",
    borderRadius: "50%",
};

const Loading = () => {
    return <div style={style}></div>;
};

export default Loading;
