import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import ArrowRight from "../assets/arrow-fill-right.svg";
import ArrowLeft from "../assets/arrow-fill-left.svg";

const data = [
  { month: "Jan", blue: 35, green: 27, red: 9 },
  { month: "Feb", blue: 5, green: 27, red: 9 },
  { month: "Mar", blue: 14, green: 6, red: 3 },
  { month: "Apr", blue: 14, green: 25, red: 9 },
  { month: "May", blue: 9, green: 2, red: 7 },
  { month: "Jun", blue: 36, green: 48, red: 7 },
  { month: "Jul", blue: 23, green: 36, red: 17 },
  { month: "Aug", blue: 23, green: 6, red: 17 },
  { month: "Sep", blue: 36, green: 33, red: 6 },
  { month: "Oct", blue: 28, green: 30, red: 10 },
  { month: "Nov", blue: 40, green: 22, red: 12 },
  { month: "Dec", blue: 32, green: 18, red: 8 },
];

const VISIBLE_MONTHS = 9;

const SalesBarChart = () => {
  const [startIndex, setStartIndex] = useState(0);

  const canScrollLeft = startIndex > 0;
  const canScrollRight = startIndex + VISIBLE_MONTHS < data.length;

  const visibleData = data.slice(startIndex, startIndex + VISIBLE_MONTHS);

  const yTicks = [0, 10, 20, 30, 40, 50];

  const yTickFormatter = (value: number) => {
    if (value === 0) return "0";
    return `${value}m`;
  };

  return (
    <div className="w-full lg:w-100 2xl:w-125 max-w-full">
      <div className="flex items-center gap-1">
        {/* left button */}
        <button
          onClick={() => setStartIndex((i) => Math.max(0, i - 1))}
          disabled={!canScrollLeft}
          className={`z-10 size-4.5 rounded-full bg-card-border flex items-center justify-center ${
            canScrollLeft
              ? "hover:bg-gray-200 cursor-pointer"
              : "opacity-40 cursor-not-allowed"
          }`}
          aria-label="scroll left"
        >
          <img src={ArrowLeft} alt="arrow left" />
        </button>

        {/* chart */}
        <div className="h-50 flex-1 -ms-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={visibleData}
              barGap={3}
              margin={{ left: 8, right: 8, top: 12, bottom: 8 }}
            >
              {/* x axis  */}
              <XAxis
                dataKey="month"
                tick={{ fontSize: 12, fill: "#6B7280", fontWeight: 400 }}
                axisLine={false}
                tickLine={false}
                padding={{ left: 8, right: 8 }}
              />

              {/* y axis */}
              <YAxis
                ticks={yTicks}
                tickFormatter={yTickFormatter}
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                tickLine={false}
                axisLine={{ stroke: "#E6E6E9", strokeWidth: 1 }}
                width={56}
                domain={[0, 50]}
              />

              <Tooltip
                cursor={{ fill: "rgba(0,0,0,0.03)" }}
                formatter={(v: number | undefined) => `${v}m`}
              />

              {/* bars */}
              <Bar
                dataKey="blue"
                barSize={4}
                fill="#4545FE"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="green"
                barSize={4}
                fill="#14B8A6"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="red"
                barSize={4}
                fill="#F04438"
                radius={[0, 0, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* right button */}
        <button
          onClick={() =>
            setStartIndex((i) => Math.min(data.length - VISIBLE_MONTHS, i + 1))
          }
          disabled={!canScrollRight}
          className={`size-4.5 rounded-full bg-card-border flex items-center justify-center ${
            canScrollRight
              ? "hover:bg-gray-200 cursor-pointer"
              : "opacity-40 cursor-not-allowed"
          }`}
          aria-label="scroll right"
        >
          <img src={ArrowRight} alt="arrow right" />
        </button>
      </div>
    </div>
  );
};

export default SalesBarChart;
