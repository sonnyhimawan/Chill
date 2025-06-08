import { FC } from "react";
import { FilmCards } from "../../../types/FilmCards.type";


const CardFilmPotrait: FC<FilmCards> = ({title,image,badge}) => {
    return (

       <div className="relative swiper-slide rounded-lg">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                {(badge && 
                <div
                  className="absolute top-0 bg-primary px-4 py-1 sm:px-4 sm:py-2 rounded-full m-3 sm:mt-4 sm:ml-4 md:mt-4 md:ml-4 lg:mt-5 lg:ml-5"
                >
                  <span
                    className="text-white font-myfont text-sm sm:text-sm md:text-lg lg:text-1xl font-medium">{badge}</span>
                </div>

                )}
              </div>
    );
};

export default CardFilmPotrait;
