import React, { useState } from "react"
import './index.css'
import { Header } from "./components/Header/Header.jsx"
import { Projects } from "./components/Projects/Projects.jsx"
import { Footer } from "./components/Footer/Footer.jsx"
import { Stack } from "./components/Stack/Stack.jsx"
import { AboutMe } from "./components/AboutMe/AboutMe.jsx"
import { LanguageProvider } from "./Context/LanguageContext"

const App: React.FC = () => {
  
  return (
    <LanguageProvider>
      <Header />
      <Projects />
      <Stack />
      <section className="flex flex-col sm:flex-row">
        <AboutMe />
      </section>
      <Footer />
    </LanguageProvider>
  )
}

export default App
