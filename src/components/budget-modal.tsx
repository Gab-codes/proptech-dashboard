import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import BudgetSketch from "../assets/Sketch.png";
import SettingsIcon from "../assets/setting-4.svg";
import TrendingUp from "../assets/trend-up.svg";
import AlignBottom from "../assets/align-bottom.svg";

const BudgetModal = ({
  isBudgetOpen,
  setIsBudgetOpen,
}: {
  isBudgetOpen: boolean;
  setIsBudgetOpen: (value: boolean) => void;
}) => {
  return (
    <Dialog open={isBudgetOpen} onOpenChange={setIsBudgetOpen}>
      <DialogContent
        className="w-109.5 bg-white rounded-[10px] p-0 pb-6 border-0 outline-0 overflow-hidden"
        showCloseButton={false}
      >
        <div className="bg-[#0C2841]">
          <DialogHeader className="border-b-[0.5px] border-[#E4E4E7]">
            <DialogTitle className="sr-only">Budget</DialogTitle>
            <img
              src={BudgetSketch}
              className="w-full px-6 pt-6"
              alt="budget sketch"
            />
          </DialogHeader>
        </div>

        <div className="flex flex-col gap-4 px-12">
          <div className="flex items-center gap-3">
            <img src={SettingsIcon} alt="settings icon" className="size-6" />
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-base text-foreground">
                Set up annual budgets by account category
              </h3>
              <p className="text-xs text-[#606060]">
                Allocate funds across income and expense lines with full
                visibility.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src={TrendingUp} alt="trending up icon" className="size-6" />
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-base text-foreground">
                Track actuals vs budget in real time
              </h3>
              <p className="text-xs text-[#606060]">
                See how your community is performing against plan, month by
                month.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src={AlignBottom} alt="align bottom icon" className="size-6" />
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-base text-foreground">
                Adjust figures and forecast with ease
              </h3>
              <p className="text-xs text-[#606060]">
                Edit amounts, apply percentage changes, or roll forward last
                year's data-all in one place.
              </p>
            </div>
          </div>

          <button className="h-11.5 mt-2 w-full bg-[#18181B] text-white font-medium rounded-full cursor-pointer hover:bg-[#18181B]/90 transition-colors">
            Create Budget
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BudgetModal;
