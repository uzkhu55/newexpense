import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/p/sandbox/simple-bar-chart-72d7y5";

  render() {
    return (
      <div className="flex mb-12  w-[50%]  flex-col items-start bg-white rounded-md mt-12">
        <div className="font-bold text-xl flex m-4">Income expense</div>
        <div className="flex w-[100%] h-1 bg-gray-200"></div>
        <ResponsiveContainer
          className="p-2 mt-12 bg-white rounded-md"
          width="100%"
          height={300}
        >
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip className="hover:bg-white bg-black" />
            <Legend />
            <Bar
              dataKey="pv"
              fill="#FF0000"
              activeBar={<Rectangle fill="gold" stroke="black" />}
              className="hover:bg-white"
            />
            <Bar
              dataKey="uv"
              fill="#000000"
              activeBar={<Rectangle fill="white" stroke="black" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
