import React, { useContext } from "react"
import { LanguageContext } from "../../Context/LanguageContext.jsx"

const LanguageSwapBtn: React.FC = () => {
  const languageContext = useContext(LanguageContext)
  const { language, setLanguage } = languageContext;
  
    return (language == "pt-br" 
    ? (

      <div className="absolute top-5 right-1 grayscale hover:grayscale-0">
        <button className=" rounded-full p-1">
          <img src="src/assets/img/flags/USA-flag.png" className="h-[30px] w-[30px]" onClick={() => setLanguage("en-us")}></img>
        </button>
        <i className="bi bi-repeat text-white relative text-xs right-4 bottom-1 cursor-pointer" onClick={() => setLanguage("en-us")}></i>
      </div>
      
    ) 
    : (
      <div className="absolute top-5 right-1 grayscale hover:grayscale-0">
        <button className=" rounded-full p-1" onClick={() => setLanguage("pt-br")}>
          <img src="src/assets/img/flags/Brazil-flag.png" className="h-[30px] w-[30px]"></img>
        </button>
        <i className="bi bi-repeat text-white relative text-xs right-4 bottom-1 cursor-pointer" onClick={() => setLanguage("en-us")}></i>
      </div>
    )
  )
}

export { LanguageSwapBtn }