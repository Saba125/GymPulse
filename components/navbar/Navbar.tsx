"use client";
import { useState } from "react";
import Container from "../Container";
import Logo from "./Logo";
import SignIn from "./SignIn";
import { cn } from "@/lib/utils";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="  w-full border-b py-6 shadow-sm ">
      <Container>
        <nav
          className="
        flex
        items-center
        justify-between
        "
        >
          <div className="   flex flex-row items-center   gap-8">
            <Logo />
            <div className="hidden flex-row gap-8 md:flex">
              <p className="cursor-pointer text-base transition hover:text-rose-500 ">
                Home
              </p>
              <p className="cursor-pointer text-base transition hover:text-rose-500 ">
                {" "}
                Benefits
              </p>
              <p className="cursor-pointer text-base transition hover:text-rose-500 ">
                {" "}
                Our classes
              </p>
              <p className="cursor-pointer text-base transition hover:text-rose-500 ">
                {" "}
                Contact us
              </p>
            </div>
          </div>

          <div className="hidden md:block">
            <SignIn />
          </div>
          <div
            onClick={() => setIsNavOpen((prevState) => !prevState)}
            className=" z-20 cursor-pointer  rounded-full  bg-[#FFC132] p-2  transition  hover:bg-[#FDB42CFF]    md:hidden"
          >
            {isNavOpen ? (
              <AiOutlineClose className="h-5 w-5" />
            ) : (
              <AiOutlineMenu className="h-5 w-5" />
            )}
          </div>
        </nav>
      </Container>
      {isNavOpen && (
        <div className="fixed right-0 top-0 z-10 flex  h-full w-64 flex-col   items-center justify-center bg-[#FFE1E0] drop-shadow-xl    transition ">
          <div className="space-y-3 text-2xl">
            <p className="cursor-pointer  transition hover:text-rose-500 ">
              Home
            </p>
            <p className="cursor-pointer  transition hover:text-rose-500 ">
              {" "}
              Benefits
            </p>
            <p className="cursor-pointer  transition hover:text-rose-500 ">
              {" "}
              Our classes
            </p>
            <p className="cursor-pointer  transition hover:text-rose-500 ">
              {" "}
              Contact us
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
