import { DefaultUi, Player, Youtube } from "@vime/react";
import '@vime/core/themes/default.css'
import { Interest } from "./interest";
import classRoomIcon from '../assets/classroom-icon.png'
import fabricaDeProvasIcon from '../assets/fabrica-de-provas-logo.png'
import plurallIcon from '../assets/Logo-plurall.png'

export function Video() {
  return (
    <div className="flex-1 mt-4 flex flex-col">
      <div className="flex justify-between flex-wrap gap-4">
        <div className="bg-transparent flex flex-col flex-1 gap-7 items-start">
          <h2 className="text-3xl text-blue-900">Em Destaque</h2>
          <div className="h-full w-full aspect-video">
            <Player>
              <Youtube videoId="KEC7eOoNAp0" />
              <DefaultUi />
            </Player>
          </div>
        </div>
        <div className="flex flex-col min-w-[40%] 2xl:w-full">
          <h2 className="text-3xl text-blue-900 self-start">Interesses</h2>
          <div className="flex-1 w-full flex flex-col justify-between">
            <Interest
              title="Vagas para Educação Infantil a Ensino Médio para 2022"
              subtitle="Colégio Sinodal Progresso - Novos Sonhos, Novas Realizações"
              link="#"
            />
            <Interest
              title="Convênios para desconto"
              subtitle="Convênio de cooperação educacional para descontos em mensalidades escolares."
              link="#"
            />
            <Interest
              title="Preparando-se para o Mercado de Trabalho?"
              subtitle="Cursos técnicos/especializações do CSP em 2022!"
              link="#"
            />
            <footer className="flex flex-col items-center">
              <h2 className="text-2xl text-blue-900">Portais Parceiros</h2>
              <div className="flex flex-wrap gap-3 justify-between items-center w-full">
                <div className="w-28 h-28">
                  <img src={classRoomIcon} alt="" />
                </div>
                <div className="max-w-[120px]">
                  <img className="w-full" src={fabricaDeProvasIcon} alt="" />
                </div>
                <div className="max-w-[120px]">
                  <img src={plurallIcon} alt="" />
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}