import { useData } from "../Context/DataContext";
import VendaItem from "../Components/VendaItem";

const Vendas = () => {
    const { data } = useData();

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
