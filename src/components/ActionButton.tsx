"use client";
import React from "react";
import Image from "next/image";
import { ActionButtonProps } from "../types";

const ActionButton = ({
  disabled,
  handleClick,
  title,
  containerStyles,
  btnType,
}: ActionButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}>
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default ActionButton;
