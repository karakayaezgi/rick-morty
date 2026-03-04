"use client"
import { SearhInputProps } from "@/app/types/search"
import { IoIosSearch } from "react-icons/io";

const SearchInput = ({placeholder, value, onChange} : SearhInputProps) => {
  return (
    <div className="border flex items-center gap-2 border-gray-400 p-2 rounded-md">
      <IoIosSearch className="text-xl text-gray-400"/>
      <input 
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="outline-0 flex-1"
      />
    </div>
  )
}

export default SearchInput
