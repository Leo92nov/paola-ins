import { ArrowDown, ArrowRight, ArrowUpRight, Instagram, Heart, Leaf, Sparkles, MapPin, Mail, Facebook } from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'
import { site, whatsappLink } from './data/site'
import Testimonios from './components/Testimonios'

const testimoniosData = [
  {
    tratamiento: "Descenso de peso",
    paciente: "Patricia Cayrolo",
    devolucion:
      "Paola me hizo el delineado y estoy super bien . Lo recomiendo ,no lo duden"
    },
  {
    tratamiento: "Sueroterapia",
    paciente: "Tina Ixchiel Puthod",
    devolucion:
      "Superrecomendable!!! Una responsabilidad y un amor por su trabajo.Te cambia la vida.Superrecomendable! "
  },
  {
    tratamiento: "Pellet Hormonal",
    paciente: "Adriana Perez",
    devolucion:
      "Excelente profesional!!! Atención personalizada!!! Ambiente cálido y acogedor. Paola es una profesional de la hostia!!!"
  },
  {
    tratamiento: "Tratamiento por Alopecia",
    paciente: "Alejandra Pieri",
    devolucion:
      "La mejor sin dudas, muy recomendable! excelente!!!!"
  },
  {
    tratamiento: "Relleno de labios",
    paciente: "Uki Prieto",
    devolucion:
      "Se nota cuando alguien trabaja sabiendo lo que hace, la atención de Paola es tan excelente como su trabajo. Hiper recomendable"},
  {
    tratamiento: "Radiesse",
    paciente: "Andrea Escribano",
    devolucion:
      "Excelente atención, son muy profesionales, fui con muchas dudas por mis cejas y la verdad estoy muy feliz a casi 8 meses siguen super naturales. ❤️ Gracias"
  },
  {
    tratamiento: "Radiesse",
    paciente: "Doris Vera",
    devolucion:
      "Para mi paola ins Estética es la mejor y le doy la calificación 5 estrellas la mejor de todas siempre cada vez que voy vengo super contenta gracias genia"  
  },
  {
    tratamiento: "Radiesse",
    paciente: "Laura Diuberti",
    devolucion:
      "Quiero recomendar alas chicas Por qué cada trabajo que hacen es buenísimo,Yo me hice de todo un poco. Depilación, pigmentación estética y tratamientos faciales. Y la verdad que estoy más que conforme☺️ La atención es excelente."
  },
  {
    tratamiento: "Radiesse",
    paciente: "Andrea Molina:",
    devolucion:
      "Quiero compartir mi experiencia con Pao!🙌🏻😊de 10+. !! Fue la primera vez que me hacen diseño y pigmentacion de cejas y extensiones. Para ningun turno espere.super!! como cumplio con la atención y muy amable... cada cosa tiene sus cuidados y ella me explicó todo de maravillas... sin dudas volveré! Quede di vi na🤩…"
  }
  ];
