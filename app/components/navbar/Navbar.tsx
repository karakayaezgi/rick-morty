"use client"

import Image from "next/image"
import { Dispatch, SetStateAction } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

interface NavbarProps {
    isOpenModal: boolean,
    setIsOpenModal: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({isOpenModal, setIsOpenModal} : NavbarProps) => {


    const toggleMenu = () => {
        setIsOpenModal(prev => !prev)
    }


  return (
    <div className="flex items-center justify-between z-50 bg-white shadow-md py-2 px-4">
      <Image width={46} height={49} src={'/images/logo-black.png'} alt="logo" />
      {
        isOpenModal 
        ? <IoMdClose onClick={toggleMenu} className="text-gray-500 text-2xl"/> 
        : <GiHamburgerMenu onClick={toggleMenu} className="text-gray-500 text-2xl"/>
      }
    </div>
  )
}

export default Navbar
