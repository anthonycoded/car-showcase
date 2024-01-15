import React from "react";
import Link from "next/link";
import Image from "next/image";
import ActionButton from "./ActionButton";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="w-full absolute z-10">
      <nav
        style={{
          padding: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 1440,
        }}
        className="max-w-[1440px] mx-auto  w-full flex flex-row justify-between items-center sm:px-16 px-6 py-4">
        <Link href={"/"} className="flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <ActionButton
          title="Sign In"
          disabled={false}
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
