import { Experience } from "../../@types/Experience";

const experiences: Experience[] = [
  {
    title: "Analista de Sistemas Júnior",
    company: "Plusoft",
    description: [
      "Na área de Pesquisa e Desenvolvimento, junto aos times de Roadmap e Sustentação.",
      "Utilizo as tecnologias Javascript (Frontend e Backend), HTML, CSS, Jquery, Banco de Dados SQL Server, Oracle, docker e Kanban.",
    ],
  },
  {
    title: "Estágio em infraestrutura e Redes",
    company: "Laticínios Tirolez",
    description: [
      "Responsável pela Infraestrutura de Servidores, Servidores Windows, redes, suporte técnico, gestão dos equipamentos da empresa e controle de backup.",
    ],
  },
  {
    title: "Estágio em infraestrutura e Redes",
    company: "Plusoft",
    description: [
      "Servidores Linux e Windows, Voip, rotas de Ligações, Infraestrutura de servidores, e Reparos em geral de máquinas,analise e criação de relatórios.",
    ],
  },
  {
    title: "Analista nivel 1",
    company: "CTIS Tecnologia",
    description: [
      "Atendimento a usuários dentro da empresa Via Varejo, Servidores Linux, Ligações Voip e PABX e Suporte remoto.",
    ],
  },
];

export function getExperiences() {
  return experiences;
}
