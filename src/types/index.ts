import { MouseEventHandler } from "react";
export interface ActionButtonProps {
  disabled: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit";
  textStyles: string;
  rightIcon: string;
}
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number; //
  class: string; //"compact car"
  combination_mpg: number; //24
  cylinders: number; //4
  displacement: number; //1.6
  drive: string; //""fwd"
  fuel_type: string; //""gas"
  highway_mpg: number; //26
  make: string; //""toyota"
  model: string; //""corolla"
  transmission: string; //""a"
  year: number; //1993
}
