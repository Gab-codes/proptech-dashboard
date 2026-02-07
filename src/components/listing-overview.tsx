import HomeIcon from "../assets/solar_home-linear.svg";
import ArrowRight from "../assets/chevron-arrow-right-blue.svg";

const ListingOverview = () => {
  return (
    <section className="border border-card-border rounded-2xl bg-white overflow-hidden">
      {/* Header */}
      <div className="bg-[#F9FAFB] border-b-[0.5px] border-card-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={HomeIcon} alt="home icon" />
            <h2 className="font-medium text-sm">Listing overview</h2>
          </div>

          <button className="flex items-center gap-1 cursor-pointer">
            <span className="text-[#4545FE] text-xs font-medium">View all</span>
            <img src={ArrowRight} alt="arrow right" className="size-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="flex flex-col gap-3">
          <span className="text-sm">Total</span>
          <span className="font-semibold text-2xl text-[#141414]">1.8k</span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm">Active</span>
          <span className="font-semibold text-2xl text-[#141414]">80</span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm">Archived</span>
          <span className="font-semibold text-2xl text-[#141414]">1k</span>
        </div>
      </div>
    </section>
  );
};

export default ListingOverview;
