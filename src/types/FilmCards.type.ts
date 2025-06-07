import {SVGProps } from "react";

export interface FilmCards {
  name : string;
  title: string;
  image: string;
  badge?: string;
  rating?: number;
  icon?: React.FC<SVGProps<SVGSVGElement>>;

}
