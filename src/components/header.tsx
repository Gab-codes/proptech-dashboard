import logo from "../assets/logo.svg";
import budgeting from "../assets/budgeting.svg";
import calender from "../assets/Calendar.svg";
import search from "../assets/search-icon.svg";
import payout from "../assets/payout.svg";
import marketplace from "../assets/Marketplace.svg";
import home from "../assets/Home1.svg";
import toolbox from "../assets/toolbox.svg";
import user from "../assets/Profile1.svg";
import article from "../assets/Article.svg";
import scroll from "../assets/Scroll.svg";
import task from "../assets/task-square.svg";
import { useState, useRef } from "react";
import BudgetModal from "./budget-modal";
import CalendarDropdown from "./calendar-dropdwon";

type IconAction = "budget" | "calendar" | undefined;

const icons: {
  src: string;
  alt: string;
  action?: IconAction;
}[] = [
  { src: budgeting, alt: "budgeting icon", action: "budget" },
  { src: calender, alt: "calendar icon", action: "calendar" },
  { src: search, alt: "search icon" },
  { src: payout, alt: "payout icon" },
  { src: marketplace, alt: "marketplace icon" },
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
            {icons.map(({ src, alt, action }, idx) => (
              <div
                key={idx}
                className="relative"
                ref={action === "calendar" ? calendarButtonRef : null}
              >
                <img
                  src={src}
                  alt={alt}
                  onClick={() => handleIconClick(action)}
                  className="hover:scale-110 size-6 md:size-9 transition-all duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>

          <div className="size-6 md:size-10 flex items-center justify-center rounded-full bg-white md:text-[23px] text-primary font-medium">
            D
          </div>
        </div>
      </div>

      {/* header bottom  */}
      <nav className="px-4 lg:px-15 py-4 bg-white flex items-center lg:justify-between overflow-x-auto gap-4 lg:gap-0">
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
              className={`text-xs md:text-sm whitespace-nowrap transition-colors duration-300 ease-in-out ${active && "font-semibold"}`}
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
