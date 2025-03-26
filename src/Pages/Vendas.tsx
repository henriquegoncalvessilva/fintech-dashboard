import { useData } from "../Context/DataContext";
import VendaItem from "../Components/VendaItem";
import Loading from "../Components/Loading";

const Vendas = () => {
    const { data, loading } = useData();
    if (loading === true) return <Loading />;

    if (data === null) return null;
    return (
        <>
            <ul>
                {data.map((venda) => {
                    return (
                        <li>
                            <VendaItem key={venda.id} venda={venda} />
                        </li>
                    );
                })}
            </ul>
            ;
        </>
    );
};

export default Vendas;
