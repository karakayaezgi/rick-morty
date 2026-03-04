"use client"

import Link from "next/link"



const Menu = () => {
  return (
    <div className="bg-white py-15 absolute gap-10 flex flex-col items-center justify-start inset-0">
      <strong className="tracking-wide text-xl">Characters</strong>
      <strong className="tracking-wide text-xl">Locations</strong>
      <strong className="tracking-wide text-xl">Episodes</strong>
    </div>
  )
}

export default Menu
