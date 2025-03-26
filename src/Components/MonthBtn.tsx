import React from "react";
import { useData } from "../Context/DataContext";

type MonthButtonProps = {
    n: number;
};

const style: React.CSSProperties = {
    padding: "var(--gap) var(--gap-s)",
    background: "var(--color-3)",
    border: "none",
    borderRadius: "var(--gap)",
    color: "var(--color-2)",
    fontWeight: "600",
    textTransform: "capitalize",
};

const monthName = (n: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + n);
    return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
};

const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
};

const MonthBtn = ({ n }: MonthButtonProps) => {
    const { setInicio, setFinal } = useData();

    function setMonth(n: number) {
        const date = new Date();
        date.setMonth(date.getMonth() + n);

        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        setInicio(formatDate(firstDay));
        setFinal(formatDate(lastDay));
    }
    return (
        <button
            style={style}
            onClick={() => {
                setMonth(n);
            }}
        >
            {monthName(n)}
        </button>
    );
};

export default MonthBtn;
