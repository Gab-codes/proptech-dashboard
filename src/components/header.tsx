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

const icons = [
  { src: budgeting, alt: "budgeting icon" },
  { src: calender, alt: "calender icon" },
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
  return (
    <header className="flex flex-col z-50 sticky top-0 border-b border-[#F4F4F5]">
      {/* header top */}
      <div className="bg-primary flex items-center justify-between px-15 py-4">
        <img src={logo} alt="logo" className="object-contain" />

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4">
            {icons.map(({ src, alt }, idx) => (
              <img
                key={idx}
                src={src}
                alt={alt}
                className="hover:scale-110 transition-all duration-300 cursor-pointer"
              />
            ))}
          </div>

          <div className="size-10 flex items-center justify-center rounded-full bg-white text-[23px] text-primary font-medium">
            D
          </div>
        </div>
      </div>

      {/* header bottom  */}
      <nav className="px-15 py-4 bg-white flex items-center justify-between">
        {navItems.map(({ href, icon, label, active }) => (
          <a
            key={label}
            href={href}
            className={`
            flex items-center px-8 py-2 gap-2 rounded-lg
            transition-colors duration-300 ease-in-out
            ${
              active
                ? "text-primary bg-primary/15"
                : "text-[#3D3D3D] hover:text-primary hover:font-semibold hover:bg-primary/10"
            }
          `}
          >
            <img
              src={icon}
              alt={`${label.toLowerCase()} icon`}
              className="size-6"
            />
            <p
              className={`text-sm transition-colors duration-300 ease-in-out ${active && "font-semibold"}`}
            >
              {label}
            </p>
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
