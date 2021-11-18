import { User } from "../../@types/User";

const user: User = {
  logo: "/logo.png",
  image: "/foto.jpeg",
  alt_image: "Logo do Site",
  office: "Desenvolvedor Backend",
  name: "Gustavo Henrique",
  summary: [
    "Estudante de Engenharia da Computação.",
    "Gosto de aprender coisas novas, de colocar a mão na massa e ajudar meus colegas de trabalho com o que sei. Quero estar sempre imerso em uma cultura inovadora e crescendo a cada dia mais. Gosto de trabalhar com novas tecnologias, programação, banco de dados e tratamento de dados.",
  ],
};

export function getUser() {
  return user;
}
