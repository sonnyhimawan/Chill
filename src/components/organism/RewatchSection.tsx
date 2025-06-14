import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import PrevIcon from "/public/assets/icon/arrow-left.svg?react";
import NextIcon from "/public/assets/icon/arrow-right.svg?react";
import CardFilmLandscape from "../atoms/card/CardFilmLandscape";


const RewatchSection = () => {

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleDeviceSize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleDeviceSize();
        window.addEventListener("resize", handleDeviceSize);
        return () => window.removeEventListener("resize", handleDeviceSize);
    }, []);

    const handleMouseEnter = () => {
        if (swiperInstance?.autoplay) {
            swiperInstance.autoplay.stop();
        }
    };

    const handleMouseLeave = () => {
        if (swiperInstance?.autoplay) {
            swiperInstance.autoplay.start();
        }
    };

    const films = [
        {
            id: 1,
            name: "Don't Look Up",
            title: "Don't Look Up",
            image: "assets/img/Dont-Look-Up.png",
            rating: 4.5,
            badge: ""
        },
        {
            id: 2,
            name: "Black Adam",
            title: "Black Adam",
            image: "assets/img/Black-Adam.png",
            rating: 4.2,
            badge: "Episode Baru"
        },
        {
            id: 3,
            name: "Stuart Litle",
            title: "Stuart Litle",
            image: "assets/img/Stuart-Litle.png",
            rating: 4.6,
            badge: "Top 10"
        },
        {
            id: 4,
            name: "The Devil All The Time",
            title: "The Devil All The Time",
            image: "assets/img/The-Devil-All-The-Time.png",
            rating: 4.4,
            badge: "Episode Baru"
        },

        {
            id: 5,
            name: "Alice In Borderland",
            title: "Alice In Borderland",
            image: "assets/img/Alice-In-Borderland.png",
            rating: 4.4,
            badge: ""
        },

        {
            id: 6,
            name: "Bokuno Hero Academya",
            title: "Bokuno Hero Academya",
            image: "assets/img/Bokuno-Hero-Academya.png",
            rating: 4.4,
            badge: "Episode Baru"
        },

        {
            id: 7,
            name: "Ant Man Quantumania",
            title: "Ant Man Quantumania",
            image: "assets/img/ANT-Man-Quantumania.png",
            rating: 4.4,
            badge: ""
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
                    className="absolute items-center top-4/8 sm:translate-y-2 md:translate-y-3 lg:translate-y-4 sm:left-5 sm:z-10 md:left-5 lg:left-10 text-center sm:text-2xl sm:text-white sm:bg-gray-800 sm:hover:bg-secondary sm:cursor-pointer sm:border-1 sm:border-gray-600 sm:rounded-full sm:px-2 sm:py-2 md:px-2 md:py-2 lg:px-3 lg:py-3"
                    aria-label="Previous"
                >
                    <PrevIcon className="w-7 h-7 text-white hidden sm:block md:block lg:block xl:block" />
                </button>

                <button
                    ref={nextRef}
                    className="absolute items-center top-4/8 sm:translate-y-2 md:translate-y-3 lg:translate-y-4 sm:right-5 md:right-5 lg:right-10 text-center sm:z-10 sm:text-2xl sm:text-white sm:bg-gray-800 sm:hover:bg-secondary sm:cursor-pointer sm:border-1 sm:border-gray-600 sm:rounded-full sm:px-2 sm:py-2 md:px-2 md:py-2 lg:px-3 lg:py-3"
                    aria-label="Next"
                >
                    <NextIcon className="w-7 h-7 text-white hidden sm:block md:block lg:block xl:block" />
                </button>
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1.2}
                        loop={true}
                        autoplay={!isMobile ? { delay: 3000 } : false}
                        breakpoints={{
                            375: { slidesPerView: 1.1 },
                            640: { slidesPerView: 1.4 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                        onBeforeInit={(swiper) => {
                            if (
                                swiper.params.navigation &&
                                typeof swiper.params.navigation !== "boolean"
                            ) {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }
                        }}
                        className="swipper-wrapper relative rounded-lg flex gap-4 w-full sm:overflow-x-hidden lg:overflow-x-hidden"
                    >
                        {films.map((RewatchItem) => (
                            <SwiperSlide key={RewatchItem.id}>
                                <CardFilmLandscape
                                    {...RewatchItem}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>


        </section>
    );
};

export default RewatchSection;
