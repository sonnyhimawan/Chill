import { FC } from "react";
import { FilmCards } from "../../../types/FilmCards.type";





const getBadges = (badge?: string): string => {

  if (badge === "Top 10") {
    return "absolute top-0 right-2 sm:right-4 md:right-4 lg:right-6 bg-red-700 p-2 rounded-bl-sm rounded-tr-sm sm:rounded-bl-md sm:rounded-tr-md lg:rounded-bl-lg lg:rounded-tr-lg";
  } else if (badge === "Episode Baru") {
    return "absolute top-0 bg-primary px-4 py-1 sm:px-4 sm:py-2 rounded-full m-3 sm:mt-4 sm:ml-4 md:mt-4 md:ml-4 lg:mt-5 lg:ml-5";
  } else {
    return "hidden";
  }
};


const CardFilmPotrait: FC<FilmCards> = ({ title, image, badge }) => {
  return (

    <div className="relative swiper-slide rounded-lg">
      <div className="overflow-hidden rounded-lg ">
        <img
          src={image}
          alt={title}
          className="w-full h-full rounded-lg object-cover transition-all duration-300 hover:scale-110"
        />
      </div>
      <div
        className={getBadges(badge)}>
        <span
          className="flex text-center text-white font-myfont text-sm sm:text-sm md:text-lg lg:text-1xl font-medium"
        >
          {badge === "Top 10" ? (
            <>
              Top<br />10
            </>
          ) : (
            badge
          )}
        </span>
      </div>
    </div>



  );
};

export default CardFilmPotrait;
