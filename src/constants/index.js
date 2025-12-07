import {
  frontend,
  backend,
  analysis,
  conception,
  data_v_p,
  agile,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  git,
  docker,
  postgresql,
  graphql,
  csharp,
  expressjs,
  java,
  sqlserver,
  oracle,
  mongodb,
  monetdb,
  provis,
  mydentoapp,
  elearning,
  yassir,
  mobilis,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Business Analysis',
    icon: analysis,
  },
  {
    title: 'Data viz / Data process',
    icon: data_v_p,
  },
  {
    title: 'Agile Methodologies',
    icon: agile,
  },
  {
    title: 'Software Conception',
    icon: conception,
  },
  {
    title: 'Frontend Development',
    icon: frontend,
  },
 
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'C#',
    icon: csharp,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Express JS',
    icon: expressjs,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'sqlserver',
    icon: sqlserver,
  },
  {
    name: 'oracle',
    icon: oracle,
  },
  {
    name: 'monet db',
    icon: monetdb,
  },
  {
    name: 'mongodb',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Analyst Developer',
    company_name: 'Freelancer',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Sep 2017 - Fev 2018',
  },
  {
    title: 'Software Engineer Intern | VR/AR dev',
    company_name: 'CDTA',
    icon: microverse,
    iconBg: '#333333',
    date: 'Sep 2018 - Sep 2019',
  },
  {
    title: 'IT Business Analyst |  Software Engineer ',
    company_name: 'Mobilis',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Jan 2020 - Sep 2020',
  },
  {
    title: 'Functional Business Analyst',
    company_name: 'LIST',
    icon: dcc,
    iconBg: '#333333',
    date: 'Apr 2021 - Present',
  },
  {
    title: 'Functional Business Analyst',
    company_name: 'ITS4U',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sept 2024 - Mars 2025',
  },
  {
    title: 'Functional Business Analyst',
    company_name: 'NovaIT',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jan 2024 - Present',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'PROVIS',
    description: 'PROVIS is a Data Viz/Processing software that process nanotechnology instruments big mass of data, integrating high-resolution SIMS/SEM images with advanced features and focusing on image calculus, correlative microscopy and clustering.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'pink-text-gradient',
      },
      {
        name: 'expressjs',
        color: 'orange-text-gradient',
      },
    ],
    image: provis,
  },
  {
    id: 'project-',
    name: 'Mobilis phone operator',
    description:
        'This is the main website of the phone operator where I worked in Functional Analysis, conception and Development of .Net and Java apps of sales and finance',
    tags: [
      {
        name: 'Java',
        color: 'blue-text-gradient',
      },
      {
        name: 'C#',
        color: 'green-text-gradient',
      },
      {
        name: 'ASP',
        color: 'pink-text-gradient',
      },
    ],
    image: mobilis,
    repo: 'https://mobilis.dz/',
  },
  {
    id: 'project-3',
    name: 'MyDentoApp',
    description:
      'MyDentoApp is a Dental Practice Management desktop Software.In principle, it automates all the functions of a doctor within his practice.',
    tags: [
      {
        name: 'C#',
        color: 'blue-text-gradient',
      },
      {
        name: '.Net',
        color: 'green-text-gradient',
      },
      {
        name: 'SQL server',
        color: 'pink-text-gradient',
      },
    ],
    image: mydentoapp,
    repo: 'https://github.com/HasnaRahma/MyDentoApp',
  },
  {
    id: 'project-4',
    name: 'E-learn with VR/AR',
    description: 'E-learning platform containing the ministerial school program divided into levels and subjects,and it is equipped with courses/exercises based on 3D interaction in VR/AR.',
    tags: [
      {
        name: 'VR/AR',
        color: 'blue-text-gradient',
      },
      {
        name: 'Moodle',
        color: 'green-text-gradient',
      },
      {
        name: 'Html/CSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'Bootstrap',
        color: 'blue-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'orange-text-gradient',
      },
      {
        name: 'C#',
        color: 'green-text-gradient',
      },
      {
        name: 'Unity3D',
        color: 'pink-text-gradient',
      },
    ],
    image: elearning,
    repo: 'https://github.com/HasnaRahma/VR-AR_educational_games',
  },
  {
    id: 'project-5',
    name: 'Yassir',
    description: `Your ultimate solution for hassle-free ride-hailing, designed for your convenience and safety, where I worked as a web dev freelancer `,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: yassir,
    repo: 'https://yassir.com',
  },

];

export { services, technologies, experiences, projects };
