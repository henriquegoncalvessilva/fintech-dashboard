import React, { useState } from "react";
import useFetch from "../Hooks/useFetch";

interface IDataContext {
    data: IVenda[] | null;
    loading: boolean;
    error: string | null;
    inicio: string;
    final: string;
    setInicio: React.Dispatch<React.SetStateAction<string>>;
    setFinal: React.Dispatch<React.SetStateAction<string>>;
}

export interface IVenda {
    id: string;
    nome: string;
    preco: number;
    status: "pago" | "processando" | "falha";
    pagamento: "boleto" | "pix" | "cartao";
    data: string;
    parcelas: number | null;
}
export const useData = () => {
    const context = React.useContext(DataContext);
    if (!context)
        throw new Error("useData precisa estar em DataContextProvider");
    return context;
};

const getDateAgo = (n: number) => {
    const date = new Date();
    date.setDate(date.getDate() - n);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
};

const DataContext = React.createContext<IDataContext | null>(null);
export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
    const [inicio, setInicio] = useState(getDateAgo(90));
    const [final, setFinal] = useState(getDateAgo(0));

    const { data, loading, error } = useFetch<IVenda[]>(
        `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
    );

    return (
        <DataContext.Provider
            value={{ data, loading, error, inicio, final, setInicio, setFinal }}
        >
            {children}
        </DataContext.Provider>
    );
};
