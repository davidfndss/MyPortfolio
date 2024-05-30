import React, { useContext } from "react"
import { LanguageContext } from "../../Context/LanguageContext.js"


const Footer: React.FC = () => {
  const languageContext = useContext(LanguageContext)
  const { language } = languageContext;

  const ptBrArray = ["PRECISANDO DE UM ", "DESENVOLVEDOR WEB", "VAMOS TRABALHAR JUNTOS!", "ENVIAR E-MAIL", "OU", "ENVIAR MENSAGEM"]
  const enUsArray = ["LOOKING FOR A ", "WEB DEVELOPER", "LET'S WORK TOGETHER!", "SEND E-MAIL", "OR", "SEND MESSAGE"]

  const languageArray = language == "pt-br" ? ptBrArray : enUsArray  
  
  return (
    <footer className="w-full flex flex-col justify-center items-center bg-zinc-800 py-8 font-antom text-white px-4">
      <h2 className="text-xs md:text-[13px] lg:text-lg">{languageArray[0]}<span className="text-yellow-400">{languageArray[1]}</span>?</h2>
      <h1 className="pb-2 text-lg font-bold md:text-xl lg:text-3xl">{languageArray[2]}</h1>
      <a href="https://api.whatsapp.com/send?phone=5561985391185&text=Olá" target="_blank">
        <button className="w-[210px] py-3 bg-yellow-500  flex justify-center items-center rounded mt-1 text-xs cursor-pointer font-bold hoverBtn md:text-[16px]  hover:text-yellow-300">
           <i className="bi bi-envelope pr-3 text-xl md:pr-2"></i>
          {languageArray[3]}
        </button>
      </a>
      <h1 className="mt-1 font-bold text-sm md:text-[14px]">{languageArray[4]}</h1>
      <a href="https://api.whatsapp.com/send?phone=5561985391185&text=Olá" target="_blank">
        <button className="w-[210px] py-3 bg-green-600  flex justify-center items-center rounded mt-1 text-xs cursor-pointer font-bold hoverBtn md:text-[16px] hover:text-green-500">
           <i className="bi bi-whatsapp pr-3 text-xl md:pr-2"></i>
          {languageArray[5]}
        </button>
      </a>
    </footer>
  )
}

export { Footer }
