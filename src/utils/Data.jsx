import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiStyledcomponents, SiJavascript, SiTypescript } from 'react-icons/si'
import { BiLogoMongodb } from 'react-icons/bi'
import Project1 from '../assets/DevDoodle.png'
import Project2 from '../assets/Cointrackr.png'
import Project3 from '../assets/MelindaRestaurante.png'

export const Skills = [

    {
        id:0,
        tech: 'React JS',
        icon: <FaReact />
    },
    {
        id:1,
        tech: 'Javascript',
        icon: <SiJavascript />
    },
    {
        id:2,
        tech: 'Typescript',
        icon: <SiTypescript />
    },
    {
        id:3,
        tech: 'Styled-Components',
        icon: <SiStyledcomponents />
    },
    {
        id:4,
        tech: 'MongoDB',
        icon: <BiLogoMongodb />
    },
    {
        id:5,
        tech: 'Node.JS',
        icon: <FaNodeJs />
    },
  
] 


export const projectDetails = [
    {
        id:0,
        project_name: 'DevDoodle Blog',
        project_link: 'https://devdoodle.vercel.app',
        project_github: 'https://github.com/CandidoRafael/Front_DevDoodle',
        project_desc: `
          Esse projeto é um blog dedicado ao mundo da tecnologia, 
          repleto de informações valiosas, dicas e tutorias, 
          basta criar sua conta e já é possível criar uma publicação.
          Utilizei tecnologias do mercado, como React-hook-form, React-Query, ContextAPI e ZOD.
        `,
        tech_stack: ['React', 'Typescript', 'Express', 'MongoDB'],
        project_img: Project1,
        reverse: false
    },
    {
        id:1,
        project_name: 'CoinTrackr',
        project_link: 'https://cointrackr.vercel.app',
        project_github: 'https://github.com/CandidoRafael/CoinTracker-app-master',
        project_desc: `
         É uma aplicação para o gerenciamento financeiro e 
         investimentos construída com React, Zustand, Firebase 
         e React-Charts. Ele permite que você defina metas financeiras, 
         rastreie gastos e analise por meio de gráficos dinâmicos.
        `,
        tech_stack: ['React', 'Zustand', 'Firebase'],
        project_img: Project2,
        reverse: true,
    },
    {
        id:2,
        project_name: 'Melinda Restaurante',
        project_link: 'https://comanda-eletronica.vercel.app',
        project_github: 'https://github.com/Melinda-Resturante',
        project_desc: `
          Aplicação para o Melinda Resturante, onde é responsável 
          pelo gerenciamento de comandas eletronicas, estoque,
          produtos, cadastro de funcionários no sistema entre outras funcionalidades. Ele está sendo
          desenvolvido com React, Express, Node.JS e MySQL.

        `,
        tech_stack: ['React', 'Node.JS', 'MySQL'],
        project_img: Project3,
        reverse: false
    }
]

export const navLinks = [
    {
        id: 0,
        name: 'Home',
        href: 'Home'
    },
    {
        id: 1,
        name: 'Skills',
        href: 'Skills'
    },
    {
        id: 2,
        name: 'Projetos',
        href: 'Projects'
    },
    {
        id: 3,
        name: 'Contato',
        href: 'Contact'
    }
]