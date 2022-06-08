import { Experience } from "../../@types/Experience";

const experiences: Experience[] = [
  {
    company: "Accenture",
    translate: {
      pt: {
        title: "Application Development Analyst",
        description: [],
      },
      en: {
        title: "Application Development Analyst",
        description: [],
      },
    },
  },
  {
    company: "Plusoft",
    translate: {
      pt: {
        title: "Analista de Sistemas Júnior",
        description: [
          "Na área de Pesquisa e Desenvolvimento, junto aos times de Roadmap e Sustentação.",
          "Utilizo as tecnologias Javascript (Frontend e Backend), HTML, CSS, Jquery, Banco de Dados SQL Server, Oracle, Docker e Kanban.",
        ],
      },
      en: {
        title: "Junior System Analyst",
        description: [
          "In the Research and Development area, together with the Roadmap and Support teams.",
          "I use Javascript technologies (Frontend and Backend), HTML, CSS, Jquery, SQL Server Database, Oracle, Docker and Kanban.",
        ],
      },
    },
  },
  {
    company: "Laticínios Tirolez",
    translate: {
      pt: {
        title: "Estágio em infraestrutura e Redes",
        description: [
          "Responsável pela infraestrutura de servidores, Servidores windows, redes, suporte técnico, gestão dos equipamentos da empresa e controle de backup.",
        ],
      },
      en: {
        title: "Internship in Infrastructure and Networks",
        description: [
          "Responsible for server infrastructure, Windows servers, networks, technical support, management of company equipment and backup control.",
        ],
      },
    },
  },
  {
    company: "Brastel",
    translate: {
      pt: {
        title: "Estágio em infraestrutura e Redes",
        description: [
          "Servidores linux e windows, Voip, rotas de ligações, Infraestrutura de servidores, e Reparos em geral de máquinas,analise e criação de relatórios.",
        ],
      },
      en: {
        title: "Internship in Infrastructure and Networks",
        description: [
          "Linux and Windows servers, Voip, Call routes, Server Infrastructure, and General machine repairs, Analysis and reporting.",
        ],
      },
    },
  },
  {
    company: "CTIS Tecnologia",
    translate: {
      pt: {
        title: "Analista nível 1",
        description: [
          "Atendimento a usuários dentro da empresa Via Varejo, Servidores Linux, Ligações Voip e PABX e Suporte remoto.",
        ],
      },
      en: {
        title: "Level 1 Analyst",
        description: [
          "Customer service within the company Via Varejo, Linux servers, Voip and PABX calls and remote support.",
        ],
      },
    },
  },
];

export function getExperiences() {
  return experiences;
}
