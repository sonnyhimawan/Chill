import { FC } from "react";
import { FilmCards } from "../../../types/FilmCards.type";


const TopCardFilmPotrait: FC<FilmCards> = ({title,image,badge}) => {
    return (

     <div className="relative swiper-slide rounded-lg">
                <img
                  src={image}
                  alt={title}
                  className="w-full object-cover"
                />

                {badge && (
                <div
                  className="absolute top-0 right-2 sm:right-4 md:right-4 lg:right-6 bg-red-700 p-2 rounded-bl-sm rounded-tr-sm sm:rounded-bl-md sm:rounded-tr-md lg:rounded-bl-lg lg:rounded-tr-lg"
                >
                  <span
                    className="block text-center font-myfont text-white text-sm sm:text-sm md:text-lg lg:text-1xl font-medium"
                    >Top<br />{badge}</span>
                </div>
                )}
              </div>
    );
};

export default TopCardFilmPotrait;
