"use client"
import { ReactNode, useState } from "react"
import Navbar from "../navbar/Navbar"
import Menu from "../menu/Menu"

type ProviderProps = {
    children: ReactNode
}

const Provider = ({children}: ProviderProps) => {

    const [isOpenModal, setIsOpenModal] = useState(false)

    


  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
      <main className="flex-1 relative">
        {children}
        {
        isOpenModal && <Menu />
        }
      </main>
      
    </div>
  )
}

export default Provider
