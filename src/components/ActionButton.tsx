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
  textStyles,
  rightIcon,
}: ActionButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}>
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="right icon" fill objectFit="contain" />
        </div>
      )}
    </button>
  );
};

export default ActionButton;
