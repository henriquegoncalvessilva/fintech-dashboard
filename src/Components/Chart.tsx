import {
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { IVenda, useData } from "../Context/DataContext";

type DataChart = {
    data: string;
    pago: number;
    processando: number;
    falha: number;
};

function transformData(data: IVenda[]): DataChart[] {
    const dias = data.reduce((acc: { [key: string]: DataChart }, item) => {
      const dia = item.data.split(" ")[0];
      if (!acc[dia]) {
        acc[dia] = {
          data: dia,
          pago: 0,
          falha: 0,
          processando: 0,
        };
      }
      acc[dia][item.status] += item.preco;
      return acc;
    }, {});
  
    return Object.values(dias).map((dia) => ({
      ...dia,
      data: dia.data.substring(5),
    }));
  }

const Chart = () => {
    const { data } = useData();
    if (data === null) return;
    const transformedData = transformData(data);

    return (
        <ResponsiveContainer width="99%" height={400}>
            <LineChart data={transformedData}>
                <XAxis dataKey="data" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="pago"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <Line
                    type="monotone"
                    dataKey="processando"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="falha" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Chart;
