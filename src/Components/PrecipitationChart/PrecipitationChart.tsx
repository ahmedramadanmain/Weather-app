import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { getPreciptionChartData } from "../../Util/Functions";
import type { IWeatherResponse } from "../../interfaces/IRespone";

interface PrecipitationChartProps {
  data: IWeatherResponse;
}

const PrecipitationChart = ({ data, }: PrecipitationChartProps) => {
  const chartdata = getPreciptionChartData(data);

  return (
    <BarChart
      style={{
        width: "100%",
        maxHeight:"70vh",
        height:"360px",
        aspectRatio: 1.618,
      }}
      responsive
      data={chartdata}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid
        stroke="#94a3b8"
        strokeDasharray="5 5"
        strokeOpacity={0.5}
      />

      <XAxis dataKey="date" />

      <YAxis
        domain={[0, 10]}
        label={{
          value: "Chance of rain (%)",
          angle: -90,
          position: "insideLeft",
        }}
      />

      <Tooltip />

      <Bar
        dataKey="precipitation"
        fill="#0ea5e9"
        fillOpacity={0.85}
        stroke="#0369a1"
        strokeWidth={2}
        radius={4}
        barSize={30}
      />
    </BarChart>
  );
};

export default PrecipitationChart;