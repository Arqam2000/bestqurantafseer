// import React, { useState } from 'react'
// import tableData from './surahs'

// const useFilteredData = () => {

//   if (!search) {
//     return []
//   }
//   console.log("You have typed", search)
//   const filteredData = tableData.filter(surah => surah[1].toLowerCase().replace("al", "").replace("-", "").includes(search))
//   console.log("filteredData", filteredData)
//   return {filteredData, setSearchValue, search}
// }

// export default useFilteredData


import { createContext, useState } from "react";

export const DataContext = createContext()

export const DataProvider = ({children}) => {
  const [filteredSurahs, setFilteredSurahs] = useState([]) 

  return (
    <DataContext.Provider value={{filteredSurahs, setFilteredSurahs}}>
      {children}
    </DataContext.Provider>
  )
}