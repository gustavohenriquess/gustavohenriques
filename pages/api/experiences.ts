import {
  Experience
} from "../../@types/Experience";

const experiences: Experience[] = [{
    company: "Accenture",
    translate: {
      pt: {
        title: "Application Development Analyst",
        description: [
          `Analista de Desenvolvimento atuando como Desenvolvedor Backend em projetos na Sky.`,
          `Atuo desempenhando um papel fundamental na minha equipe liderando o time tecnicamente e como desenvolvedor Backend na criação de novos projetos. Apoio aos PM, PO e SM para análise de projetos, levantamento de requisitos, identificação de possíveis desafios antes que se tornem um problema, organização das tarefas e distribuição delas.`,
          `Dentro dos 7 projetos já efetuados no cliente utilizei as seguintes tecnologias:
            AWS (Lambda, EC2, DynamoDB, S3, SQS, SNS, CloudWatch), 
            NodeJS, 
            Jenkins, DataDog, Splunk, 
            MongoDB`,  
      ],
      },
      en: {
        title: "Application Development Analyst",
        description: [
          `Development Analyst working as Backend Developer on projects at Sky.`,
          `I play a fundamental role in my team, leading the team technically and as a Backend developer in the creation of new projects. Support for PM, PO and SM to analyze projects, gather requirements, identify possible challenges before they become a problem, organize tasks and distribute them.`,
          `Within the 7 projects already carried out at the client, I used the following technologies: 
          AWS (Lambda, EC2, DynamoDB, S3, SQS, SNS, CloudWatch), 
          NodeJS, 
          Jenkins, DataDog, Splunk, 
          MongoDB`,
        ],
      },
    },
  },
  {
    company: "Plusoft",
    translate: {
      pt: {
        title: "Analista de Sistemas Júnior",
        description: [
          `Na área de Pesquisa e Desenvolvimento, junto aos times de Roadmap e Sustentação.`,
          `Junto ao time de Roadmap desenvolvo novas funcionalidades do CRM, e refatoramos o produto utilizando tecnologias low code e alteramos a arquiterura para uma baseada em microsserviços.`,
          `Junto ao time de Sustentação faço analises e desenvolvimento de erros encontrados por QA e Clientes.`,
          `Ajudo a efetuar deploy, criações de APIs no padrão Restful e tive oportunidades de planejar novas funcionalidades e melhorias do zero.`,
          `Tive a oportunidade de desenvolver uma POC para uma automatizar o processo de testes da nossa aplicação.`,
          `Utilizo Javascript (Frontend e Backend), NodeJS, HTML, CSS, Jquery, Banco de Dados SQL Server, Oracle e MongoDB e metodologia Kanban.`,

        ],
      },
      en: {
        title: "Junior System Analyst",
        description: [
          `In the Research and Development area, together with the Roadmap and Support teams.`,
          `Together with the Roadmap team, I develop new CRM features, and we refactor the product using low code technologies and change the architecture to one based on microservices.`,
          `Together with the Support team, I analyze and develop errors found by QA and Customers.`,
          `I help deploy, create APIs using the Restful standard and have the opportunity to plan new features and improvements from scratch.`,
          `I had the opportunity to develop a POC to automate the testing process of our application.`,
          `I use Javascript (Frontend and Backend), NodeJS, HTML, CSS, Jquery, SQL Server Database, Oracle and MongoDB and Kanban methodology.`,
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
          "Responsável pela Infraestrutura de Servidores, Servidores Windows, redes, suporte técnico, gestão dos equipamentos da empresa e controle de backup.",
        ],
      },
      en: {
        title: "Internship in Infrastructure and Networks",
        description: [
          "Responsible for Server Infrastructure, Windows Servers, networks, technical support, management of company equipment and backup control.",
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
          "Servidores Linux e Windows, Voip, rotas de Ligações, Infraestrutura de servidores, e reparos em geral de máquinas, análise e criação de relatórios.",
        ],
      },
      en: {
        title: "Internship in Infrastructure and Networks",
        description: [
          "Linux and Windows servers, VoIP, call routes, server infrastructure, and general machine repairs, analysis and creation of reports.",
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
          "Support for users within the company Via Varejo, Linux Servers, VoIP and PBX calls and remote support.",
        ],
      },
    },
  },
];

export function getExperiences() {
  return experiences;
}