import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { IVenda } from "../Context/DataContext";
import Loading from "../Components/Loading";

type WithoutDate = Omit<IVenda, "data">;

const Venda = () => {
    const { id } = useParams();

    const { data, loading } = useFetch<WithoutDate>(
        `https://data.origamid.dev/vendas/${id}`
    );

    if (loading === true) return <Loading/>
    if (data === null) return null;
    return (
        <>
            <div>
                <div className="box mb">{data.id}</div>
                <div className="box mb">{data.nome}</div>
                <div className="box mb">
                    {data.preco.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </div>
                <div className="box mb">{data.status}</div>
                <div className="box mb">{data.pagamento}</div>
            </div>
        </>
    );
};

export default Venda;
