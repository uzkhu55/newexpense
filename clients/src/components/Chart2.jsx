import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/two-simple-pie-chart-otx9h";

  render() {
    return (
      <div className="flex mb-12 w-[50%] flex-col items-start bg-white rounded-md mt-12">
        <div className="flex justify-between w-[100%]">
          <div className="font-bold text-xl m-4">Income-Expense</div>
          <div className="text-xl text-gray-500 m-4">Jun 1-December 12</div>
        </div>
        <div className="flex w-[100%] h-1 bg-gray-200"></div>
        <div className="flex w-[100%]">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart width={400} height={400}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data01}
                cx="40%"
                cy="50%"
                outerRadius={80}
                fill="#00000"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex w-[100%] m-8 justify-between">
            <div className="flex flex-col justify-between">
              <div>Bills</div>
              <div>Insurance</div>
              <div>Food</div>
              <div>Shopping</div>
              <div>Clothin</div>
            </div>
            <div className="flex flex-col justify-between">
              <div>500$</div>
              <div>500$</div>
              <div>500$</div>
              <div>500$</div>
              <div>500$</div>
            </div>
            <div className="flex flex-col justify-between">
              <div>15.50%</div>
              <div>15.50%</div>
              <div>15.50%</div>
              <div>15.50%</div>
              <div>15.50%</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
