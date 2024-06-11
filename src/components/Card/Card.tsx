import React, { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext.js"


interface Tag {
  name: string;
  color: string;
}

interface CardProps {
  title: string;
  description: string;
  link?: string;
  tags?: Array<Tag>;
}

const Card: React.FC<CardProps> = ({title, description, link, tags}) => {
    const languageContext = useContext(LanguageContext)
    const { language } = languageContext;

    const ptBrArray = ["TESTAR"]
    const enUsArray = ["TEST"]

    const languageArray = language == "pt-br" ? ptBrArray : enUsArray  
  
  return (
    <div className="w-[90%] text-center border border-2 border-zinc-850 p-4 rounded bg-zinc-900 flex flex-col items-center font-antom cardAnimation m-auto md:w-full">
      <img className="rounded" src="src/assets/img/notebookncellphonemock.jpg"></img>
      <h1 className="p-2 text-xl sm:text-2xl font-monserrat font-bold">{title}</h1>
      <p className="text-sm sm:text-md">{description} </p>  
      {
        tags ? (

          <div className="flex gap-1 mt-2 hidden md:flex">
            {
              tags.map((tag: Tag) => {
              return (
                <span key={tags.indexOf(tag)} className={`rounded-full border border-2 text-xxs px-3 font-montserrat font-bold opacity-80`} style={{ color: tag.color, borderColor: tag.color}}>
                  {tag.name}
                </span>
              )
              })
            }
          </div>
        ) 
        : null
      }
      <div className="flex gap-1 h-[40px] mt-3">
        <a href={link ? link : "https://google.com"} target="_blank">
          <button className="rounded px-2 py-2 text-white flex items-center bg-slate-800 hoverBtn h-full"><i className="bi bi-github text-2xl"></i></button>
        </a>
        <a href={link ? link : "https://google.com"} target="_blank">
          <button className="rounded px-4 py-2 text-sm font-montserrat font-bold flex items-center bg-yellow-400 text-black hoverBtn h-full">{languageArray[0]}<i className="bi bi-box-arrow-up-right text-xs ml-1 pb-0.5"></i></button>
        </a>
      </div>
    </div>
  )
}

export { Card }