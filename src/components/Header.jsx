import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { site, whatsappLink } from '../data/site'
export default function Header() {
  const [open, setOpen] = useState(false)
  const links = [['Inicio','#inicio'],['Nosotros','#nosotros'],['Servicios','https://www.whatsapp.com/catalog/5492257415589'],['Contacto','#contacto']]
  return <header className="absolute inset-x-0 top-0 z-30 border-b border-white/25 text-white">
    <div className="container-custom flex h-24 items-center justify-between gap-4">
      <a href="#inicio" className="flex leading-none">
        <img src={site.logo} alt="" className='h-15 mr-2' />
        <div className='flex flex-col justify-center'>
          <span className="font-display text-[27px] tracking-[.14em]">{site.brand}</span>
          <span className="mt-2 text-[9px] font-semibold tracking-[.42em]">{site.subtitle}</span>
        </div>
      </a>
      <nav className="hidden items-center gap-9 lg:flex">{links.map(([name,href])=><a key={href} className="text-md tracking-[.12em] transition hover:text-[#e6c8b2] hover:scale-110 transition-transform duration-300 ease-in-out" href={href}>{name}</a>)}</nav>
      <a href={site.whatsapp} className="hidden items-center gap-2 rounded-full border border-white/60 px-6 py-3 text-xs font-semibold tracking-wider transition hover:bg-white hover:text-stone-900 md:flex">RESERVAR TURNO <ArrowUpRight size={15}/></a>
      <button className="lg:hidden" aria-label="Abrir menú" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </div>
    {open&&<nav className="flex flex-col gap-5 bg-[#292522] px-8 py-7 lg:hidden">{links.map(([name,href])=><a onClick={()=>setOpen(false)} key={href} href={href}>{name}</a>)}<a href={whatsappLink()}>Reservar turno</a></nav>}
  </header>
}
