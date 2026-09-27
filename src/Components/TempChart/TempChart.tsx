import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function TempChart({ data ,height}) {
  return (
    <div style={{ width: "100%", height: height }}>
      <LineChart
        width={"100%"}
        height={height}
        responsive
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="0" vertical={true} horizontal={true} />

        <XAxis
          dataKey="day"
          tick={({ x, y, payload }) => {
            const item = data[payload.index];

            return (
              <g transform={`translate(${x},${y})`}>
                <text
                  textAnchor="middle"
                  dy={15}
                  fontSize={16}
                  fontWeight={600}
                >
                  {item.day}
                </text>

                <text textAnchor="middle" dy={31} fontSize={14} color="#eee">
                  {item.date}
                </text>
              </g>
            );
          }}
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          domain={[10, 40]}
          ticks={[10, 20, 30, 40]}
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => `${value}°`}
        />

        <Tooltip />

        <Legend verticalAlign="top" align="right" height={40} />

        <Line
          type="monotone"
          dataKey="high"
          name="High"
          stroke="#f5a623"
          strokeWidth={2}
          dot={{
            r: 5,
            fill: "#f5a623",
            strokeWidth: 0,
          }}
        />

        <Line
          type="monotone"
          dataKey="low"
          name="Low"
          stroke="#287be8"
          strokeWidth={2}
          dot={{
            r: 5,
            fill: "#287be8",
            strokeWidth: 0,
          }}
        />
      </LineChart>
    </div>
  );
}
