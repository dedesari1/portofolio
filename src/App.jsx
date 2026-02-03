import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Dashboard from "./Dashboard"

function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark"
  })

  const [lang, setLang] = useState("ID")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light")
  }, [dark])

  return (
    <div className={dark ? "dark" : ""}>
      <Navbar dark={dark} setDark={setDark} lang={lang} setLang={setLang} open={open} setOpen={setOpen} />
      <Dashboard dark={dark} setDark={setDark} lang={lang} setLang={setLang} open={open} setOpen={setOpen} />
    </div>
  )
}

export default App
