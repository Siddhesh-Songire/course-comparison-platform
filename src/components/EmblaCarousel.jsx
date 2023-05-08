import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="max-w-[1640px] mx-auto p-4 embla__container">
        <div className="mx-10 w-full max-h-[600px] object cover embla__slide">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1605&q=80"
              alt=""
              className="w-full object cover object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black bg-opacity-50">
              <h2 className="text-2xl font-bold">Image 1</h2>
              <p className="text-sm">This is some text about image 1.</p>
            </div>
          </div>
        </div>
        <div className="mx-10 w-full max-h-[600px] embla__slide">
          <div className="relative object cover">
            <img
              src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full object cover object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black bg-opacity-50">
              <h2 className="text-2xl font-bold">Image 2</h2>
              <p className="text-sm">This is some text about image 2.</p>
            </div>
          </div>
        </div>
        <div className="mx-10 w-full max-h-[600px] embla__slide">
          <div className="relative object cover">
            <img
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt=""
              className="w-full object cover object-center"
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
