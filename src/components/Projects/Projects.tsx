import React, { useContext } from "react";
import { Card } from "../Card/Card.jsx"
import { LanguageContext } from "../../Context/LanguageContext.js"

const Projects: React.FC = () => {
  const languageContext = useContext(LanguageContext)
  const { language } = languageContext;

  const ptBrArray = ["<MEUS PROJETOS/>"]
  const enUsArray = ["<MY PROJECTS/>"]

  const languageArray = language == "pt-br" ? ptBrArray : enUsArray  
  
  return (
      <section className="bg-black text-white p-10 min-h-screen flex flex-col items-center justify-center">
        <div className="py-2 sticky top-0 mt-6 flex justify-center items-center bg-black w-full text-white shadow-md mb-4" style={{zIndex: 2}}>
          <img src="/img/icons/knight-white.png" className="h-[25px] w-[25px] sm:h-[30px] sm:w-[30px]"></img>
          <h1 className="font-bold text-xl text-center min-w-[200px] sm:text-3xl">{languageArray[0]}</h1>
          <img src="/img/icons/knight-white.png" className="flip-h h-[25px] w-[25px] mr-1 sm:h-[30px] sm:w-[30px]" style={{transform: "scaleX(-1)"}}></img>
        </div>
        
        <article className="grid justify-center items-center gap-5 md:grid-cols-3">
          <Card title="NewsParrot" description="Projeto realizado em 2023 para estudo de uso das Tecnologias usadas" tags={[
          {
            name: "React",
            color: "darkTurquoise"
          },
          {
            name: "NodeJs",
            color: "green"
          },
          {
            name: "MongoDB",
            color: "greenYellow"
          }
          ]} />
          <Card title="HelloWorld" description="Projeto realizado em 2023 para estudo de uso das Tecnologias usadas" tags={[
              {
                name: "React",
                color: "darkTurquoise"
              },
              {
                name: "NodeJs",
                color: "green"
              },
              {
                name: "MongoDB",
                color: "greenYellow"
              }
          ]} />
          <Card title="JustDoIt" description="Projeto realizado em 2023 para estudo de uso das Tecnologias usadas" tags={[
              {
                name: "JavaScript",
                color: "yellow"
              },
              {
                name: "HTML",
                color: "orange"
              },
              {
                name: "CSS",
                color: "blue"
              }
            ]} />
        </article>
      </section>  
  )
}

export { Projects }