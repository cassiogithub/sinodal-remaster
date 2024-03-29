import eduConectionIcon from '../assets/educonnect-icon.png'
import cspLogoIcon from '../assets/csp-logo.png'
import angloIcon from '../assets/anglo-logo.png'
import { List, X } from 'phosphor-react'
import { useState } from 'react'
export function Header() {
  const classNavItem = 'text-blue-900 font-semibold py-3 h-full border-transparent hover:border-blue-900 border-b-4 transition-colors cursor-pointer'
  const classNavItemHamburguer = 'text-white font-bold'
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <header className="block">
      <div className="flex flex-wrap gap-4 items-center justify-between py-2">
        <div className="flex items-center gap-4">
          <img src="https://static.wixstatic.com/media/f3e530_0fa0f26377614ed8b1a9b40e4294f410~mv2.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20CTSP%20CMYK%20(Apenas%20logo).png" alt="" />
          <div>
            <strong className="block text-blue-900">
              Sinodal Progresso
            </strong>
            <span className="block text-blue-900 text-sm">
              Centro Tecnológico
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 xl:hidden">
          <img className="w-14" src={eduConectionIcon} alt="EduConnect-logo" />
          <img className="w-14" src={cspLogoIcon} alt="CSP Logo" />
          <img className="w-14" src={angloIcon} alt="Anglo Sistemas de Educação" />
        </div>
        <span className="text-blue-900 text-xl">Um lugar onde nascem os sonhos!</span>
      </div>
      <div className="block border-b">
        <nav className="flex items-center justify-between h-full lg:hidden">
          <span className={classNavItem}>Sobre</span>
          <span className={classNavItem}>Educação Básica</span>
          <span className={classNavItem}>Cursos Técnicos</span>
          <span className={classNavItem}>Agenda</span>
          <span className={classNavItem}>Notícias</span>
          <span className={classNavItem}>Plurall</span>
          <span className={classNavItem}>Portal Acadêmico</span>
          <span className={classNavItem}>Lista de Materiais</span>
          <span className={classNavItem}>LGPD</span>
        </nav>
        {navbarOpen ? (
          <div className='bg-blue-900 fixed -top-full left-0 w-screen h-screen z-[80] p-8 translate-y-full transition duration-500 transform'>
            <span onClick={() => setNavbarOpen(false)}>
              <X size={32} color="#fff" />
            </span>
            <div className='w-full h-full'>
              <nav className="flex flex-col items-center justify-center gap-5 h-full">
                <span className={classNavItemHamburguer}>Sobre</span>
                <span className={classNavItemHamburguer}>Educação Básica</span>
                <span className={classNavItemHamburguer}>Cursos Técnicos</span>
                <span className={classNavItemHamburguer}>Agenda</span>
                <span className={classNavItemHamburguer}>Notícias</span>
                <span className={classNavItemHamburguer}>Plurall</span>
                <span className={classNavItemHamburguer}>Portal Acadêmico</span>
                <span className={classNavItemHamburguer}>Lista de Materiais</span>
                <span className={classNavItemHamburguer}>LGPD</span>
              </nav>
            </div>
          </div>
        ) : (
          <div className="flex-col items-center justify-center lg:flex hidden transition duration-100 transform " onClick={() => setNavbarOpen(true)}>
            <span className='text-xs text-gray-600'>Menu</span>
            <List size={40} className="text-blue-900" />
          </div>
        )}
      </div>
    </header>
  )
}