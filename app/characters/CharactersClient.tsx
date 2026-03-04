"use client"
import { useState } from "react"
import SearchInput from "../components/search/SearchInput"

const CharactersClient = () => {

    const [search, setSearch] = useState('')


  return (
    <div>
      <SearchInput placeholder="Filter by name..." value={search} onChange={setSearch}/>
    </div>
  )
}

export default CharactersClient
