import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="max-w-[1640px] mx-auto p-4 embla__container">
        <div className="mx-10 w-full max-h-[500px] embla__slide">
          <div className="relative h-full">
            <img
              src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-full object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black bg-opacity-50">
              <h2 className="text-2xl font-bold">Image 1</h2>
              <p className="text-sm">This is some text about image 1.</p>
            </div>
          </div>
        </div>
        <div className="mx-10 w-full max-h-[500px] embla__slide">
          <div className="relative h-full">
            <img
              src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-full object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black bg-opacity-50">
              <h2 className="text-2xl font-bold">Image 2</h2>
              <p className="text-sm">This is some text about image 2.</p>
            </div>
          </div>
        </div>
        <div className="mx-10 w-full max-h-[500px] embla__slide">
          <div className="relative h-full">
            <img
              src="https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-full object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black bg-opacity-50">
              <h2 className="text-2xl font-bold">Image 3</h2>
              <p className="text-sm">This is some text about image 3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
