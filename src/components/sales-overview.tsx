import ArrowUp from "../assets/arrow-up-green.svg";
import RedArrowDown from "../assets/arrow-down-red.svg";
import ArrowDown from "../assets/arrow-down-teal.svg";

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
      <div className="flex items-start justify-between pt-5 pb-4 px-5">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">Sales Overview</h2>
          <p className="text-xs"> Showing overview Jan 2022 - Sep 2022</p>
        </div>
        <div className="flex flex-col justify-end gap-6">
          <button className="text-xs font-medium py-4 px-10 rounded-full border border-[#D6D6D6] cursor-pointer hover:bg-gray-300 transition-colors duration-300 ease-in-out">
            {" "}
            View Transactions
          </button>
          <div className="flex gap-6 items-center">
            <button className="text-sm cursor-pointer hover:bg-[#F5F5F5] rounded-lg px-6 py-1.5 transition-colors duration-300 ease-in-out">
              1 Week
            </button>
            <button className="text-sm cursor-pointer hover:bg-[#F5F5F5] rounded-lg px-6 py-1.5 transition-colors duration-300 ease-in-out">
              1 Month
            </button>
            <button className="text-sm cursor-pointer font-semibold rounded-lg px-6 py-1.5 bg-[#F5F5F5]">
              1 Year
            </button>
          </div>
        </div>
      </div>

      {/* divider  */}
      <div className="border border-card-border w-full" />

      {/* bottom content  */}
      <div className="ps-2 py-4 pe-5 flex items-center justify-between">
        <div>graph</div>

        <div className="grid grid-cols-2 gap-4">
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
                className="py-3 px-4 border border-card-border rounded-xl space-y-2"
              >
                <h3 className={`text-[19px] font-semibold ${amountColor}`}>
                  {amount}
                </h3>

                <p className="flex items-center gap-2 text-[10px]">
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
