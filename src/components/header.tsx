import logo from "../assets/img/logo.svg";
import budgeting from "../assets/img/Budgeting.svg";
import calender from "../assets/img/Calendar.svg";
import search from "../assets/img/search-icon.svg";
import payout from "../assets/img/Payout.svg";
import marketplace from "../assets/img/Marketplace.svg";
import home from "../assets/img/Home1.svg";
import toolbox from "../assets/img/Toolbox.svg";
import user from "../assets/img/Profile1.svg";
import article from "../assets/img/Article.svg";
import scroll from "../assets/img/Scroll.svg";
import task from "../assets/img/task-square.svg";
import { useState, useRef } from "react";
import BudgetModal from "./budget-modal";
import CalendarDropdown from "./calendar-dropdwon";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

type IconAction = "budget" | "calendar" | undefined;

const icons: {
  src: string;
  alt: string;
  action?: IconAction;
  tooltip: string;
}[] = [
  {
    src: budgeting,
    alt: "budgeting icon",
    action: "budget",
    tooltip: "Budgeting",
  },
  {
    src: calender,
    alt: "calendar icon",
    action: "calendar",
    tooltip: "Calendar",
  },
  { src: search, alt: "search icon", tooltip: "Search Activity" },
  { src: payout, alt: "payout icon", tooltip: "Payout Center" },
  { src: marketplace, alt: "marketplace icon", tooltip: "Marketplace" },
];

const navItems = [
  { href: "#", icon: home, label: "Dashboard", active: true },
  { href: "#", icon: toolbox, label: "Listings" },
  { href: "#", icon: user, label: "Users" },
  { href: "#", icon: article, label: "Request" },
  { href: "#", icon: scroll, label: "Applications" },
  { href: "#", icon: task, label: "Tasks" },
];

const Header = () => {
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarButtonRef = useRef<HTMLDivElement | null>(null);

  const handleIconClick = (action?: string) => {
    if (!action) return;

    if (action === "budget") {
      setIsBudgetOpen((prev) => !prev);
    }

    if (action === "calendar") {
      setIsCalendarOpen((prev) => !prev);
    }
  };

  return (
    <header className="flex flex-col z-50 sticky top-0 border-b border-[#F4F4F5]">
      {/* header top */}
      <div className="bg-primary flex items-center justify-between px-4 lg:px-15 py-4">
        <img src={logo} alt="logo" className="object-contain max-sm:w-30" />

        <div className="flex items-center gap-2 md:gap-5">
          <div className="flex items-center gap-2 md:gap-4">
            {icons.map(({ src, alt, action, tooltip }, idx) => (
              <div
                key={idx}
                className="relative"
                ref={action === "calendar" ? calendarButtonRef : null}
              >
                <Tooltip>
                  <TooltipTrigger onClick={() => handleIconClick(action)}>
                    <img
                      src={src}
                      alt={alt}
                      className="hover:scale-110 size-5.5 md:size-9 transition-all duration-300 cursor-pointer"
                    />
                  </TooltipTrigger>
                  <TooltipContent>{tooltip}</TooltipContent>
                </Tooltip>
              </div>
            ))}
          </div>

          <div className="size-6 md:size-10 flex items-center justify-center rounded-full bg-white md:text-[23px] text-primary font-medium">
            D
          </div>
        </div>
      </div>

      {/* header bottom  */}
      <nav className="px-4 lg:px-15 py-4 bg-white flex items-center lg:justify-between overflow-x-auto gap-4 lg:gap-0 lg:overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {navItems.map(({ href, icon, label, active }) => (
          <a
            key={label}
            href={href}
            className={`
            flex items-center px-3 md:px-8 py-2 gap-2 rounded-lg shrink-0
            transition-all duration-300 ease-in-out
            ${
              active
                ? "text-primary bg-primary/15"
                : "text-[#3D3D3D] hover:text-primary hover:bg-primary/10"
            }
          `}
          >
            <img
              src={icon}
              alt={`${label.toLowerCase()} icon`}
              className="size-5 md:size-6"
            />
            <p
              className={`text-xs md:text-sm whitespace-nowrap transition-colors duration-300 ease-in-out ${
                active && "font-semibold"
              }`}
            >
              {label}
            </p>
          </a>
        ))}
      </nav>

      <BudgetModal
        isBudgetOpen={isBudgetOpen}
        setIsBudgetOpen={setIsBudgetOpen}
      />

      <CalendarDropdown
        isCalendarOpen={isCalendarOpen}
        setIsCalendarOpen={setIsCalendarOpen}
        buttonRef={calendarButtonRef as React.RefObject<HTMLDivElement>}
      />
    </header>
  );
};

export default Header;
