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


const CardFilmLandscape: FC<FilmCards> = ({ name, title, image, icon: Icon, rating, badge }) => {
  return (

    <div className="relative rounded-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-full rounded-lg object-cover"
      />
      <div
        className="absolute bottom-0 flex w-full mr-auto p-4 sm:p-4 md:p-4 lg:p-6 rounded-b-lg">
        <h1
          className="items-center mr-auto font-myfont text-white text-1xl sm:text-1xl md:text-1xl lg:text-1xl font-bold truncate"
        >
          {name}
        </h1>
        <span
          className="flex items-center font-myfont gap-2 text-white text-lg font-normal"
        >{Icon && <Icon />}{rating}</span>
      </div>

      {badge && (
        <div
          className={getBadges(badge)}>
          <span
            className="flex text-center text-white font-myfont text-sm sm:text-sm md:text-lg lg:text-1xl font-medium"
          >
            {badge === "Top 10" ? (
              <>
                Top<br/>10
              </>
            ) : (
              badge
            )}
          </span>
        </div>
      )}

    </div>


  );
};

export default CardFilmLandscape;
