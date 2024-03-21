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
        `During these years I acquired several skills, in the areas of technology, tools and management.`,
        `I worked in consultancy and CRM development.`,
        `I participated in impact projects in both companies where I developed software for calls, email, product sales, chat, Gift Card, Bots for Whatsapp and Telegram.`,
        `In the last two years, I focused on evolving and taking on more responsibilities in the projects I worked on, seeking to make a difference for both the company and the team.`,
      ],
    },
  },
};

export function getUser() {
  return user;
}
