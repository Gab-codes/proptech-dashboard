import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const cards = [
  {
    tag: "MOST CLICKED",
    title: "Urban Prime Plaza Premiere",
    image: img1,
  },
  {
    tag: "MOST WATCHLISTED",
    title: "Urban Prime Plaza Premiere",
    image: img2,
  },
  {
    tag: "HOTTEST LISTING",
    title: "Urban Prime Plaza Premiere",
    image: img3,
  },
];

const OtherActions = () => {
  return (
    <section className="my-6">
      <div className="grid grid-cols-3 gap-4">
        {cards.map(({ tag, title, image }, index) => (
          <div
            key={index}
            className="relative h-[286px] w-full rounded-xl overflow-hidden"
          >
            {/* background image */}
            <img
              src={image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#00000099] to-[#0000000D]" />

            {/* content */}
            <div className="absolute bottom-8 left-4 right-4 text-white space-y-1">
              <p className="text-xs tracking-wide opacity-90">{tag}</p>
              <h3 className="text-lg font-semibold leading-snug">{title}</h3>
            </div>

            {/* dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <span className="size-2 rounded-full bg-white" />
              <span className="size-2 rounded-full bg-white/40" />
              <span className="size-2 rounded-full bg-white/40" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherActions;
