import { User } from "../../@types/User";

const user: User = {
  logo: "/logo.png",
  image: "/foto.jpeg",
  alt_image: "Logo do Site",
  office: "Desenvolvedor Backend",
  name: "Gustavo Henrique",
  summary: [
    "Estudante de Engenharia da Computação.",
    `Apaixonado por desenvolvimento, enfrentar desafios e compartilhar conhecimento.
    Experiência em NodeJS, Html, CSS, Javascript, MongoDB, SQLServer, Oracle, Docker, metodologia de Kanban.
    
    Quero fazer a diferença e desenvolver soluções com valores agregados para empresa/cliente!`,
  ],
};

export function getUser() {
  return user;
}
