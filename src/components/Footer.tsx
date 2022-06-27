import { FacebookLogo, InstagramLogo } from "phosphor-react";

export function Footer() {
const navItemClass = 'cursor-pointer transition-transform hover:translate-x-1 sm:text-xs'
  return (
    <footer className="sticky top-[100vh] bg-blue-900 p-4 ">
      <div className="flex justify-between gap-2 text-white">
        <nav className="flex flex-col gap-2">
          <span className={navItemClass}>Sobre a Escola</span>
          <span className={navItemClass}>Estrutura</span>
          <span className={navItemClass}>Contato/Localização</span>
          <span className={navItemClass}>Trabalhe Conosco</span>
        </nav>
        <nav className="flex flex-col gap-2">
          <span className={navItemClass}>Agenda</span>
          <span className={navItemClass}>Política de Privacidade</span>
          <span className={navItemClass}>Notícias</span>
          <span className={navItemClass}>Cursos Técnicos</span>
        </nav>
        <nav className="flex flex-col gap-2">
          <span className={navItemClass}>Portal Acadêmico (aluno)</span>
          <span className={navItemClass}>Educação Básica</span>
          <span className={navItemClass}>Portal Acadêmico (Prof.)</span>
          <span className={navItemClass}>Horários EFII e EM</span>
        </nav>
      </div>
      <div className="flex justify-between mt-4">
        <span className="text-white"> © Cássio Rodrigues - 2022.</span>
        <div className="flex gap-4">
          <FacebookLogo size={32} className="text-white transition-transform hover:-translate-y-2 cursor-pointer" weight="bold" />
          <InstagramLogo size={32} className="text-white transition-transform hover:-translate-y-2 cursor-pointer" weight="bold" />
        </div>
      </div>
    </footer>
  )
}




