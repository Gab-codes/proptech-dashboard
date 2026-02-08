import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";
import { useState, useEffect } from "react";

const cards = [
  {
    tag: "MOST CLICKED",
    title: "Urban Prime Plaza Premiere",
    images: [img1, img2],
  },
  {
    tag: "MOST WATCHLISTED",
    title: "Urban Prime Plaza Premiere",
    images: [img2, img3, img1, img2, img3],
  },
  {
    tag: "HOTTEST LISTING",
    title: "Urban Prime Plaza Premiere",
    images: [img3, img1, img2, img3, img1],
  },
];

const CardItem = ({
  tag,
  title,
  images,
}: {
  tag: string;
  title: string;
  images: string[];
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative h-71.5 w-full rounded-xl overflow-hidden">
      <Carousel className="w-full h-full" setApi={setApi}>
        <CarouselContent className="h-full ml-0">
          {images.map((image, imageIndex) => (
            <CarouselItem key={imageIndex} className="h-full pl-0 select-none">
              <div className="relative w-full h-71.5">
                {/* background image */}
                <img
                  src={image}
                  alt={`${title} - ${imageIndex + 1}`}
                  className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
                />

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#00000099] to-[#0000000D]" />

                {/* content */}
                <div className="absolute bottom-8 left-4 right-4 text-white space-y-1">
                  <p className="text-sm font-medium uppercase">{tag}</p>
                  <h3 className="text-lg font-semibold leading-snug">
                    {title}
                  </h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 pointer-events-none">
          {images.map((_, index) => (
            <span
              key={index}
              className={`size-2 rounded-full transition-colors duration-300 ${
                index === current ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

const OtherActions = () => {
  return (
    <section className="my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <CardItem key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default OtherActions;