const Button = ({children,href,light=false}) => <a href={href} className={`inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-[11px] font-bold uppercase tracking-[.16em] transition duration-300 hover:-translate-y-1 ${light?'bg-white text-[#39312d] hover:bg-[#eee3d8]':'bg-[#8d6d59] text-white hover:bg-[#6d5141]'}`}>{children}<ArrowUpRight size={16}/></a>
function SectionLabel({children}) {return <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.24em] text-[#9b7861]"><span className="h-px w-8 bg-[#ad907c]"/>{children}</p>}
export default function App(){return <>
  <Header/>
  <main>
    <section id="inicio" className="relative flex min-h-[760px] items-center overflow-hidden bg-[#292522] text-white md:min-h-screen">
      <img className="absolute inset-0 h-full w-full object-cover object-center" src={site.heroImage} alt="Ambiente de spa y bienestar" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e1a18]/90 via-[#1e1a18]/60 to-[#1e1a18]/25"/>
        <div className="container-custom relative z-10 pt-28">
          <div className="max-w-[730px]">
            <p className="mb-7 text-[10px] font-semibold uppercase tracking-[.38em] text-[#ead1be]">{site.eyebrow}</p>
            <h1 className="font-display text-6xl leading-[1.12] sm:text-7xl lg:text-[100px]">{site.headline}</h1>
            <p className="mt-8 max-w-lg text-base leading-8 text-white/80">{site.description}</p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a className='inline-block m-4 px-6 py-3 border border-[#e6c8b2] rounded-full font-medium tracking-wide
             hover:bg-[#e6c8b2] hover:text-black
             transition-all duration-300' href={site.whatsapp} light>Agendá tu consulta</a>
              <a href={site.servicios} className="flex items-center gap-3 text-xs font-semibold uppercase hover:text-[#e6c8b2]">Conocé nuestros servicios <ArrowRight size={17}/></a>
            </div>
          </div>
        </div>
      <a href="#nosotros" aria-label="Desplazarse a nosotros" className="absolute bottom-10 left-[max(24px,calc((100vw-1200px)/2))] z-10 flex items-center gap-3 text-[10px] uppercase tracking-[.2em] text-white/70"><ArrowDown size={17}/> Descubrí más</a>
      <span className="absolute bottom-10 right-8 z-10 hidden text-[10px] tracking-[.2em] text-white/60 md:block">ESTÉTICA INTEGRAL</span>
    </section>

    <section className="bg-[#e9ded3] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-16 gap-y-5 text-center text-[10px] font-semibold uppercase tracking-[.23em] text-[#756455]">
        <span>Un momento para vos</span><span>Atención personalizada</span><span>Belleza natural</span><span>Bienestar integral</span>
      </div>
    </section>

    <section id="nosotros" className="section-pad bg-[#f8f5f0]">
      <div className="container-custom grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="relative">
          <img className="h-[480px] w-[90%] object-cover md:h-[610px]" src={site.aboutImage} alt="Tratamiento de cuidado facial"/>
          <div className="absolute -bottom-8 right-0 flex h-44 w-44 flex-col items-center justify-center rounded-full border-[10px] border-[#f8f5f0] bg-[#d8bca8] text-center text-[#4b3b31] md:h-52 md:w-52"><Sparkles size={27} strokeWidth={1}/>
            <span className="mt-3 font-display text-2xl italic">Sentite bien</span><span className="mt-1 text-[10px] tracking-widest">CADA DÍA</span>
          </div>
        </div>
        <div><SectionLabel>Sobre nuestro espacio</SectionLabel>
          <h2 className="font-display text-5xl leading-[1.2] text-[#3b302a] md:text-6xl">La belleza empieza por <em className="text-[#a27c64]">sentirte bien.</em></h2>
          <p className="mt-8 max-w-xl text-[15px] leading-8 text-[#746a62] whitespace-pre-line">{site.about}</p>
          <div className="mt-9 flex gap-5 border-t border-[#dcd1c8] pt-8">
            <p className="max-w-sm text-sm leading-7 text-[#746a62]">Un enfoque cálido y personalizado, con tu bienestar siempre en el centro.</p>
          </div>
          <div className="mt-9">
            <a className="inline-flex items-center gap-3 border-b border-[#8d6d59] pb-2 text-xs font-bold uppercase tracking-[.15em] text-[#6c5141] hover:scale-110 transition-transform duration-300 ease-in-out" href={site.whatsapp}>Conocenos <ArrowUpRight size={17}/></a>
          </div>
        </div>
      </div>
    </section>


    <section id="servicios" className="section-pad bg-[#efe8df]">
      <div className="container-custom">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div><SectionLabel>Experiencias para vos</SectionLabel></div>
            <div className='w-[100%] text-center'>
             <h2 className="font-display text-5xl text-[#3b302a] md:text-6xl">Nuestros <em>servicios</em></h2>
            </div>
          
        </div>
        <div className="grid gap-12 md:grid-cols-3">{site.services.map(s=>
          <article key={s.number} className="group bg-[#f8f5f0] overflow-hidden rounded-xl">
            <div className="overflow-hidden"><img className="h-80 w-full object-cover transition duration-700 group-hover:scale-105" src={s.image} alt={s.title} loading="lazy"/></div>
            <div className="p-8">
              <span className="text-[11px] tracking-widest text-[#a58b77]">{s.lugar}</span>
              <h3 className="mt-4 font-display text-3xl text-[#40352e]">{s.title}</h3>
              <p className="mt-4 min-h-20 text-sm leading-7 text-[#82766d]">{s.description}</p>
              <a href={site.whatsapp} className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.15em] text-[#8d6d59] hover:scale-115 transition-transform duration-300 ease-in-out">Consultar <ArrowUpRight size={16}/></a>
            </div>
          </article>)}
        </div>
      </div>
    </section>


    <section className="bg-[#6f5548] py-24 text-center text-white mb-8">
      <div className="container-custom"><Heart className="mx-auto mb-7 text-[#e5c8b3]" size={35} strokeWidth={1}/>
        <p className="mb-5 text-[10px] uppercase tracking-[.3em] text-[#e6cdbd]">Una pausa que merecés</p>
        <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight md:text-6xl">Regalate un momento para volver a vos.</h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/75">Estamos para acompañarte a encontrar ese espacio de cuidado que necesitás.</p>
        <div className="mt-9"><Button href={site.whatsapp} light>Quiero consultar</Button></div>
      </div>
    </section>

  <Testimonios items={testimoniosData}/>

    <section id="contacto" className="section-pad bg-[#f8f5f0] mt-20">
      <div className="container-custom grid gap-16 lg:grid-cols-2"><div><SectionLabel>Estamos para vos</SectionLabel>
        <h2 className="font-display text-5xl leading-tight text-[#3b302a] md:text-6xl">Empezá tu momento de <em>bienestar.</em></h2>
        <p className="mt-7 max-w-md text-sm leading-8 text-[#746a62]">¿Querés saber más o consultar por un turno? Escribinos y te ayudamos a encontrar la experiencia ideal para vos.</p>
        <div className="mt-9">
          <a href={site.whatsapp} className='inline-block m-4 px-6 py-3 border border-[#e6c8b2] rounded-full font-medium tracking-wide hover:bg-[#e6c8b2] hover:text-black transition-all duration-300'>Contactanos</a>
        </div>
        </div>
        <div className="flex flex-col justify-center gap-8 border-t border-[#ddd1c7] pt-9 lg:border-l lg:border-t-0 lg:pl-20 lg:pt-0">
          <div className="flex gap-5"><MapPin className="text-[#9b7861]" strokeWidth={1.4}/>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest">Ubicación</h3>
              <a href="https://maps.app.goo.gl/aeqJkTY2XizV89CZ9">
                <p className="mt-2 text-sm text-[#81746b] hover:scale-110 transition-transform duration-300 ease-in-out">{site.address}</p>
              </a>
            </div>
          </div>
          <div className="flex gap-5"><Facebook className="text-[#9b7861]" strokeWidth={1.4}/>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest">Facebook</h3>
              <a href={site.facebook} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm text-[#81746b] underline underline-offset-4 hover:scale-110 transition-transform duration-300 ease-in-out">Visitá nuestro perfil</a>
            </div>
          </div>
          <div className="flex gap-5"><Instagram className="text-[#9b7861]" strokeWidth={1.4}/>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest">Instagram</h3>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm text-[#81746b] underline underline-offset-4 hover:scale-110 transition-transform duration-300 ease-in-out">Visitá nuestro perfil</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

<Footer/>
 {/*  <footer className="bg-[#292522] px-6 py-12 text-white">
    <div className="container-custom flex flex-wrap items-center justify-between gap-8">
      <div>
        <p className="font-display text-3xl tracking-[.14em]">{site.brand}</p>
        <p className="mt-2 text-[9px] tracking-[.4em] text-white/60">{site.subtitle}</p>
      </div>
      <p className="text-xs text-white/50">© {new Date().getFullYear()} Paola Ins. Todos los derechos reservados.</p>
      <a href="#inicio" className="text-xs uppercase tracking-widest">Volver arriba ↑</a>
    </div>
  </footer> */}

  </>}
