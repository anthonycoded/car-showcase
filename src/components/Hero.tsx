"use client";

import React from "react";
import Image from "next/image";
import ActionButton from "./ActionButton";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero-title">
          Find, book, or rent a car - quickly and easily
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <ActionButton
          disabled={false}
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
        />
      </div>

      <div className="hero__image-container" style={{ width: "90%" }}>
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
