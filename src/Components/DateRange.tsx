import DateInput from "./DateInput";
import { useData } from "../Context/DataContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DateRange = () => {
    const { inicio, final, setFinal, setInicio } = useData();
    const navigate = useNavigate();


    useEffect(() => {
        navigate("/")
    }, [inicio, final])
    

    return (
        <form
            className="box flex"
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <DateInput
                label="Inicio"
                value={inicio}
                onChange={({ target }) => {
                    setInicio(target.value);
                }}
            />
            <DateInput
                label="Final"
                value={final}
                onChange={({ target }) => {
                    setFinal(target.value);

                }}
            />
        </form>
    );
};

export default DateRange;
