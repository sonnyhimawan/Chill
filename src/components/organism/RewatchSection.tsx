import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import PrevIcon from "/src/assets/image/icon/arrow-left.svg?react";
import NextIcon from "/src/assets/image/icon/arrow-right.svg?react";
import NewEpisodeCardFilmLandscape from "../atoms/card/NewEpisodeCardFilmLandscape";


// CSS bawaan Swiper

const RewatchSection = () => {

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);  
  const films = [
    {
      name: "Don't Look Up",
      title: "Don't Look Up",
      image: "/src/assets/image/img/Dont Look Up.png",
      rating: 4.5
    },
    {
      name: "Black Adam",
      title: "Black Adam",
      image: "/src/assets/image/img/Black Adam.png",
      rating: 4.2,
      badge: "Episode Baru"
    },
    {
      name: "Stuart Litle",
      title: "Stuart Litle",
      image: "/src/assets/image/img/Stuart Litle.png",
      rating: 4.6,
      badge: "Episode Baru"
    },
    {
      name: "The Devil All The Time",
      title: "The Devil All The Time",
      image: "/src/assets/image/img/The Devil All The Time.png",
      rating: 4.4,
      badge: "Episode Baru"
    },

    {
      name: "Alice In Borderland",
      title: "Alice In Borderland",
      image: "/src/assets/image/img/Alice In Borderland.png",
      rating: 4.4,
    },

    {
      name: "Bokuno Hero Academya",
      title: "Bokuno Hero Academya",
      image: "/src/assets/image/img/Bokuno Hero Academya.png",
      rating: 4.4,
      badge: "Episode Baru"
    },

    {
      name: "Ant Man Quantumania",
      title: "Ant Man Quantumania",
      image: "/src/assets/image/img/ANT Man Quantumania.png",
      rating: 4.4,
    },
  ];
  return (
    <section>
      <div className="px-8 py-8 sm:py-10 lg:py-16 sm:px-10 lg:px-16 overflow-x-hidden relative bg-background">
        <h1 className="text-1xl sm:text-3xl md:text-3xl lg:text-4xl font-bold font-myFont text-white mb-4 sm:mb-5 md:mb-6 lg:mb-8">
          Melajutkan Nonton Film
        </h1>

   <button
        ref={prevRef}
        className="absolute z-10 bottom-5/12 translate-y-1/2 sm:left-5 lg:left-10 bg-gray-800 hover:bg-secondary p-2 rounded-full border border-gray-600"
        aria-label="Previous"
      >
        <PrevIcon className="w-7 h-7 text-white" />
      </button>

      <button
        ref={nextRef}
        className="absolute z-10 bottom-5/12 translate-y-1/2 sm:right-5 lg:right-10 bg-gray-800 hover:bg-secondary p-2 rounded-full border border-gray-600"
        aria-label="Next"
      >
        <NextIcon className="w-7 h-7 text-white" />
      </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
          className="rewatch-swiper relative rounded-lg flex gap-4 w-full sm:overflow-x-hidden lg:overflow-x-hidden"
        >
          {films.map((RewatchItem, index) => (
            <SwiperSlide key={index}>
              <NewEpisodeCardFilmLandscape
                name={RewatchItem.name}
                title={RewatchItem.title}
                image={RewatchItem.image}
                rating={RewatchItem.rating}
                badge={RewatchItem.badge}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    
    </section>
  );
};

export default RewatchSection;
