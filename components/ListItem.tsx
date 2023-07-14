"use client"

import Image from "next/image";
import { useRouter } from "next/navigation"
import {FaPlay} from "react-icons/fa"

interface ListItemProps {
    image: string;
    name: string;
    href: string;
}

const ListItem: React.FC<ListItemProps> = ({image, name, href}) => {
    const router = useRouter();

    const onClick = () => {
        // add auth for this
        router.push(href)
    }

  return (
    <button onClick={onClick} className="relative items-center rounded-md group flex gap-x-4 overflow-hidden bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
        <div className="relative min-h-[64px] min-w-[64px] ">
            <Image className="object-cover" fill src={image} alt="Image" />
        </div>
        <p>{name}</p>
        <div className="absolute p-4 rounded-full opacity-0 justify-center items-center flex transition bg-green-500 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110 ">
            <FaPlay className="text-white" onClick={() => {}} />
        </div>
    </button>
  )
}

export default ListItem