import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, ArrowLeft } from "lucide-react";

interface CalendarDropdownProps {
  isCalendarOpen: boolean;
  setIsCalendarOpen: (open: boolean) => void;
  buttonRef: React.RefObject<HTMLDivElement>;
}

const CalendarDropdown = ({
  isCalendarOpen,
  setIsCalendarOpen,
  buttonRef,
}: CalendarDropdownProps) => {
  const [currentDate, setCurrentDate] = useState(new Date(2023, 10, 16)); // November 2023, 16th selected
  const calendarRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];

  useEffect(() => {
    if (isCalendarOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const calendarWidth = 400; // Width of calendar

      setPosition({
        top: buttonRect.bottom + 12, // 12px gap + pointer height
        left: buttonRect.left + buttonRect.width / 2 - calendarWidth / 2,
      });
    }
  }, [isCalendarOpen, buttonRef]);

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsCalendarOpen(false);
      }
    };

    if (isCalendarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCalendarOpen, setIsCalendarOpen, buttonRef]);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);

    const days: (number | null)[] = [];

    // Previous month days
    const prevMonthDays = getDaysInMonth(new Date(year, month - 1));
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(prevMonthDays - i);
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    // Next month days
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push(i);
    }

    return days;
  };

  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1),
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1),
    );
  };

  if (!isCalendarOpen) return null;

  const days = generateCalendarDays();
  const firstDay = getFirstDayOfMonth(currentDate);
  const daysInMonth = getDaysInMonth(currentDate);

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" />

      {/* Calendar Dropdown */}
      <div
        ref={calendarRef}
        className="fixed z-50 w-100"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
      >
        {/* Pointer Arrow */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#0D0D0D]" />

        {/* Calendar Container */}
        <div className="bg-[#0D0D0D] rounded-lg shadow-2xl text-white overflow-hidden">
          {/* Header */}
          <div className="px-6 pt-6 pb-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <ArrowLeft className="w-5 h-5 text-[#98A2B3] cursor-pointer hover:text-white transition-colors" />
                <h2 className="text-base font-medium text-white">Calendar</h2>
              </div>
              <X
                className="w-5 h-5 text-white cursor-pointer hover:text-gray-300 transition-colors"
                onClick={() => setIsCalendarOpen(false)}
              />
            </div>

            {/* Month/Year Navigation */}
            <div className="flex items-center justify-center mb-6 relative">
              <ChevronLeft
                className="w-5 h-5 text-[#98A2B3] cursor-pointer hover:text-white transition-colors absolute left-0"
                onClick={previousMonth}
              />
              <span className="text-sm font-normal text-white">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </span>
              <ChevronRight
                className="w-5 h-5 text-[#98A2B3] cursor-pointer hover:text-white transition-colors absolute right-0"
                onClick={nextMonth}
              />
            </div>

            {/* Day Names */}
            <div className="grid grid-cols-7 mb-0">
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="text-center text-[10px] text-[#969696] font-medium py-3 bg-[#121212] border-[0.5px] border-[#242424]"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7">
              {days.map((day, index) => {
                const isCurrentMonth =
                  index >= firstDay && index < firstDay + daysInMonth;
                const isSelected = isCurrentMonth && day === 16;
                const isNextMonth = index >= firstDay + daysInMonth;

                // Determine if it's the first day of next month in the last row
                const isNextMonthLabel = isNextMonth && day === 1;

                return (
                  <div
                    key={index}
                    className={`
                      relative h-12.5 flex items-center justify-center text-sm
                      cursor-pointer transition-colors
                      border-[0.5px] border-[#242424]
                      ${
                        isSelected
                          ? "bg-[#3b82f6]"
                          : "bg-[#0D0D0D] hover:bg-[#1a1a1a]"
                      }
                      ${isCurrentMonth ? "text-white" : "text-[#969696]"}
                    `}
                  >
                    <span className="text-sm">{day}</span>
                    {isNextMonthLabel && (
                      <span className="absolute top-1 right-1 text-[9px] text-[#969696]">
                        DEC
                      </span>
                    )}
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
