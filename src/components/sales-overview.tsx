import ArrowUp from "../assets/arrow-up-green.svg";
import RedArrowDown from "../assets/arrow-down-red.svg";
import ArrowDown from "../assets/arrow-down-teal.svg";
import SalesBarChart from "./sales-barchart";

const stats = [
  {
    label: "Total Sales",
    amount: "₦120,000,000.00",
    amountColor: "text-[#4545FE]",
    trendColor: "text-[#12B76A]",
    trendIcon: ArrowUp,
    trendValue: "+2.5%",
  },
  {
    label: "MRR",
    amount: "₦50,000,000.00",
    amountColor: "text-[#12B76A]",
    trendColor: "text-[#12B76A]",
    trendIcon: ArrowUp,
    trendValue: "+2.5%",
  },
  {
    label: "Commission Revenue",
    amount: "₦200,000,000.00",
    amountColor: "text-[#14B8A6]",
    trendColor: "text-[#12B76A]",
    trendIcon: ArrowDown,
    trendValue: "0.5%",
  },
  {
    label: "GMV",
    amount: "₦100,000,000.00",
    amountColor: "text-[#F04438]",
    trendColor: "text-[#F04438]",
    trendIcon: RedArrowDown,
    trendValue: "0.5%",
  },
];
const SalesOverview = () => {
  return (
    <section className="bg-white border border-card-border rounded-2xl">
      <div className="flex flex-col lg:flex-row items-start justify-between pt-5 pb-4 px-4 lg:px-5 gap-12 lg:gap-0">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl lg:text-2xl font-semibold">Sales Overview</h2>
          <p className="text-xs"> Showing overview Jan 2022 - Sep 2022</p>
        </div>
        <div className="flex flex-col lg:justify-end gap-4 lg:gap-6 w-full lg:w-auto">
          <button className="text-xs font-medium py-3 lg:py-4 px-6 lg:px-10 rounded-full border border-[#D6D6D6] cursor-pointer hover:bg-gray-300 transition-colors duration-300 ease-in-out w-full lg:w-auto text-center">
            {" "}
            View Transactions
          </button>
          <div className="flex gap-2 lg:gap-6 items-center justify-between lg:justify-start overflow-x-auto">
            <button className="text-sm cursor-pointer hover:bg-[#F5F5F5] rounded-lg px-4 lg:px-6 py-1.5 transition-colors duration-300 ease-in-out whitespace-nowrap">
              1 Week
            </button>
            <button className="text-sm cursor-pointer hover:bg-[#F5F5F5] rounded-lg px-4 lg:px-6 py-1.5 transition-colors duration-300 ease-in-out whitespace-nowrap">
              1 Month
            </button>
            <button className="text-sm cursor-pointer font-semibold rounded-lg px-4 lg:px-6 py-1.5 bg-[#F5F5F5] whitespace-nowrap">
              1 Year
            </button>
          </div>
        </div>
      </div>

      {/* divider  */}
      <div className="border border-card-border w-full" />

      {/* bottom content  */}
      <div className="px-2 lg:ps-2 lg:pe-5 py-4 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
        <SalesBarChart />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
          {stats.map(
            ({
              label,
              amount,
              amountColor,
              trendColor,
              trendIcon,
              trendValue,
            }) => (
              <div
                key={label}
                className="py-3 px-4 lg:px-1.5 xl:px-4 border border-card-border rounded-xl space-y-2"
              >
                <h3
                  className={`text-xl lg:text-[13px] lg:tracking-tight xl:tracking-normal xl:text-base  [@media(min-width:1320px)]:text-[19px] font-semibold ${amountColor}`}
                >
                  {amount}
                </h3>

                <p className="flex items-center gap-2 text-xs lg:text-[9px] lg:tracking-tight xl:tracking-normal xl:text-[10px]">
                  {label}
                  <span className={`flex items-center gap-1 ${trendColor}`}>
                    <img src={trendIcon} alt="trend icon" />
                    {trendValue}
                  </span>
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default SalesOverview;
