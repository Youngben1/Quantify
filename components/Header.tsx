"use client"

import {twMerge} from "tailwind-merge"
import { useRouter } from "next/navigation";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";

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
        <div className="flexmd:hidden gap-x-2 items-center">
          <button className="rounded-full flex items-center justify-center hover:opacity-75 transition p-2">
            <HiHome size={20} className="text-black" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header