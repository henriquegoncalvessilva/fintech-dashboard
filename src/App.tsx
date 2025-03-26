import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import { DataContextProvider } from "./Context/DataContext";
import Resumo from "./Pages/Resumo";
import "./Styles.css";
import Vendas from "./Pages/Vendas";
import Venda from "./Pages/Venda";

function App() {
    return (
        <>
            <BrowserRouter>
                <DataContextProvider>
                    <div className="container">
                        <Sidenav />
                        <main>
                            <Header />
                            <Routes>
                                <Route path="/" element={<Resumo />}></Route>
                                <Route
                                    path="/vendas"
                                    element={<Vendas />}
                                ></Route>
                                <Route
                                    path="/vendas/:id"
                                    element={<Venda />}
                                ></Route>
                            </Routes>
                        </main>
                    </div>
                </DataContextProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
