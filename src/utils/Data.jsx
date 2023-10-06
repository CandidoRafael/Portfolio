import { FaReact, FaCss3Alt } from 'react-icons/fa'
import { SiStyledcomponents, SiFirebase, SiJavascript, SiTypescript } from 'react-icons/si'
import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'
import Project3 from '../assets/Project3.png'

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
        tech: 'CSS',
        icon: <FaCss3Alt />
    },
    {
        id:5,
        tech: 'Firebase',
        icon: <SiFirebase />
    },
  
] 


export const projectDetails = [
    {
        id:0,
        project_name: 'Restaurant App',
        project_desc: "It typicall includes features such as a menu with prices, the ability to place an order, and the option to pay for the order directly through the app. Somw restaurant applications also allow the customers to make reservations, view ans the restaurant`s location and hours, and access special deals and promotions",
        tech_stack: ['React JS', 'Tailwind', 'Firebase'],
        project_img: Project1,
        reverse: false
    },
    {
        id:1,
        project_name: 'AnimaMax',
        project_desc: "An Anime Streaming Plataform built with ReactJS. User can sign up and favorite animes to see later in another opportunity",
        tech_stack: ['React JS', 'Tailwind', 'Firebase'],
        project_img: Project2,
        reverse: true,
    },
    {
        id:2,
        project_name: 'Food Peek',
        project_desc: "Lading Page para hamburgueria onde se pode fazer pedidos , criar conta e acompanhar o pedido em tempo atraves de um geoloalizador",
        tech_stack: ['HTML', 'CSS', 'Javascript'],
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