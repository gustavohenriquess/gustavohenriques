import { User } from "../../@types/User";

const user: User = {
  logo: "/logo.png",
  image: "/foto.jpeg",
  name: "Gustavo Henrique",
  translate: {
    pt: {
      alt_image: "Website logo",
      office: "Engenheiro da computação | Desenvolvedor backend NodeJS",
      summary: [
        `Apaixonado por desenvolvimento, aprender, enfrentar desafios e compartilhar conhecimento.`,
        `Experiência em NodeJS, Html, CSS, Javascript, MongoDB, SQLServer, Oracle, Docker, metodologia de Kanban.`,
        `Atual foco em arquitetura de projetos, desenvolvimento em NodeJS com TypeScript e aprendendo GoLang nas horas vagas.
        Quero fazer a diferença e desenvolver soluções com valores agregados para empresa/cliente!`,
      ],
    },
    en: {
      alt_image: "Website logo",
      office: "Computer engineer | NodeJS Backend developer",
      summary: [
        `Passionate about development, learning, facing challenges and sharing knowledge.`,
        `Experience in NodeJS, Html, CSS, Javascript, MongoDB, SQLServer, Oracle, Docker, Kanban methodology.`,
        `Current focus on project architecture, NodeJS development with TypeScript and learning GoLang in my spare time.
        I want to make a difference and develop value-added solutions for the company/client!`,
      ],
    },
  },
};

export function getUser() {
  return user;
}
