import Message from "../../assets/img/messages-3.svg";

const ChatButton = () => {
  return (
    <button className="bg-[#242526] group cursor-pointer group size-[57.6px] rounded-full flex items-center justify-center border border-white/20 fixed right-5 sm:right-10 bottom-17 sm:bottom-14 ">
      <img
        src={Message}
        alt="message icon"
        className="size-6 group-hover:rotate-y-360 transition-all duration-600 ease-in-out"
      />
      <span className="sr-only">Chat Button</span>
    </button>
  );
};

export default ChatButton;
