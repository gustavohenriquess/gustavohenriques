import { Course } from "../../@types/Course";

const courses: Course[] = [
  {
    title: "NODE.JS: REFRESH TOKENS E CONFIRMAÇÃO DE CADASTRO",
    company: "Alura",
    date: "Junho de 2021",
    href: "https://cursos.alura.com.br/certificate/6f681837-63b1-4b25-b074-f717159c0801",
    key: "6f681837-63b1-4b25-b074-f717159c0801",
  },
  {
    title: "DevOps & Agile Culture",
    company: "Fiap",
    date: "Abril de 2021",
    href: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=2679fd811cffcf8d294e6d627f593d04&action=view",
    key: "2679fd811cffcf8d294e6d627f593d04",
  },
  {
    title: "NODE.JS E JWT: AUTENTICAÇÃO COM TOKENS",
    company: "Alura",
    date: "Abril de 2021",
    href: "https://cursos.alura.com.br/certificate/fff8ec95-57ca-46ce-a309-190d9ea31b23",
    key: "fff8ec95-57ca-46ce-a309-190d9ea31b23",
  },
  {
    title: "MONGODB: MODELAGEM DE DADOS",
    company: "Alura",
    date: "Dezembro de 2020",
    href: "https://cursos.alura.com.br/certificate/4c2aad28-29a9-4a0c-b5d3-ea01b063dc77",
    key: "4c2aad28-29a9-4a0c-b5d3-ea01b063dc77",
  },
  {
    title: "NODEJS: CRIE UMA API REST PADRONIZADA E ESCALÁVEL",
    company: "Alura",
    date: "Dezembro de 2020",
    href: "https://cursos.alura.com.br/certificate/d0323013-0bb7-41f5-883c-1d4d3bad1c99",
    key: "d0323013-0bb7-41f5-883c-1d4d3bad1c99",
  },
  {
    title: "NODEJS: STREAMING DE DADOS E REPOSITÓRIO",
    company: "Alura",
    date: "Dezembro de 2020",
    href: "https://cursos.alura.com.br/certificate/171c2cdb-99a9-46f1-8856-89b3d200f126",
    key: "171c2cdb-99a9-46f1-8856-89b3d200f126",
  },
  {
    title: "PERFORMANCE WEB II: CRITICAL PATH, HTTP/2 E RESOURCE HINTS",
    company: "Alura",
    date: "Novembro de 2020",
    href: "https://cursos.alura.com.br/certificate/ac47d01c-25ec-47ca-885b-b9b96b4091db",
    key: "ac47d01c-25ec-47ca-885b-b9b96b4091db",
  },
  {
    title: "REST COM NODEJS: API COM EXPRESS E MYSQL",
    company: "Alura",
    date: "Novembro de 2020",
    href: "https://cursos.alura.com.br/certificate/cfecf0d6-1e21-4b98-bd88-4cbf5a70d58b",
    key: "cfecf0d6-1e21-4b98-bd88-4cbf5a70d58b",
  },
  {
    title: "PERFORMANCE WEB I: OTIMIZANDO O FRONT-END",
    company: "Alura",
    date: "Setembro de 2020",
    href: "https://cursos.alura.com.br/certificate/67688380-e464-4ebf-806d-0c6cab533518",
    key: "67688380-e464-4ebf-806d-0c6cab533518",
  },
  {
    title: "JAVASCRIPT: SALVANDO DADOS LOCALMENTE COM INDEXEDDB",
    company: "Alura",
    date: "Abril de 2020",
    href: "https://cursos.alura.com.br/certificate/5dbc2382-2a69-43c0-8729-d2d243fed8ea",
    key: "5dbc2382-2a69-43c0-8729-d2d243fed8ea",
  },
  {
    title: "JAVASCRIPT: APROFUNDANDO EM MVC, PADRÃO PROXY E FACTORY",
    company: "Alura",
    date: "Março de 2020",
    href: "https://cursos.alura.com.br/certificate/6cb3530d-728b-4557-827e-f1eec159c456",
    key: "6cb3530d-728b-4557-827e-f1eec159c456",
  },
  {
    title: "JAVASCRIPT: CONHECENDO O BROWSER E PADRÕES DE PROJETO",
    company: "Alura",
    date: "Fevereiro de 2020",
    href: "https://cursos.alura.com.br/certificate/d794f64c-87af-490d-9d36-fd3e87640da6",
    key: "d794f64c-87af-490d-9d36-fd3e87640da6",
  },
  {
    title: "HTTP: MONGODB: UMA ALTERNATIVA AOS BANCOS RELACIONAIS TRADICIONAIS",
    company: "Alura",
    date: "Outubro de 2019",
    href: "https://cursos.alura.com.br/certificate/7c8d5017-20db-4256-af4d-e89872f479f0",
    key: "7c8d5017-20db-4256-af4d-e89872f479f0",
  },
  {
    title: "JAVASCRIPT: PROGRAMANDO NA LINGUAGEM DA WEB",
    company: "Alura",
    date: "Maio de 2019",
    href: "https://cursos.alura.com.br/certificate/0ace2991-f280-49bf-a2ce-f73ba91afde4",
    key: "0ace2991-f280-49bf-a2ce-f73ba91afde4",
  },
  {
    title: "HTTP: ENTENDENDO A WEB POR BAIXO DOS PANOS",
    company: "Alura",
    date: "Agosto de 2018",
    href: "https://cursos.alura.com.br/certificate/910864cf-f099-4ff7-b9ba-2e2a7fe4531e",
    key: "910864cf-f099-4ff7-b9ba-2e2a7fe4531e",
  },
];

export function getCourses() {
  return courses;
}
