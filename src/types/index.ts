import { MouseEventHandler } from "react";
export interface ActionButtonProps {
  disabled: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit";
}
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
