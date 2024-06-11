import React, { useContext } from "react"
import { Coding } from "../../assets/emojis/Coding.jsx"
import { Kimono } from "../../assets/emojis/Kimono.jsx"
import { Camera } from "../../assets/emojis/Camera.jsx"
import { LanguageContext } from "../../Context/LanguageContext.js"


const AboutMe: React.FC = () => {
    const languageContext = useContext(LanguageContext)
    const { language } = languageContext;

    const ptBrArray = ["ALÉM DO CÓDIGO", "Aprendi a programar de maneira autodidata e desde então tenho estudado todos os dias","Gosto de academia, e também sou atleta de Jiu-Jitsu, dou aulas no projeto social da minha igreja","Faço vídeos para internet, com conteúdo motivacional, posto nos reels do ", "meu instagram", "DISPONÍVEL"]
    const enUsArray = ["BESIDES THE CODE","I learned to code on my own, and since then, I've been studying every day","I love the gym, and I'm also a Brazillian Jiu Jitsu athlete, I teach classes at a social project in my church", "I like to record motivational videos for the internet, I post the videos on ","my instagram", "AVAILABLE"]

    const languageArray = language == "pt-br" ? ptBrArray : enUsArray  

  
  return (
    <section className="w-full text-white bg-gradient-bg2 p-6 flex flex-col justify-center items-center font-montserrat font-bold">
      <h1 className="p-4 text-2xl">{languageArray[0]}</h1>

      <div className="max-w-[204px] max-h-[204px]">
        <img src="src/assets/img/me.png" className="w-[200px] w-[200px] rounded-full mb-4 shadow-xl"></img>

        <h2 className="p-3 bg-zinc-800 rounded-xl inline relative top-[-50px] shadow-xl right-[-30px]">{languageArray[5]} <i className="bi bi-toggle-on text-green-500"></i></h2>
        <i className="bi bi-globe-americas p-2 bg-zinc-800 rounded-xl relative top-[-140px] left-[28px] text-3xl shadow-xl text-blue-500"></i>  
        <i className="bi bi-lightning-charge-fill p-2 bg-zinc-800 rounded-xl relative top-[-140px] left-[-15px] text-3xl shadow-xl text-yellow-400"></i> 
        <i className="bi bi-code-slash p-2 bg-zinc-800 rounded-xl relative top-[-240px] left-[-40px] text-3xl shadow-xl text-green-400"></i> 
      </div>
      
      <div className="w-full grid grid-cols-10 gap-y-4 items-end p-2 mt-2">
        <p className="text-sm leading-tight col-span-9 md:text-lg">{languageArray[1]}
          </p><Coding />
          <p className="text-sm leading-tight col-span-9 md:text-lg">
          {languageArray[2]}
          </p><Kimono />
          <p className="text-sm leading-tight col-span-9 md:text-lg">
          {languageArray[3]} <a className="text-c1" href="https://instagram.com/davidfndss" target="_blank">{languageArray[4]}</a> 
          </p><Camera />
      </div>
    </section>
  )
}

export { AboutMe }