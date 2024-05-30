import React, { useContext } from "react"
import { LanguageContext } from "../../Context/LanguageContext.js"
import { LanguageSwapBtn } from "../Buttons/LanguageSwapBtn.js"
import { FloatingIcon } from "../FloatingIcon/FloatingIcon.jsx"


const Header: React.FC = () => {
  const languageContext = useContext(LanguageContext)
  const { language } = languageContext;

  const ptBrArray = ["OI 👋 EU SOU O DAVID", "ESTUDO DESENVOLVIMENTO FULL STACK 1 ANO", "CRIO INTERFACES BONITAS E EFICIENTES", "TENHO 21 ANOS"]
  const enUsArray = ["HELLO! 👋 I'M DAVID", "I'VE BEEN STUDYING FULL STACK DEVELOPMENT FOR 1 YEAR", "I BUILD BEAUTIFUL AND EFFICIENT INTERFACES", "I'M 21 YEARS OLD"]

  const languageArray = language == "pt-br" ? ptBrArray : enUsArray  
  
  return (
      <main className="w-full flex-col justify-center">
        {/* Floating Icons */}
        <FloatingIcon name="typescript" top="80vh" left="80vw" rotate="-20deg"/>
        <FloatingIcon name="react" top="20vh" left="70vw" rotate="20deg" />
        <FloatingIcon name="tailwind" top="10vh" left="10vw" rotate="0deg" />
        <FloatingIcon name="node" top="70vh" left="20vw" rotate="40deg"
/>
        
        {/*Language swap btn*/}
          <LanguageSwapBtn />
        
        <section className="w-full h-screen flex flex-col items-center justify-center text-white bg-gradient-bg3">
          <article>
            <h4 className="w-full font-bold text-c2 text-xxs sm:text-sm md:text-lg">{languageArray[0]}</h4>
            <div className="flex flex-row justify-start items-end">
              <h1 className="font-montserrat font-bold leading-none text-5xl sm:text-xxl md:text-2xxl">{`<WEB/>`}</h1>
              <div className="flex h-full flex-row text-c1 text-xl max-h-[40px] items-end sm:text-4xl sm:gap-2 sm:max-h-[80px] md:text-5xl md:">
                  <a href="https://github.com/davidfndss" target="_blank" className="iconAnimation"><i className="bi bi-github p-1 cursor-pointer"></i></a>
                  <a href="https://www.linkedin.com/in/davidfndss/" target="_blank" className="iconAnimation"><i className="bi bi-linkedin p-1 cursor-pointer"></i> </a>
                  <a href="/curriculum/curriculum/David-curriculum.pdf" target="_blank" download="Currículo David Silva Fernandes" className="iconAnimation"><i className="bi bi-download p-1 cursor-pointer"></i></a> 
              </div>

            </div>
            <h1 className="font-montserrat font-bold leading-none tracking-tight text-5xl sm:text-xxl md:text-2xxl">
              DEVELOPER
            </h1>
            <p className="text-right font-bold text-xxs text-c2 leading-tight sm:text-sm md:text-lg">{languageArray[1]}<br></br>{languageArray[2]}<br></br>{languageArray[3]}</p>
          </article>
        </section>
      </main>
  )
}

export { Header }