"use client"

import {twMerge} from "tailwind-merge"
import { useRouter } from "next/navigation";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import {BiSearch} from "react-icons/bi"
import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({children, className}) => {
  const router = useRouter();

  const handleLogout = () => {
    // Handle logout later
  }

  return (
    <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className)}>
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
            <RxCaretLeft size={35} className="text-white" onClick={() => router.back()} />
          </button>
          <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
            <RxCaretRight size={35} className="text-white" onClick={() => router.forward()} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full flex items-center justify-center hover:opacity-75 transition p-2">
            <HiHome size={20} className="text-white" />
          </button>
          <button className="rounded-full flex items-center justify-center hover:opacity-75 transition p-2">
            <BiSearch size={20} className="text-white" />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button onClick={() => {}} className="font-medium bg-transparent text-neutral-300">
                Sign Up
              </Button>
            </div>
            <div>
              <Button onClick={() => {}} className="px-6 py-2 bg-white">
                Login
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Header