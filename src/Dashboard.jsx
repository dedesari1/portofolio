import { useState } from "react";
import DD from "./assets/img/dd.jpeg";
import img1 from "./assets/img/img1.png";
import img2 from "./assets/img/img2.png";
import img3 from "./assets/img/img3.png";



function Dashboard({ dark, lang }) {

const INITIAL_COUNT = 3;
const LOAD_MORE = 3;

const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);


    const projects = [
  {
    img: img1,
    title: "Landing Page Promosi Digital",
    desc: "Halaman promosi satu halaman untuk mendukung kampanye iklan dan pemasaran online.",
    tools: ["HTML", "CSS", "Javascript", "Bootstrap"],
  },
  {
    img: img2,
    title: "Sistem Absensi",
    desc: "Aplikasi web untuk pencatatan kehadiran karyawan secara digital.",
    tools: ["Codeigniter", "MySQL", "PHP", "Bootstrap", "Javascript"],
  },
  {
    img: img3,
    title: "Landing Page Promosi Digital",
    desc: "Halaman promosi satu halaman untuk mendukung kampanye iklan dan pemasaran online.",
    tools: ["HTML", "CSS", "Javascript", "Bootstrap"],
  },
  {
    img: img3,
    title: "Landing Page Promosi Digital",
    desc: "Halaman promosi satu halaman untuk mendukung kampanye iklan dan pemasaran online.",
    tools: ["HTML", "CSS", "Javascript", "Bootstrap"],
  },
  {
    img: img3,
    title: "Landing Page Promosi Digital",
    desc: "Halaman promosi satu halaman untuk mendukung kampanye iklan dan pemasaran online.",
    tools: ["HTML", "CSS", "Javascript", "Bootstrap"],
  },
  {
    img: img3,
    title: "Landing Page Promosi Digital",
    desc: "Halaman promosi satu halaman untuk mendukung kampanye iklan dan pemasaran online.",
    tools: ["HTML", "CSS", "Javascript", "Bootstrap"],
  },
  // tambahin project lain di sini
];

    

    return (
        <div className={dark ? "dark app" : "app"}>


        <section className="dashboard" id="home">
        <div className="container">
            <div className="craud"></div>
            <div className="cradud"></div>
        <div className="flex-dashboard">
            <div className="textDevelop">
                <div className="flex-txt">
                <div className="ri"></div>
                <span>WEB DEVELOPER</span>
                </div>
                <div className="flex-txt2">
                <span className="sp1">Hello, I'm</span>
                <span className="sp2">Dede Sariningsih.</span>
                </div>
                        <span
            className="db"
            >
            {lang === "ID"
                ? "Menggabungkan logika teknis dan kreativitas desain untuk menciptakan produk digital yang berdampak."
                : "Combining technical logic and design creativity to create impactful digital products."}
            </span>

                <div className="flex-button">
                    <a href="#projects" className="btn1">
                        <span>{lang == "ID" ? "Lihat Karya" : "View Works"}</span>
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
                    className="lucide lucide-arrow-down w-4 h-4"
                    >
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                    </svg>

                    </a>
                    <button className="btn2">
                        <span>{lang == "ID" ? "Unduh CV" : "Download CV"}</span>
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
                className="lucide lucide-download w-4 h-4 group-hover:animate-bounce"
                >
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
                </svg>

                        </button>
                </div>
            </div>
            <div className="imgDevelop">
                <img src={DD} />
            </div>
        </div>
        </div>
        </section>


<section id="about" className="about">
    <div className="container">
        <h2 className="title-about">{lang == "ID" ? "Tentang Saya" : "About Me"}</h2>
        <p className="text-about">
        {lang == "ID" ? 
        "Profesional dengan pengalaman kuat dalam pengembangan aplikasi web dan manajemen database. Berfokus pada pembuatan sistem yang cepat, scalable, dan stabil. Terbiasa mengelola proyek IT secara end-to-end, mengoptimalkan performa aplikasi, serta menerjemahkan kebutuhan bisnis menjadi solusi digital yang fungsional dan berdampak. Antusias berkembang di lingkungan dinamis dan senang memecahkan masalah nyata melalui teknologi." 
        : 
        "A professional with strong experience in web application development and database management. Focused on building fast, scalable, and stable systems. Experienced in managing end-to-end IT projects, optimizing application performance, and translating business requirements into functional and impactful digital solutions. Enthusiastically thrives in dynamic environments and enjoys solving real-world problems through technology."
        }
        </p>
        <div className="card-bg">
        <div className="card">
            <span className="t1">4+</span>
            <span className="t2">{lang == "ID" ? "Tahun Pengalaman" : "Years Experience"}</span>
        </div>
        </div>
        <div className="teknis">
            <span className="kt1">{lang == "ID" ? "Keahlian Teknis" : "Technical Skills"}</span>
            <div className="skils">
                <div className="skil-pil">
                            <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
                    alt="HTML5 icon" 
                    />
                    <span>HTML5</span>
                            </div>
                            <div className="skil-pil">
                            <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
                alt="CSS3 icon" 
                />
                <span>CSS3</span>
                            </div>
                            <div className="skil-pil">
                                <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" 
            alt="Bootstrap icon" 
            />
            <span>Bootstrap</span>
                            </div>
                            <div className="skil-pil">
                                <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
            alt="Tailwind icon" 
            />
            <span>Tailwind</span>
                            </div>
                            <div className="skil-pil">
                                <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
            alt="Javascript icon" 
            />
            <span>Javascript</span>
                            </div>
                            <div className="skil-pil">
                                <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" 
            alt="PHP icon" 
            />
            <span>PHP</span>
                            </div>
                            <div className="skil-pil">
                                <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
            alt="MySQL icon" 
            />
            <span>MySQL</span>
                            </div>
                            <div className="skil-pil">
                                <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
            alt="Git icon" 
            />
            <span>Git</span>
                            </div>
                            <div className="skil-pil">
                                <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" 
            alt="WordPress icon" 
            />
            <span>WordPress</span>
                            </div>
                            <div className="skil-pil">
                                <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" 
            alt="Laravel icon" 
            />
            <span>Laravel</span>
                            </div>
                            <div className="skil-pil">
                                <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
            alt="React icon" 
            />
            <span>React JS</span>
                </div>
                <div className="skil-pil">
                <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" 
            alt="Codeigniter icon" 
            />
            <span>Codeigniter</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


<section id="projects" className="projects">
    <div className="container">
    <h2 className="title-project">{lang === "ID" ? "Proyek" : "Projects"}</h2>
    <p className="subtitle-project">
  {lang === "ID"
    ? "Beberapa proyek yang pernah saya kerjakan, berfokus pada fungsionalitas, performa, dan pengalaman pengguna."
    : "A selection of projects I have worked on, focusing on functionality, performance, and user experience."}
    </p>
    

    <div className="project-grid">
  {projects.slice(0, visibleCount).map((item, index) => (
    <div className="project-card" key={index}>
      <img src={item.img} />
      <div className="text-card">
        <span className="txt-projek1">{item.title}</span>
        <span className="txt-projek2">{item.desc}</span>

        <div className="tools-flex">
          <div className="tools">
            {item.tools.map((tool, i) => (
              <div className="tools-txt" key={i}>{tool}</div>
            ))}
          </div>

          <div className="round">
            {<svg
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
  className="lucide lucide-arrow-up-right w-3 h-3"
>
  <path d="M7 7h10v10" />
  <path d="M7 17 17 7" />
</svg>
}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

<div className="button-more">
  <button
    onClick={() => {
      if (visibleCount >= projects.length) {
        setVisibleCount(INITIAL_COUNT); // muat lebih sedikit
      } else {
        setVisibleCount((prev) =>
          Math.min(prev + LOAD_MORE, projects.length)
        ); // muat lebih banyak
      }
    }}
  >
    <span>
      {visibleCount >= projects.length
        ? "Muat Lebih Sedikit"
        : "Muat Lebih Banyak"}
    </span>
  </button>
</div>



    </div>

</section>




<section className="contact" id="contact">
    <div className="container">
    <div className="title-contact">
  {lang === "ID" ? (
    <>
      Mari <span className="txt-ch">Berkolaborasi.</span>
    </>
  ) : (
    <>
    Let's Work <span className="txt-ch">Together</span>
    </>
  )}
</div>
<p className="text-contact">{lang === "ID" ? "Ceritakan ide Anda, saya siap mewujudkannya." : "Tell me your idea, let's make it happen."}</p>

<div className="wd-contact">

<form action="https://formspree.io/f/mdadbzyy" method="POST">
<div className="contact-card">
  <div className="flex-contact">
  <input type="text" name="namaLengkap" id="namaLengkap" placeholder="Nama Lengkap" autoComplete="namaLengkap"></input>
  <input type="email" name="email" id="email" autoComplete="email" placeholder="Email"></input>
  </div>
  <textarea id="pesan" name="pesan" placeholder="Pesan/Detail Proyek" rows="4" autoComplete="off"></textarea>
<button className="btn-contact">Kirim Pesan</button>
</div>
</form>

</div>

    </div>



</section>

<section className="copyright">
  <div className="container">
  <span className="txt-copyright">
    © 2025 Dede Sari. Made with
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
  className="w-3 h-3 inline text-red-500 fill-red-500"
>
  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
</svg>

    in Jakarta.
    </span>
  </div>
</section>

</div>


    )

}





export default Dashboard