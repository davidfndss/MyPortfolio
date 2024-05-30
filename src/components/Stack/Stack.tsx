import React, { useContext } from "react"
import { StaticIcon } from "../StaticIcon/StaticIcon.jsx"
import { LanguageContext } from "../../Context/LanguageContext.js"

const Stack: React.FC = () => {
  
    const languageContext = useContext(LanguageContext)
    const { language } = languageContext;

    const ptBrArray = ["TECNOLOGIAS"]
    const enUsArray = ["TECH STACK"]

    const languageArray = language == "pt-br" ? ptBrArray : enUsArray  

  
  const stackList = ["typescript","react","nodejs","tailwindcss","express","mongodb","git","github","bootstrap","javascript","html5","css3"]

  return (
    <section className="w-full text-white bg-gradient-bg3 p-6 flex flex-col justify-center items-center font-montserrat">
      <h1 className="p-4 text-2xl font-bold sm:text-3xl">{languageArray[0]}</h1>
      <div className="p-2 grid grid-cols-3 gap-3 mt-4">
        { 
          stackList.map((name) => {
            return (<StaticIcon key={stackList.indexOf(name)} name={name}/>)
          })
        }

      </div>
    </section>
  )
}

export { Stack }