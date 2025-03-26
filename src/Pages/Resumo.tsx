import Chart from "../Components/Chart";
import Loading from "../Components/Loading";
import { useData } from "../Context/DataContext";

const Resumo = () => {
    const { data, loading } = useData();
    if (loading === true) return <Loading />;
    if (data === null) return null;
    return (
        <section>
            <div className="resumo flex mb">
                <div className="box">
                    <h2>Vendas</h2>
                    <span>
                        {data
                            .filter((elemento) => elemento.status !== "falha")
                            .reduce((acc, item) => acc + item.preco, 0)
                            .toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            })}
                    </span>
                </div>

                <div>
                    <div className="box">
                        <h2>Recebido</h2>
                        <span>
                            {data
                                .filter(
                                    (elemento) => elemento.status === "pago"
                                )
                                .reduce((acc, item) => acc + item.preco, 0)
                                .toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                })}
                        </span>
                    </div>
                </div>
                <div>
                    <div className="box">
                        <h2>Processando</h2>
                        <span>
                            {data
                                .filter(
                                    (elemento) =>
                                        elemento.status === "processando"
                                )
                                .reduce((acc, item) => acc + item.preco, 0)
                                .toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                })}
                        </span>
                    </div>
                </div>
            </div>
            <div className="box">
                <Chart />
            </div>
        </section>
    );
};

export default Resumo;
