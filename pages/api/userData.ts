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
        `Desenvolvedor a 6 anos, trabalhando com Javascript, principalmente NodeJS.`,
        `Durante esses anos adquiri diversas habilidades, nas areas de tecnologia, ferramentas e gestão. Trabalhando em consultoria e no desenvolvimento de CRM.`,
        `Participei de projetos de impacto em ambas as empresas onde desenvolvi software de chamados, e-mail, vendas de produtos, chat, Gift Card, Bots para Whatsapp e Telegram.`,
        `Nos últimos dois anos, foquei em evoluir e assumir mais responsabilidades nos projetos em que trabalhei, buscando fazer a diferença tanto para a empresa quanto para o time.`,

      ],
    },
    en: {
      alt_image: "Website logo",
      office: "Computer engineer | NodeJS Backend developer",
      summary: [
        `Developer for 6 years, working with Javascript, mainly NodeJS.`,
        `During these years I expanded several skills tools on technology and management.`,
        `I worked on consultancy and CRM development.`,
        `I participated in impact projects in both companies where I developed software for calls, email, product sales, chat, Gift Card, Bots for Whatsapp and Telegram.`,
        `For the last two years, I focused on evolving and getting more responsibilities on the projects I was involved with, trying to make a difference for both companies and team.`,
      ],
    },
  },
};

export function getUser() {
  return user;
}
