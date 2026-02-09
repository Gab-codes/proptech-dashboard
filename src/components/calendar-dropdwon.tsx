import { cn } from "@/lib/utils";
import { X, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import arrow_left from "../assets/calendar-arrow-left.svg";
import arrow_right from "../assets/calendar-arrow-right.svg";

interface CalendarDropdownProps {
  isCalendarOpen: boolean;
  setIsCalendarOpen: (open: boolean) => void;
  buttonRef: React.RefObject<HTMLDivElement>;
}

const DAYS = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];

const CALENDAR_GRID = [
  ["29", "30", "31", "Nov 1", "2", "3", "4"],
  ["5", "6", "7", "8", "9", "10", "11"],
  ["12", "13", "14", "15", "16", "17", "18"],
  ["19", "20", "21", "22", "23", "24", "25"],
  ["26", "27", "28", "29", "30", "31", "DEC 1"],
  ["2", "3", "4", "5", "6", "7", "8"],
  ["9", "10", "11", "12", "13", "14", "15"],
];

const CalendarDropdown = ({
  isCalendarOpen,
  setIsCalendarOpen,
  buttonRef,
}: CalendarDropdownProps) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [pointerLeft, setPointerLeft] = useState(0);

  useEffect(() => {
    if (!isCalendarOpen || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const width = 400;

    const left = rect.left + rect.width / 2 - width / 2;
    const pointer = rect.left + rect.width / 2 - left;

    setPosition({
      top: rect.bottom + 12,
      left: Math.max(12, left),
    });

    setPointerLeft(pointer);
  }, [isCalendarOpen, buttonRef]);

  if (!isCalendarOpen) return null;

  const flatCalendar = CALENDAR_GRID.flat();

  const novStartIndex = flatCalendar.findIndex((d) => d.startsWith("Nov"));
  const decStartIndex = flatCalendar.findIndex((d) => d.startsWith("DEC"));

  return (
    <>
      {/* backdrop */}
      <div
        className="fixed inset-0 z-40"
        onClick={() => setIsCalendarOpen(false)}
      />

      {/* dropdown */}
      <div
        className="fixed z-50 w-80 sm:w-100"
        style={{ top: position.top, left: position.left }}
      >
        {/* pointer */}
        <div
          className="absolute -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 
                     border-l-transparent border-r-transparent border-b-[#0D0D0D]"
          style={{ left: pointerLeft, transform: "translateX(-50%)" }}
        />

        <div className="bg-[#0D0D0D] rounded-xl shadow-2xl overflow-hidden text-white">
          {/* header */}
          <div className="px-6 pt-6 pb-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <ArrowLeft className="w-5 h-5 text-[#98A2B3]" />
                <h2 className="text-base font-medium">Calendar</h2>
              </div>

              <X
                className="w-5 h-5 cursor-pointer"
                onClick={() => setIsCalendarOpen(false)}
              />
            </div>

            {/* month */}
            <div className="relative flex items-center justify-center gap-7.25 mb-6">
              <img src={arrow_left} alt="arrow left" className="size-6" />
              <span className="text-sm">November 2023</span>
              <img src={arrow_right} alt="arrow right" className="size-6" />
            </div>

            {/* days in the week names */}
            <div className="grid grid-cols-7">
              {DAYS.map((day) => (
                <div
                  key={day}
                  className="text-[10px] text-[#969696] text-center py-3 
                             bg-[#121212] border border-[#242424]"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* calendar grid */}
            <div className="grid grid-cols-7">
              {flatCalendar.map((day, i) => {
                const isSelected = day === "16";
                const isCurrentMonth =
                  i >= novStartIndex &&
                  (decStartIndex === -1 || i < decStartIndex);

                return (
                  <div
                    key={i}
                    className="relative h-16 sm:h-13 xl:h-16 2xl:h-[91.2px]
                    flex items-start justify-start p-2
                    border border-[#242424] text-[9.94px] font-medium"
                  >
                    <span
                      className={cn(
                        "leading-none",
                        isSelected &&
                          "bg-[#2525E6] px-2 py-0.5 rounded-full text-white",
                        !isSelected &&
                          (isCurrentMonth
                            ? "text-[#969696]"
                            : "text-[#BBBBBB99]"),
                      )}
                    >
                      {day}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarDropdown;
