import { useState, useEffect } from "react"


function Navbar({ dark, setDark, lang, setLang, open, setOpen }) {

useEffect(() => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav a");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${entry.target.id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach(section => observer.observe(section));

  return () => observer.disconnect();
}, []);

  


    return(

        <>
      
        <nav className={`nav ${dark ? "dark app" : "app"}`}>
        <div className="container">
            <div className="header">
                <span className="txt">DD.</span>
                <div id="list" className="menu-desktop">
                <ul>
  <li>
    <a href="#home">{lang === "ID" ? "Beranda" : "Home"}</a>
  </li>
  <li>
    <a href="#about">{lang === "ID" ? "Tentang" : "About"}</a>
  </li>
  <li>
    <a href="#projects">{lang === "ID" ? "Proyek" : "Projects"}</a>
  </li>
  <li>
    <a href="#contact">{lang === "ID" ? "Kontak" : "Contact"}</a>
  </li>
</ul>
                <div className="hr"></div>
                <div className="flex">
                <button className="lg"
          onClick={() => setLang(lang === "ID" ? "EN" : "ID")}
        >
          {lang}
        </button>

<button className="tp" onClick={() => setDark(!dark)}>
  {dark ? (
    // DARK MODE → TAMPIL MOON
   <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-4 h-4 ${dark ? "block" : "hidden"}`}
  >
    <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
  </svg>
  ) : (
    // LIGHT MODE → TAMPIL SUN
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-4 h-4 ${dark ? "hidden" : "block"}`}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
  )}
</button>

                </div>

                

                </div>

<button
              className="hamburger"
              onClick={() => setOpen(!open)}
            >
              <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
  className="lucide lucide-menu w-6 h-6"
>
  <path d="M4 5h16" />
  <path d="M4 12h16" />
  <path d="M4 19h16" />
</svg>

            </button>

            </div>
        </div>
      </nav>


{open && (
  <div className={`mobile-menu ${dark ? "dark" : ""}`}>
    {/* CLOSE */}
    <button className="close" onClick={() => setOpen(false)}>
      ✕
    </button>

    <ul>
      <li onClick={() => setOpen(false)}>
        <a href="#home">{lang === "ID" ? "Beranda" : "Home"}</a>
      </li>
      <li onClick={() => setOpen(false)}>
        <a href="#about">{lang === "ID" ? "Tentang" : "About"}</a>
      </li>
      <li onClick={() => setOpen(false)}>
        <a href="#projects">{lang === "ID" ? "Proyek" : "Project"}</a>
      </li>
      <li onClick={() => setOpen(false)}>
        <a href="#contact">{lang === "ID" ? "Kontak" : "Contact"}</a>
      </li>
    </ul>

    <div className="m"></div>

    <div className="mobile-actions">
      <button onClick={() => setLang(lang === "ID" ? "EN" : "ID")}>
        {lang}
      </button>

     <button className="tp" onClick={() => setDark(!dark)}>
  {dark ? (
    // DARK MODE → TAMPIL MOON
   <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-4 h-4 ${dark ? "block" : "hidden"}`}
  >
    <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
  </svg>
  ) : (
    // LIGHT MODE → TAMPIL SUN
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-4 h-4 ${dark ? "hidden" : "block"}`}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
  )}
</button>
    </div>
  </div>
)}

</>


    )

}





export default Navbar