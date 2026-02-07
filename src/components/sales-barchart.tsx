import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

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

  return (
    <div className="w-[400px] max-w-full">
      <div className="flex items-center gap-1">
        {/* LEFT BUTTON */}
        <button
          onClick={() => setStartIndex((i) => i - 1)}
          disabled={!canScrollLeft}
          className={`size-8 rounded-full bg-gray-100 text-xs flex items-center justify-center ${
            canScrollLeft
              ? "hover:bg-gray-200"
              : "opacity-40 cursor-not-allowed"
          }`}
        >
          ◀
        </button>

        {/* CHART */}
        <div className="h-[260px] flex-1 -ms-7">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={visibleData} barGap={6}>
              <XAxis
                dataKey="month"
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip cursor={{ fill: "transparent" }} />

              <Bar dataKey="blue" fill="#4545FE" radius={[0, 0, 0, 0]} />
              <Bar dataKey="green" fill="#12B76A" radius={[0, 0, 0, 0]} />
              <Bar dataKey="red" fill="#F04438" radius={[0, 0, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => setStartIndex((i) => i + 1)}
          disabled={!canScrollRight}
          className={`size-8 rounded-full bg-gray-100 text-xs flex items-center justify-center ${
            canScrollRight
              ? "hover:bg-gray-200"
              : "opacity-40 cursor-not-allowed"
          }`}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default SalesBarChart;
